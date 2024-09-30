const axios = require('axios');


async function getAskPrice(BASE_URL, pair) {
    try {
      const response = await axios.get(`${BASE_URL}/api/v3/ticker/bookTicker`, {
        params: { symbol: pair },
      });
      return response.data.askPrice;
    } catch (error) {
      console.error('Pair tidak valid atau terjadi kesalahan:', error.message);
      return null;
    }
  }


module.exports = {
    getAskPrice
}