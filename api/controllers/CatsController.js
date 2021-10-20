/**
 * CatsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// const Cats = require("../models/Cats");

module.exports = {
  t1(req, res) {
    return res.send("CatsController is working now. function t1()");
  },
  async get(req, res) {
    // sails.log(req);
    if(req.body) {
      sails.log('---------------------------------');
      let query = await Cats.find({
        where: req.body,
      });
      sails.log(query);
      sails.log('---------------------------------');
      return res.send(query);
    } else {
      return res.send(null);
    }
    
  },
  async insert(req, res) {
    sails.log("Get from req.params:" + JSON.stringify(req.params));
    sails.log("Get from req.path:" + JSON.stringify(req.path));
    // 注意只有 post请求有 req.body
    sails.log("Get from req.body:" + JSON.stringify(req.body));
    sails.log("Get from req.url:" + JSON.stringify(req.url));
    sails.log('---------------------------------');
    // Sails.js 并没有给 create() 设置返回值，需要写一个监听器或Promise解决异常捕获的问题
    let result = await Cats.create(req.body);
    // sails.log(result);
    sails.log('---------------------------------');
    return res.send(req.body);
  },
  async update(req, res) {
    sails.log('---------------------------------');
    let result = await Cats.updateOne({id: req.body.id}).set(req.body);
    sails.log("CatsController update() log: data after updated = " + result);
    sails.log('---------------------------------');
    return res.send(result);
  },
  async delete(req, res) {
    sails.log('---------------------------------');
    let result = await Cats.destroyOne({id: req.body.id});
    if(result) {
      sails.log("CatsController delete(): delete successlly.");
    } else {
      sails.log("CatsController update() log: delete failed.");
    }
    sails.log('---------------------------------');
    return res.send(result);
  }
};

