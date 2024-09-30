const crypto = require('crypto');



function createSignature(API_SECRET, queryString) {
    return crypto.createHmac('sha256', API_SECRET).update(queryString).digest('hex');
  }


  module.exports = { createSignature }