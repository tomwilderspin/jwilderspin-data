'use strict';

const AWS = require('aws-sdk');

const sns = new AWS.SNS();

module.exports.index = (event, context, callback) => {

  const inputData = event.body;

  console.log(inputData);

  const params = {
    Message: JSON.stringify(inputData),
    Subject: 'New Contact Form Submission',
    TopicArn: "arn:aws:sns:eu-west-1:010704906608:jwilderspin-contact"
  };

  return new Promise((resolve, reject) => {
    sns.publish(params, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });

  })
  .then((data) => {
    console.log(data);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({message: "success"}),
    });
  })
  .catch((err) => {
    console.log(err, err.stack);
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({message: "fail"}),
    });
  });
};
