'use strict';

module.exports.log = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'AWS CI/CD Testing!',
        version: '1.0',
        timestamp: Date.now()
      }
    ),
  };
};
