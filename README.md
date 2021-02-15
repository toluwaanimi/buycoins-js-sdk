# Buycoins SDK

## Installation

```sh
npm i buycoins-graphql-sdk
```

### Authentication

To authenticate API requests, you need to generate your keys by going to the API Settings screen on BuyCoins.

Two keys will be generated:
Public Key: Think of this as a username. It's how BuyCoins knows which user is attempting to make a request. Secret Key:
Think of this as a password. BuyCoins never stores your Secret Key, we only generate it and display it you ONCE. Copy &
keep your secret key in a secure place (e.g Environment Variables).

Quick Start

```js

import { Buycoins } from 'buycoins-graphql-sdk'

// Pass in the public and secret key when creating a new instance.
const buycoins = new Buycoins('public key', 'secret key')

buycoins.wallet.createPaymentAddress({ crypto: 'bitcoin' }).then(
  res => {
    console.log(res)
  }
).catch(
  err => {
    console.log(err)
  }
)

```
