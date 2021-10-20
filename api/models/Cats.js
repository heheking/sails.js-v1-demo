/**
 * Cats.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: 'number', 
      autoIncrement: true
    }, 
    name: {
      type: 'string', 
      required: true
    },
    age: {
      type: 'number', 
      required: false
    }
  },

  // 钩子
  beforeCreate: async function(valuesToSet, proceed) {
    sails.log("Cat's hook of beforeCreate.");
    return proceed();
  },
  beforeUpdate: async function(valuesToSet, proceed) {
    sails.log("Cat's hook of beforeUpdate.");
    return proceed();
  },
  // 实体自己的方法
  customToJSON: function() {
    return _.omit(this, ['name']);
  },
};

