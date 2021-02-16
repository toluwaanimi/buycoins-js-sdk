# Buycoins SDK

A  simple Javascript SDK for the [Buycoins API](https://developers.buycoins.africa).

# Table of Contents

* [Installation](#installation)
* [Authentication](#authentication)
* [Quick Start](#quick-start)
* [Usage](#usage)
* [Wallet](#wallet)
    * [Create deposit address](#create-address)
    * [Confirmations](#confirmation)
    * [Wallet Balance](#account-balances)
    
* [Sending](#sending)
  
    * [Network Fee](#network-fee)
    * [Send](#send)

* [Withdrawal](#processing-withdrawal)
    * [Create Withdraw](#create-withdrawal)
    * [Cancel Withdrawal Request](#cancel-withdrawal)
    * [Bank Account](#get-bank-account)
    
* [Trading](#trading)
    * [Orders](#get-orders)
    * [Market Book](#market-book)
    * [Placing an Order](#placing-orders)
    * [Buy](#buy)
    * [Sell](#sell)
    
* [Webhook](#webhook)
  * [Verification](#verification)
## Installation

```sh
npm i buycoins-js-sdk
```

### Authentication

To authenticate API requests, you need to generate your keys by going to the API Settings screen on BuyCoins.

Two keys will be generated:
Public Key: Think of this as a username. It"s how BuyCoins knows which user is attempting to make a request. Secret Key:
Think of this as a password. BuyCoins never stores your Secret Key, we only generate it and display it you ONCE. Copy &
keep your secret key in a secure place (e.g Environment Variables).


To apply, please send an email to support@buycoins.africa 

## Quick Start

```js

import { Buycoins } from "buycoins-js-sdk"

// Pass in the public and secret key when creating a new instance.
// Your pulic key is also your username while your secret key is your password
const buycoins = new Buycoins("public key", "secret key")

buycoins.wallet.createPaymentAddress({ crypto: "bitcoin" }).then(
  res => {
    console.log(res)
  }
).catch(
  err => {
    console.log(err)
  }
)

```

# Usage

## Wallet
## Create Address

To receive cryptocurrency, you will first have to create an address on BuyCoins then send this address to the sender.

```js
buycoins.wallet.createPaymentAddress({ crypto: "bitcoin" }).then(
  res => {
    console.log(res)
  }
)
```

Sample Response

```json
  "data": {
    "createAddress": {
        "cryptocurrency": "bitcoin",
        "address": "3KYsTqVKMFuucVubShhvvjfUWCEzLQF816",
      },
  }
```


## Confirmation

Confirmations required for supported cryptocurrencies before your account is credited with sent transactions:

Bitcoin: 1

Ethereum: 20

Litecoin: 12

NairaToken: 1


## Wallet Balances

You can view your balance(s) at any time by calling the getWalletBalance method. This will return all your balances or the
balance of a particular cryptocurrency argument passed in.

```js
buycoins.wallet.getWalletBalance().then(
  res => {
    console.log(res)
  }
)
```

Returns a sample response  :

```json
"data":{
    "getBalances":
          [
    {
      "id": "QWNjb3VudC0=",
      "cryptocurrency": "usd_tether",
      "confirmedBalance": "0.0",
    },
    {
      "id": "QWNjb3VudC0=",
      "cryptocurrency": "naira_token",
      "confirmedBalance": "1000.0",
    },
    {
      "id": "QWNjb3VudC0=",
      "cryptocurrency": "bitcoin",
      "confirmedBalance": "0.0",
    },
    {
      "id": "QWNjb3VudC0=",
      "cryptocurrency": "ethereum",
      "confirmedBalance": "0.0",
    },
    {
      "id": "QWNjb3VudC0=",
      "cryptocurrency": "litecoin",
      "confirmedBalance": "0.0",
    },
    {
      "id": "QWNjb3VudC0=",
      "cryptocurrency": "usd_coin",
      "confirmedBalance": "0.0",
    },
  ],
}
,
```

Sample request to get the balance of a particular currency

```js

buycoins.wallet.getWalletBalance({ crypto: "naira_token" }).then(
  res => {
    console.log(res)
  }
)
```

Returns a sample response  :

```json
"data":{
  "getBalances":
  [
    {
      "id": "QWNjb3VudC0=",
      "cryptocurrency": "naira_token",
      "confirmedBalance": "1000.0",
    },
  ],
}
```

# Sending

## Network fee

How to get estimated network fees before sending

This will show you how much you"re likely to be charged in network fees to send cryptocurrency to an external address

```js
buycoins.send.getNetworkFee({ crypto: "bitcoin", amount: 0.01 }).then(
  res => {

  }
)
```

Sample Response

```json
"data":{
  "getEstimatedNetworkFee": {
    "estimatedFee": "0.0004",
      "total":"0.0104",
  },
}
```

## Send

This allows you to send cryptocurrency to an on-chain address. Remember to call Network Fees to calculate how much total
will be removed from your cryptocurrency account balance.

```js

buycoins.send.send({
  address: "uuurkrkmckmdmcmwkopu8e9w8",
  amount: 0.01,
  crypto: "bitcoin",
}).then(
  res => {
    console.log(res)
  }
).catch(
  err => {
    console.log(err)
  }
)
```

Sample Response for Error

```json
"message":"Not enough Bitcoin in your main account",
  "locations":[
  {
    "line": 2,
    "column": 3,
  },
  ],
  "path":[
  "send",
  ],
```

This allows you to send cryptocurrency to an off-chain address using their buycoins username.

```js
buycoins.send.sendOffChain({
  recipient: "henadad",
  amount: 0.01,
  crypto: "bitcoin",
}).then(
  res => {
    console.log(res)
  }
).catch(
  err => {
    console.log(err)
  }
)
```

## Limits
Daily sending limits

You can currently send a maximum number of coins out of your account to an address daily.
Bitcoin: 1 BTC
Ethereum: 50 ETH
Litecoin: 50 LTC
NairaToken: 2,000,000 NGNT

You may request higher limits by contacting support@buycoins.africa with an explanation of your use case

# Processing Withdrawal

## Create withdrawal
To process withdrawal into your bank account, you call the createWithdrawal by passing the Bank Account ID and the amount you intend to withdrawal.

```js
buycoins.withdrawal.createWithdrawal({
  bankAccount: "QmFua0FjY291bnQtODQyZjc0OTEtYTQxYi00YTI0LWJkYTEtODljMjJjY2ZiZTBi",
  amount: 1000
}).then(
  res => {
    console.log(res)
  }
).catch(
  err => {
    console.log(err)
  }
)

```

Sample Error Response

```json
"message":"Withdrawal is currently unavailable",
  "locations":[
  {
    "line": 2,
    "column": 3,
  },
  ],
  "path":
  [
  "createWithdrawal",
  ]
```

## Cancel Withdrawal

It is possible to cancel withdrawal request by calling the cancelWithdrawal method.

```js
buycoins.withdrawal.cancelWithdrawal({
  payment: "djdjvdssfs"
}).then(
  res => {
    console.log(res)
  }
).catch(
  err => {
    console.log(err)
  }
)
```

## Get Bank Account

### To retrieve all your bank accounts

```js
buycoins.withdrawal.getBankAccounts().then(
  res => {
    console.log(res)
  }
).catch(
  err => {
    console.log(err)
  }
)

```

Sample Response

```json
"data":{
  "getBankAccounts":
  [
    {
      "accountName": "emmanuel toluwanimi adebayo",
      "accountType": "withdrawal",
      "accountNumber": "1101551084",
      "accountReference": null,
      "id": "QmFua0FjY291bnQtODQyZjc0OTEtYTQxYi00YTI0LWJkYTEtODljMjJjY2ZiZTBi",
      "bankName": "Kuda Bank",
    },
    {
      "accountName": "adebayo, emmanuel toluwanimi",
      "accountType": "withdrawal",
      "accountNumber": "2086153506",
      "accountReference": null,
      "id": "QmFua0FjY291bnQtM2FhNjdjODgtMDc5Ni00YmNkLTgzNGQtNDIxMGRmZTAzNDc3",
      "bankName": "United Bank For Africa",
    },
  ],
}
,
```

### To retrieve a single bank account details

```js
buycoins.withdrawal.getBankAccounts({
  accountNumber: "202020202"
}).then(
  res => {
    console.log(res)
  }
).catch(
  err => {
    console.log(err)
  }
)

```

Sample Response

```json
"data":{
  "getBankAccounts":[
      {
    "accountName": "adebayo, emmanuel toluwanimi",
    "accountType": "withdrawal",
    "accountNumber": "2086153506",
    "accountReference": null,
    "id": "QmFua0FjY291bnQtM2FhNjdjODgtMDc5Ni00YmNkLTgzNGQtNDIxMGRmZTAzNDc3",
    "bankName": "United Bank For Africa",
    },
  ],
},
```

## Trading

### Get Orders

You can retrieve a list of orders you have placed by calling this method. Specify whether to fetch open or completed
orders using the status parameter.

### Open and completed orders

An open order is one that has not been engaged in a trade. A completed order has been engaged and the payment processed.

The get orders method returns two root fields: dynamicPriceExpiry and orders.

Dynamic prices are updated periodically in line with the fluctuations in the general prices of cryptocurrencies.
dynamicPriceExpiry gives the timestamp when all dynamic prices will next be updated to the reflect the latest
cryptocurrency prices

### Parameters

status: The status of orders to fetch, either open or completed.

### Response

dynamicPriceExpiry: The timestamp of the dynamic price update

orders: A graphql connection returning a list of orders

### Order response fields:

id: Unique identifier of the order

cryptocurrency: Type of cryptocurrency

coinAmount: Amount of coins to trade

pricePerCoin: The price per coin in Naira

side: The order side (buy or sell)

status: The status of the order

createdAt: The timestamp when the order was created

staticPrice: The static price in Naira

priceType: The price type either static or dynamic

dynamicExchangeRate: The dynamic exchange rate in Naira

```js
buycoins.trade.getOrders({ status: "open" }).then(
  res => {
    console.log(res)
  }
)
```

Sample Response

```json
"data": {
    "getOrders": {
    "dynamicPriceExpiry": 1612244515,
    "orders":{
      "edges": [
        {
        "node": {
        "id": "UG9zdE9yZGVyLWQyMzBhYTU4LWU2ZDktNDM2MS04ODFlLWUzNTc1N2EwMWY2Nw==",
        "cryptocurrency": "bitcoin",
        "coinAmount": "0.00998924",
        "side": "buy",
        "status": "active",
        "createdAt": 1612242637,
        "pricePerCoin": "50872.0",
        "priceType": "dynamic",
        "staticPrice": null,
        "dynamicExchangeRate": "1",
          },
        },
        {
        "node": {
            "id": "UG9zdE9yZGVyLWUxZmY1YWZjLTRhN2EtNDBmYS1hOWJmLWY4YjY4YTk0NjU4NA==",
            "cryptocurrency": "bitcoin",
            "coinAmount": "0.00998729",
            "side": "buy",
            "status": "active",
            "createdAt": 1612242475,
            "pricePerCoin": "50872.0",
            "priceType": "dynamic",
            "staticPrice": null,
            "dynamicExchangeRate": "1",
            },
          },
        ],
      },
    },
},
```

## Market Book

The market book is a list of orders on the BuyCoins P2P platform. You can view the market book using this method.

This method returns two root fields: dynamicPriceExpiry and orders.

Dynamic prices are updated periodically in line with the fluctuations in the general prices of cryptocurrencies.
dynamicPriceExpiry gives the timestamp when all dynamic prices will next be updated to the reflect the latest
cryptocurrency prices

Parameters

status: The status of orders to fetch, either open or completed.

Response

dynamicPriceExpiry: The timestamp of the dynamic price update

orders: A graphql connection returning a list of orders

Order response fields:

id: Unique identifier of the order

cryptocurrency: Type of cryptocurrency

coinAmount: Amount of coins to trade

pricePerCoin: The price per coin in Naira

side: The order side (buy or sell)

status: The status of the order

createdAt: The timestamp when the order was created

staticPrice: The static price in Naira

priceType: The price type either static or dynamic

dynamicExchangeRate: The dynamic exchange rate in Naira

```js

buycoins.trade.getMarketBook().then(
  res => {
    console.log(res)
  }
)

```

Sample Response

```json
"data":{
    "getMarketBook": {
    "dynamicPriceExpiry": 1613415997,
    "orders":{
      "edges":[
        {
      "node": {
      "id": "UG9zdE9yZGVyLTA3ODNiODMxLWYyYjMtNDI3ZS1iMjA2LWQyODI0YTI1ZTZjZg==",
      "cryptocurrency": "bitcoin",
      "coinAmount": "0.00766816",
      "side": "buy",
      "status": "active",
      "createdAt": 1613414583,
      "pricePerCoin": "22300000.0",
      "priceType": "static",
      "staticPrice": "2230000000",
      "dynamicExchangeRate": null,
        },
      },
    {
      "node": {
      "id": "UG9zdE9yZGVyLTAyOGEyZGNjLTdmYmUtNGI0NC1iOTkwLTU5NjQ3MjUxMDUzNQ==",
      "cryptocurrency": "bitcoin",
      "coinAmount": "0.00277",
      "side": "buy",
      "status": "active",
      "createdAt": 1613413188,
      "pricePerCoin": "22400000.0",
      "priceType": "static",
      "staticPrice": "2240000000",
      "dynamicExchangeRate": null,
      },
      }
    ],
  },
  },
},
```

# Placing Orders

## Get Prices

The price call will return notable fields:

id: this is Global Object ID that you will need to pass to the buy mutation. You can also use it to retrieve a
BuycoinsPrice node.

cryptocurrency: This is the cryptocurrency of the prices returned

buyPricePerCoin: This is the buy cost per coin in Naira

minBuy: This is the minimum amount of that cryptocurrency that can be bought

maxBuy: This is the maximum amount of that cryptocurrency that can be bought

expiresAt: This timestamp is when that price will expire.

```js
buycoins.order.getPrices().then(
  res => {
    console.log(res)
  }
)
```

Sample Response

```json
"getPrices": [
    {
    "id": "2",
    "cryptocurrency": "bitcoin",
    "buyPricePerCoin": "16530037.235",
    "minBuy": "0.001",
    "maxBuy": "0.45663548",
    "expiresAt": 1612008724,
  },
  {
    "id": "3",
    "cryptocurrency": "ethereum",
    "buyPricePerCoin": "656408.797",
    "minBuy": "0.02",
    "maxBuy": "11.49923881",
    "expiresAt": 1612008724,
  },
],
```

# Buy and Selling
A primer on buying and selling cryptocurrency with the BuyCoins API

There are two ways to buy or sell cryptocurrency using the BuyCoins API.
1. Peer-to-peer trading
2. Buying from and selling to BuyCoins directly.


Peer-to-peer (P2P) trading
P2P trading allows you to trade cryptocurrency with other users by posting limit orders or [market orders](#)

Pros
 * You can specify the exact price at which you want to buy or sell a cryptocurrency.

Cons

* Limit orders may take a while to be fulfilled because there might not be a user that wants to engage your order at your specified price for a while.


Buying and Selling to BuyCoins

You can buy from and sell to BuyCoins by placing buy and sell orders.

Pros 
* Your order is fulfilled near-instantly.

Crons
* You are unable to specify a price at which you want to buy/sell a cryptocurrency.



# Buy

To buy, you will first need to get an active price and then proceed to use this price to place an order. The getPrices
method allows you to do this. You can also pass an optional cryptocurrency argument to view singular cryptocurrency
prices.

To place a buy order, you will need the id of an active price

Buy orders usually get filled in a minute but not more than 5 minutes. To check the status of your order, you can do a
node lookup on Order using the id returned in your buy order mutation.

```js
buycoins.order.buy({
  price: "QnV5Y29pbnNQcmljZS0zOGIwYTg1Yi1jNjA1LTRhZjAtOWQ1My01ODk1MGVkMjUyYmQ",
  coin_amount: 0.1,
  crypto: "bitcoin"
}).then(
  res => {
    console.log(res)
  }
)
```

## Sell

To sell, you will first need to get an active price and then proceed to use this price to place an order. The getPrices
method allows you to do this. You can also pass an optional cryptocurrency argument to view singular cryptocurrency
prices.

To place a sell order, you will need the id of an active price.

Sell orders usually get filled in a minute but not more than 5 minutes. To check the status of your sell order, you can
do a node lookup on Order using the id returned in your buy order mutation.

```js
buycoins.order.sell({
  price: "QnV5Y29pbnNQcmljZS0zOGIwYTg1Yi1jNjA1LTRhZjAtOWQ1My01ODk1MGVkMjUyYmQ",
  coin_amount: 0.1,
  crypto: "bitcoin"
}).then(
  res => {
    console.log(res)
  }
)
```


## Webhook
When certain events occur, BuyCoins will make a POST request to an endpoint of your choosing (HTTPS only) with relevant information in the request body.
To update your Webhook URL, go to the API Settings screen on BuyCoins. Whenever you update your Webhook URL, a Webhook Token will be generated. 


### Verification
To be able to verify that requests to your Webhook URL are coming from BuyCoins and not a malicious actor:

```js
buycoins.webhook.validateSignature('signature','body', 'token').then(
  res => {
    
  }
)
```

Responding to a Webhook Request

You should respond to an event with a 200 OK. We consider this an acknowledgement by your application.
If your application responds with any status outside of the 2xx range, we will consider it unacknowledged and thus, continue to send it every hour for 3 hours.
You don't need to send a request body or some other parameter as it would be discarded - we only pay attention to the status code.