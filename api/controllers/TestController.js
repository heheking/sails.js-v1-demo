/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  t1(req, res) {
    console.log("TestController is working now. function t1()");
    return res.send("TestController t1 end");
  },
  async t2(req, res) {
    sails.log(req.body);
    let result = await sails.helpers.hello(req.body.name);
    sails.log("after helper.");
    return res.send(result);
  },
  async t3(req, res) {
    sails.log("file upload.");
    req.file('avatar').upload(function (err, uploadedFiles) {
      maxBytes: 10000000
    }, async function whenDone(err, uploadedFiles) {
      if (err) {
        return res.serverError(err);
      }
  
      // If no files were uploaded, respond with an error.
      if (uploadedFiles.length === 0){
        return res.badRequest('No file was uploaded');
      }

      let upObj = await UpObj.create({"fd": uploadedFiles[0].fd}).fetch();

      res.json({"code": 200, "upObj": upObj})
    });
  },
  async t4(req, res) {
    var SkipperDisk = require('skipper-disk');
    var fileAdapter = SkipperDisk(/* optional opts */);

    // set the filename to the same file as the user uploaded
    res.set("Content-disposition", "attachment; filename='" + Math.random()*100000000 + "'");



    const { id } = req.body;
    const criteria = {id};

    let target = await UpObj.findOne(criteria);

    let fd = target.fd;
    sails.log(fd);

    // 待优化
    while(fd.indexOf('\\') != -1) {
      fd = fd.replace('\\', '/');
    }

    // Stream the file down
    sails.log(fd);

    fileAdapter.read(fd)
    .on('error', function (err){
      return res.serverError(err);
    })
    .pipe(res);
  }
};

