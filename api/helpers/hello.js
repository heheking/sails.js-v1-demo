module.exports = {
  friendlyName: 'Hello',
  description: 'Hello something.',
  inputs: {
    name: {
      type: 'string',
      example: 'Ami',
      description: 'The name of the person to greet.',
      required: true
    }
  },
  exits: {
    success: {
      description: 'All done.',
    },
    inputNotString: {
      description: "The inputs isn't string"
    }
  },
  fn: async function (inputs, exits) {
    sails.log("sails.helpers.hello is working.");
    if(!typeof(inputs) == 'string') throw { inputNotString :{message: 'The inputs is not string.'}};
    return exits.success("hello, " + inputs.name);
  }
};

