/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /': 'pages/homepage',
  // action 的绑定办法
  'GET /demo': 'demo',
  // controller 该如何绑定
  'GET /test/t1': 'TestController/t1', 
  'POST /a/cc': 'action/create-cat'
};
