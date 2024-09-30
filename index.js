const readline = require('readline');
const { getAskPrice } = require('./src/GetPrice')
const { placeOrder } = require('./src/PlaceOrder')

require('dotenv').config(); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const API_KEY = process.env.API_KEY; 
const API_SECRET = process.env.API_SECRET;
const BASE_URL = process.env.BASE_URL; 

function sleep(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

async function countdown(delay) {
  let totalSeconds = delay * 60;
  while (totalSeconds > 0) {
    process.stdout.write(`\rWaiting for next order: ${Math.floor(totalSeconds / 60)}m ${totalSeconds % 60}s `);
    await sleep(1);  // Delay 1 detik
    totalSeconds--;
  }
  console.log('\nOrder placed!');
}

async function main() {
  rl.question('Pair Code (EX: BTCUSDT): ', async (pairCode) => {
    const askPrice = await getAskPrice(BASE_URL, pairCode);
    if (!askPrice) {
      rl.close();
      return;
    }

    console.log(`Pair valid: ${pairCode}. New Pair: ${askPrice}`);

    rl.question('Order Per Place: ', (quantity) => {
      rl.question('Delay (minute): ', async (delay) => {
        rl.close();
        while (true) {
          const currentAskPrice = await getAskPrice(BASE_URL, pairCode); 
          await placeOrder(API_SECRET, API_KEY, BASE_URL, pairCode, quantity, currentAskPrice); 
          await countdown(delay);  
        }
      });
    });
  });
}

main();
