# Buycoins SDK

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

Quick Start

```js

import { Buycoins } from "buycoins-js-sdk"

// Pass in the public and secret key when creating a new instance.
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

## Account Balances

You can view your balance(s) at any time by calling the getBalances query. This will return all your balances or the
balance of a particular cryptocurrency argument passed in.

```js
buycoins.wallet.getWalletBalance().then(
  res => {
    console.log(res)
  }
)


buycoins.wallet.getWalletBalance({ crypto: "naira_token" }).then(
  res => {
    console.log(res)
  }
)


```

Returns A sample response is :

```js
      "data": {
  "getBalances": [
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
},
```

Sample request to get the balance of a particular currency

```js

buycoins.wallet.getWalletBalance({ crypto: "naira_token" }).then(
  res => {
    console.log(res)
  }
)
```

Returns A sample response is :

```js
    "data": {
  "getBalances": [
    {
      "id": "QWNjb3VudC0=",
      "cryptocurrency": "naira_token",
      "confirmedBalance": "1000.0",
    },
  ],
},
    
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

```js
      "data": {
  "getEstimatedNetworkFee": {
    "estimatedFee": "0.0004",
      "total": "0.0104",
  },
},


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

```js
      "message": "Not enough Bitcoin in your main account",
  "locations": [
  {
    "line": 2,
    "column": 3,
  },
],
  "path": [
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

# Processing Withdrawal

## Create withdrawal

```js
buycoins.withdrawal.createWithdrawal({
  bankAccount : "QmFua0FjY291bnQtODQyZjc0OTEtYTQxYi00YTI0LWJkYTEtODljMjJjY2ZiZTBi",
  amount : 1000
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

```js

"message": "Withdrawal is currently unavailable",
  "locations": [
  {
    "line": 2,
    "column": 3,
  },
],
  "path": [
  "createWithdrawal",
]
```

## Cancel Withdrawal

```js

buycoins.withdrawal.cancelWithdrawal({
  payment : "djdjvdssfs"
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

```js
  "data": {
    "getBankAccounts": [
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
  },
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

```js

  "data": {
    "getBankAccounts": [
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

You can retrieve a list of orders you have placed by calling this method.
Specify whether to fetch open or completed orders using the status parameter.

### Open and completed orders

An open order is one that has not been engaged in a trade. A completed order has been engaged and the payment processed.


The get orders method returns two root fields: dynamicPriceExpiry and orders.

Dynamic prices are updated periodically in line with the fluctuations in the general prices of cryptocurrencies. dynamicPriceExpiry gives the timestamp when all dynamic prices will next be updated to the reflect the latest cryptocurrency prices


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


buycoins.trade.getOrders({status : "open"}).then(
  res => {
    console.log(res)
  }
)
```


Sample Response

```js

data: {
  getOrders: {
    dynamicPriceExpiry: 1612244515,
      orders: {
      edges: [
        {
          node: {
            id: "UG9zdE9yZGVyLWQyMzBhYTU4LWU2ZDktNDM2MS04ODFlLWUzNTc1N2EwMWY2Nw==",
            cryptocurrency: "bitcoin",
            coinAmount: "0.00998924",
            side: "buy",
            status: "active",
            createdAt: 1612242637,
            pricePerCoin: "50872.0",
            priceType: "dynamic",
            staticPrice: null,
            dynamicExchangeRate: "1",
          },
        },
        {
          node: {
            id: "UG9zdE9yZGVyLWUxZmY1YWZjLTRhN2EtNDBmYS1hOWJmLWY4YjY4YTk0NjU4NA==",
            cryptocurrency: "bitcoin",
            coinAmount: "0.00998729",
            side: "buy",
            status: "active",
            createdAt: 1612242475,
            pricePerCoin: "50872.0",
            priceType: "dynamic",
            staticPrice: null,
            dynamicExchangeRate: "1",
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

Dynamic prices are updated periodically in line with the fluctuations in the general prices of cryptocurrencies. dynamicPriceExpiry gives the timestamp when all dynamic prices will next be updated to the reflect the latest cryptocurrency prices


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

```js

  "data": {
    "getMarketBook": {
      "dynamicPriceExpiry": 1613415997,
      "orders": {
        "edges": [
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
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWFmYTNjY2U5LTY3YjItNDRkMC05YWFkLTkwMGY3NWNjZmZlYQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.00039884",
              "side": "buy",
              "status": "active",
              "createdAt": 1613412673,
              "pricePerCoin": "21870913.5",
              "priceType": "dynamic",
              "staticPrice": null,
              "dynamicExchangeRate": "450",
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTIxY2U3YWVkLTYwYmYtNDg1Yy04MjBhLTZhNWI0ZDkwNTNjMg==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.003",
              "side": "sell",
              "status": "active",
              "createdAt": 1613412291,
              "pricePerCoin": "22850000.0",
              "priceType": "static",
              "staticPrice": "2285000000",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWZmZWZkNjlhLWRmN2QtNDI3MC1iMDJlLTE1YzdkODAzMjI1YQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.00461347",
              "side": "buy",
              "status": "active",
              "createdAt": 1613410834,
              "pricePerCoin": "22320000.0",
              "priceType": "static",
              "staticPrice": "2232000000",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWFhM2M4YTI3LWI1YTEtNGYyZS04N2U2LTU4NmRkMTRlZGRlOQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.07",
              "side": "buy",
              "status": "active",
              "createdAt": 1613410318,
              "pricePerCoin": "22000000.0",
              "priceType": "static",
              "staticPrice": "2200000000",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTlhN2QyYTRiLTVmYjQtNDg0NS05MTY2LWVjOTk2YTQwYzY4NQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.0039028",
              "side": "sell",
              "status": "active",
              "createdAt": 1613409110,
              "pricePerCoin": "22650000.0",
              "priceType": "static",
              "staticPrice": "2265000000",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWVhOTVkMjljLWMwYWMtNGU1OS1iMzY3LTg0NDIyYTliMzQ5Ng==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.001",
              "side": "buy",
              "status": "active",
              "createdAt": 1613407548,
              "pricePerCoin": "21606582.51",
              "priceType": "static",
              "staticPrice": "2160658251",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWFlZjQyNmRhLWVjZDctNDZkZS04MGYzLTRkZWUyZTQ4MjBhYw==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.001",
              "side": "buy",
              "status": "active",
              "createdAt": 1613388891,
              "pricePerCoin": "21200000.0",
              "priceType": "static",
              "staticPrice": "2120000000",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTIzZmZmODQ0LWRjMTgtNDU5YS05NGIyLTI1ZWJmZTExYjI4MA==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.1",
              "side": "buy",
              "status": "active",
              "createdAt": 1613387187,
              "pricePerCoin": "25.0",
              "priceType": "static",
              "staticPrice": "2500",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWZlNjA0YjdkLTEzMDgtNGZiNC05MzAxLWY1N2QzMDkxNDg2OQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "1.12038",
              "side": "buy",
              "status": "active",
              "createdAt": 1613374451,
              "pricePerCoin": "22976.98",
              "priceType": "static",
              "staticPrice": "2297698",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTJlZWEyNmMyLTZmMzYtNDlmZi1hNGUyLWUxNjgxNDg4Yjk4ZQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.0255",
              "side": "buy",
              "status": "active",
              "createdAt": 1613315082,
              "pricePerCoin": "2259950.55",
              "priceType": "static",
              "staticPrice": "225995055",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWQxYmVmYWM2LTM5NmQtNDdiNi05ZWM2LTRlM2U3NTY5YjdlZg==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.00258547",
              "side": "buy",
              "status": "active",
              "createdAt": 1613306950,
              "pricePerCoin": "19926832.3",
              "priceType": "dynamic",
              "staticPrice": null,
              "dynamicExchangeRate": "410",
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTA3ZDQwOTIzLTU0OWEtNGEzNi04NDExLTgyZGZkNTU3MThkOA==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.1",
              "side": "buy",
              "status": "active",
              "createdAt": 1613224266,
              "pricePerCoin": "0.1",
              "priceType": "static",
              "staticPrice": "10",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTk3MWJmMGFhLTIzN2MtNGMzZC1iNzZlLWM0ZGFmZTE0ODBjNQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.1",
              "side": "buy",
              "status": "active",
              "createdAt": 1613224207,
              "pricePerCoin": "0.1",
              "priceType": "static",
              "staticPrice": "10",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTgwZmQ5MTU5LTg3N2UtNDkwNC04NTg0LTMxZmUzNmExMjAwYQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.1",
              "side": "buy",
              "status": "active",
              "createdAt": 1613224095,
              "pricePerCoin": "0.1",
              "priceType": "static",
              "staticPrice": "10",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWQxN2ZiNmMxLTA0NWMtNGMxOS05ZTdlLTJmM2IyYjg2MzZiNQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.1",
              "side": "buy",
              "status": "active",
              "createdAt": 1613223052,
              "pricePerCoin": "0.1",
              "priceType": "static",
              "staticPrice": "10",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTg1NzFmY2VlLThhMzYtNDA1NS04YTk5LTU5MmE1OTNjOWZlZg==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.1",
              "side": "buy",
              "status": "active",
              "createdAt": 1613222640,
              "pricePerCoin": "0.1",
              "priceType": "static",
              "staticPrice": "10",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTMyZTJmNGE3LTY0NWMtNDU2YS1iMWViLTY1NTBkZTk5Yzc3MQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.0003",
              "side": "sell",
              "status": "active",
              "createdAt": 1613166632,
              "pricePerCoin": "30000000.0",
              "priceType": "static",
              "staticPrice": "3000000000",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWRlMDdlNTE1LTE3OGUtNGFmOC05ODFlLTQwMDBhNmFhZmE1Mw==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.0002",
              "side": "buy",
              "status": "active",
              "createdAt": 1613117159,
              "pricePerCoin": "223.5",
              "priceType": "static",
              "staticPrice": "22350",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTdkOTVhNWE1LTg0NTYtNGY1Ni04NzNkLTA1NGQ3MTc5ZjlmNw==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.01000967",
              "side": "buy",
              "status": "active",
              "createdAt": 1613069142,
              "pricePerCoin": "19500000.0",
              "priceType": "dynamic",
              "staticPrice": null,
              "dynamicExchangeRate": "435",
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTk1MmJkYzA0LThmMDEtNDM1NS04YzRhLWVjYzI1ODU0YTViZA==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.0008508",
              "side": "buy",
              "status": "active",
              "createdAt": 1613035829,
              "pricePerCoin": "19000000.0",
              "priceType": "static",
              "staticPrice": "1900000000",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWM1MDgxZDU4LWZmOTktNDdhZi1iOTlhLThiMzU4ZWY2NGRiZA==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.00449",
              "side": "sell",
              "status": "active",
              "createdAt": 1612851993,
              "pricePerCoin": "23800000.0",
              "priceType": "static",
              "staticPrice": "2380000000",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTcxYmVhYjVlLTEyZDUtNDViZC05ZDA2LTBkNmU2MDk5MWFlMA==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.00031115",
              "side": "buy",
              "status": "active",
              "createdAt": 1612793154,
              "pricePerCoin": "19732424.18",
              "priceType": "dynamic",
              "staticPrice": null,
              "dynamicExchangeRate": "406",
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLThhYzY0YTk1LTJhNDktNDJjMS04ZjUwLTYzMDRlNjNjMTZmMA==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.00262787",
              "side": "buy",
              "status": "active",
              "createdAt": 1612629696,
              "pricePerCoin": "18500000.0",
              "priceType": "dynamic",
              "staticPrice": null,
              "dynamicExchangeRate": "445",
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTA0MDA3MmJkLWRjOWYtNGYzMC1hMTY1LTQ4NmM2ZTAxNGIxNA==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.0004",
              "side": "sell",
              "status": "active",
              "createdAt": 1612606806,
              "pricePerCoin": "28675197.7",
              "priceType": "dynamic",
              "staticPrice": null,
              "dynamicExchangeRate": "590",
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWQyMzBhYTU4LWU2ZDktNDM2MS04ODFlLWUzNTc1N2EwMWY2Nw==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.00688521",
              "side": "buy",
              "status": "active",
              "createdAt": 1612242637,
              "pricePerCoin": "72903.04",
              "priceType": "dynamic",
              "staticPrice": null,
              "dynamicExchangeRate": "1",
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWUxZmY1YWZjLTRhN2EtNDBmYS1hOWJmLWY4YjY4YTk0NjU4NA==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.00688459",
              "side": "buy",
              "status": "active",
              "createdAt": 1612242475,
              "pricePerCoin": "72903.04",
              "priceType": "dynamic",
              "staticPrice": null,
              "dynamicExchangeRate": "1",
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTdiODQyMzM5LWNiZjktNGMzOC04OWJjLWVmM2QzNTU4ZGMzZQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.00178466",
              "side": "buy",
              "status": "active",
              "createdAt": 1611813811,
              "pricePerCoin": "21044678.99",
              "priceType": "dynamic",
              "staticPrice": null,
              "dynamicExchangeRate": "433",
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTRmYjEzY2I5LTI0ODItNDJhZC1hOTAzLTM4MTFkMzk2NDJlNw==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.13948872",
              "side": "buy",
              "status": "active",
              "createdAt": 1611752112,
              "pricePerCoin": "21603602.33",
              "priceType": "dynamic",
              "staticPrice": null,
              "dynamicExchangeRate": "444",
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTFhOTYwZTMxLWNmN2QtNDFlNi1iYzMxLWQ0MjgzOTZkNjM3OQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.02117034",
              "side": "buy",
              "status": "active",
              "createdAt": 1611122967,
              "pricePerCoin": "11750000.0",
              "priceType": "dynamic",
              "staticPrice": null,
              "dynamicExchangeRate": "466",
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTEwZTU1NGVmLTk0YWQtNGM3MS1hZTYyLTExZDdmODY1N2UxMw==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.0002",
              "side": "buy",
              "status": "active",
              "createdAt": 1611073180,
              "pricePerCoin": "10000.0",
              "priceType": "static",
              "staticPrice": "1000000",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTI3YjNlZjQ2LWVjMGYtNDUwYi04ZWQxLTM0MDA1NGI4YjMyMg==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.00151927",
              "side": "buy",
              "status": "active",
              "createdAt": 1610509341,
              "pricePerCoin": "13000000.0",
              "priceType": "static",
              "staticPrice": "1300000000",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTlhMWY2OTJkLTMyNGUtNDhkYi1hZTQxLTNiMDBkZjNjMTc1NA==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.02",
              "side": "buy",
              "status": "active",
              "createdAt": 1609098544,
              "pricePerCoin": "16500.99",
              "priceType": "static",
              "staticPrice": "1650099",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWMxYWVhMWEzLTVkN2ItNDgwYS1hZjc2LTkwMDM0YWI0YmUyYg==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.0002",
              "side": "buy",
              "status": "active",
              "createdAt": 1608549326,
              "pricePerCoin": "0.0",
              "priceType": "static",
              "staticPrice": "0",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTIwMDM5N2U1LWM1ZTctNGMyYi1hNGJiLWRmNjI0NDg5YzQyOA==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.0002",
              "side": "buy",
              "status": "active",
              "createdAt": 1608192018,
              "pricePerCoin": "2192504.5",
              "priceType": "static",
              "staticPrice": "219250450",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWQwZDUyMjBlLTZlNzEtNGFmZC05MTFkLTkxYmU2OGQ5Zjk4OA==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.00056683",
              "side": "buy",
              "status": "active",
              "createdAt": 1608191652,
              "pricePerCoin": "1980228.1",
              "priceType": "static",
              "staticPrice": "198022810",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTk2ZjE4YmQxLTYzZGYtNDU0ZS1iNmVhLWY4OGJjMmM5NzM5Yg==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.35",
              "side": "buy",
              "status": "active",
              "createdAt": 1606523875,
              "pricePerCoin": "90.99",
              "priceType": "static",
              "staticPrice": "9099",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTMxN2VlMDkwLWZlMDMtNGRiMC04MjVmLTY3MjM1OWM0NGM3OA==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.00046651",
              "side": "sell",
              "status": "active",
              "createdAt": 1606501998,
              "pricePerCoin": "30900000.0",
              "priceType": "static",
              "staticPrice": "3090000000",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTQ1NWQzYzNiLTFjNDAtNGY5Mi05YzQwLWJjM2YwMjc0ZTYyYQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.00049853",
              "side": "sell",
              "status": "active",
              "createdAt": 1606124338,
              "pricePerCoin": "27100000.0",
              "priceType": "static",
              "staticPrice": "2710000000",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTk0MzU5ZTM0LWMyMjItNDNhZi1hODdjLTgyZmI2YjYwZjhhZA==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.0762868",
              "side": "buy",
              "status": "active",
              "createdAt": 1605555920,
              "pricePerCoin": "22458.95",
              "priceType": "static",
              "staticPrice": "2245895",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLWEzYTAwNzQxLTJhMWUtNGJkMi1iZWFkLWE2ZWU0MzQ1ZmI2Yw==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.005",
              "side": "buy",
              "status": "active",
              "createdAt": 1605000847,
              "pricePerCoin": "10900.09",
              "priceType": "static",
              "staticPrice": "1090009",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLThkZTE3NzVlLWRmNTEtNDMwZi1hYWQwLTJhM2NlMTZjMDlmYQ==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.0003",
              "side": "buy",
              "status": "active",
              "createdAt": 1604619946,
              "pricePerCoin": "6900.0",
              "priceType": "static",
              "staticPrice": "690000",
              "dynamicExchangeRate": null,
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTExMDUzOWEyLWE4NWYtNDFhOS1hZmZiLWI1YmU1NWZhMTkwNw==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "2.148812",
              "side": "buy",
              "status": "active",
              "createdAt": 1602163960,
              "pricePerCoin": "200.0",
              "priceType": "dynamic",
              "staticPrice": null,
              "dynamicExchangeRate": "200",
            },
          },
          {
            "node": {
              "id": "UG9zdE9yZGVyLTdjOWUyOWU3LWFlYTItNDY4YS04OTNlLWRlMTE4ZjM5NDExNw==",
              "cryptocurrency": "bitcoin",
              "coinAmount": "0.21036736",
              "side": "buy",
              "status": "active",
              "createdAt": 1577438688,
              "pricePerCoin": "22357419.82",
              "priceType": "dynamic",
              "staticPrice": null,
              "dynamicExchangeRate": "460",
            },
          },
        ],
      },
    },
  },
```