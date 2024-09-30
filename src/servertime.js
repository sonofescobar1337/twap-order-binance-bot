const axios = require('axios');

async function getServerTime(BASE_URL) {
    const response = await axios.get(`${BASE_URL}/api/v3/time`);
    return response.data.serverTime;
  }



module.exports = {
    getServerTime
}