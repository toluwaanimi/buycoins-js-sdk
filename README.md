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
buycoins.wallet.createPaymentAddress({crypto : "bitcoin"}).then(
  res => {
    console.log(res)
  }
)
```


## Account Balances

You can view your balance(s) at any time by calling the getBalances query. This will return all your balances or the balance of a particular cryptocurrency argument passed in.


```js
buycoins.wallet.getWalletBalance().then(
  res => {
    console.log(res)
  }
)


buycoins.wallet.getWalletBalance({crypto : "naira_token"}).then(
  res => {
    console.log(res)
  }
)
```
Returns
A sample response is :

```json
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

buycoins.wallet.getWalletBalance({crypto : "naira_token"}).then(
  res => {
    console.log(res)
  }
)
```

Returns
A sample response is :

```json
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


