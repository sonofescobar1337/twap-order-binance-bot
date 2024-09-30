const axios = require('axios');

const { getServerTime } = require('./servertime')
const { createSignature } = require('./Signature')


async function placeOrder(secret_key, API_KEY, BASE_URL, pair, quantity, price) {
    const timestamp = await getServerTime(BASE_URL); // Gunakan server time dari Binance
    const queryString = `symbol=${pair}&side=BUY&type=LIMIT&timeInForce=GTC&quantity=${quantity}&price=${price}&timestamp=${timestamp}`;
    const signature = createSignature(secret_key, queryString);
  
    try {
      const response = await axios.post(`${BASE_URL}/api/v3/order`, null, {
        headers: {
          'X-MBX-APIKEY': API_KEY,
        },
        params: {
          symbol: pair,
          side: 'BUY',
          type: 'LIMIT',
          timeInForce: 'GTC',
          quantity: quantity,
          price: price,
          timestamp: timestamp,
          signature: signature,
        },
      });
      console.log('Order Placed:', response.data);
    } catch (error) {
      console.error('Error Place order:', error.message, error.response?.data);
    }
  }

module.exports = { placeOrder }