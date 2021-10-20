

module.exports = {
  friendlyName: 'Create cat',
  description: '',
  inputs: {
    name: {
      description: 'the name of cat.',
      type: 'string',
      required: true
    },
    age: {
      type: 'number',
      required: true
    }
  },
  exits: {
    ageIllegal:{
      statusCode: 411
    },
    forbidden: {
      statusCode: 403
    },
    success: {
      statusCode: 200
    }
  },

  fn: async function (inputs) {
    if(!inputs.age || inputs.age > 1000) {
      throw { ageIllegal: {message: `The age is null or age unnormal.`}};
    }
    // All done.
    sails.log("---------------------------")
    sails.log(inputs)
    let res = await Cats.create(inputs);
    sails.log("---------------------------")
    return;
  }
};
