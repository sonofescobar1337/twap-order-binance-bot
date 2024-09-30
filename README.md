# Binance TWAP Order Bot

This Node.js script allows you to place automated orders on Binance based on the current ask price for a given trading pair. After each successful order, the script retrieves and displays the balance for both the base and quote assets (e.g., `BNB` and `USDT` for `BNBUSDT`).
As far as I know, TWAP orders are only accessible to VIP 1 users, which is why I created this bot.

## Features
- Fetches the latest ask price for a specified pair.
- Places limit orders using Binance API.
- Retrieves the final balance of both base and quote assets after each successful order.
- Adjustable delay between consecutive orders.

## Prerequisites
Before you can run the script, you need to:
1. Create a Binance account.
2. Enable API access on your Binance account.

## Getting Started

### Step 1: Create an API Key
1. Go to the [Binance API Management page](https://www.binance.com/en/my/settings/api-management).
2. Log in to your Binance account and click on **Create API**.
3. Name your API key and click on **Create**.
4. Complete the security verification process (e.g., 2FA or email verification).

### Step 2: Add Whitelisted IP Addresses
1. After the API key is created, whitelist your IP addresses.
2. Enable permissions for **Spot & Margin Trading**.

### Step 3: Save Your Secret Key and API Key
Make sure to **save** your API Key and Secret Key securely. You will only see the secret key once, so store it in a safe place.

### Step 4: Clone This Repository
Clone this repository to your local machine:

```bash
git clone https://github.com/sonofescobar1337/twap-order-binance-bot
```

### Step 5: Create a `.env` File
Create a `.env` file in the root of the project directory. Use `.env.example` as a reference.

EXAMPLE `.env` file
```bash
API_KEY=APIKEY
API_SECRET=SECKEY
BASE_URL=https://api.binance.com
```
### Step 6: Install Dependencies
Navigate to your project directory and install the necessary dependencies:

### Step 7: Run the Script
Start the script using the following command:
```bash
npm start
```
### Step 8: Script Input

Once the script is running, you will be prompted for the following inputs:

1. **Pair Code**: The trading pair you want to trade (e.g., `BTCUSDT`, `BNBUSDT`). The pair code must be valid on Binance.
2. **Order Quantity**: The number of units of the base asset (e.g., `BTC` in `BTCUSDT`) that you want to order in each transaction.
3. **Order Delay**: The time delay (in minutes) between each subsequent order. This value determines how frequently the bot places new orders.

### Files Structure

```bash
TWAP-ORDER-BINANCE-BOT/
├── src/
│   ├── GetPrice.js         # Handles fetching the latest ask price from Binance API.
│   ├── PlaceOrder.js       # Handles placing orders and balance checks on Binance.
│   ├── servertime.js       # Fetches the server time from Binance.
│   ├── Signature.js        # Handles the creation of HMAC SHA256 signatures for API requests.
├── .env                    # Contains environment variables for API Key, Secret Key, and Base URL.
├── .env.example            # Example of environment variables configuration.
├── .gitignore              # Specifies files and directories to be ignored by Git (e.g., node_modules, .env).
├── index.js                # Main entry point for the script, handles user input and logic flow.
├── package-lock.json       # Auto-generated file that locks the exact versions of dependencies.
├── package.json            # Contains metadata about the project, including dependencies and scripts.
└── README.md               # Project documentation, setup instructions, and usage details.


```


### Security Notice
- Never commit your .env file to a public repository. Always add .env to .gitignore to prevent leaking your API credentials.
- Store your API keys in a secure environment.

## Disclaimer
Use this script at your own risk. Automated trading on Binance carries inherent risks, and it is important to understand how the API and market trading work. The authors take no responsibility for financial losses.
```vbnet
This `README.md` covers everything from setup, usage, and security notices to the basic structure of the project. Make sure to modify the repository URL and other personal details as needed.
```