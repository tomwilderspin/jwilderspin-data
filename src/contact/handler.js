'use strict';

const AWS = require('aws-sdk');

module.exports.index = (event, context, callback) => {

  console.log(JSON.stringify({input: event}));

  //canned success response
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'success',
    }),
  };

  callback(null, response);
};
