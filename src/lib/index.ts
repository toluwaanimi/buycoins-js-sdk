import ApolloClient from 'apollo-boost';
import BASE from './shared/Base';
import Wallet from './modules/wallet';
import Order from './modules/order';
import Send from './modules/send';
import Withdrawal from './modules/withdrawal';
import Trade from './modules/trade';
// tslint:disable-next-line:no-var-requires
const fetch = require('cross-fetch/polyfill').fetch;

const BUYCOINS_API_URL = 'https://backend.buycoins.tech/api/graphql';

export class Buycoins {
  client: ApolloClient<any>;
  base: BASE;
  wallet: Wallet;
  order: Order;
  send: Send;
  withdrawal: Withdrawal;
  trade: Trade;

  constructor(username: string, password: string) {
    if (!username || !password) {
      throw new Error('missing credentials, please pass in your credentials');
    }
    const authorizationToken = Buffer.from(process.env.USERNAME + ':' + process.env.PASSWORD).toString('base64');
    this.client = new ApolloClient({
      uri: BUYCOINS_API_URL,
      headers: {
        Authorization: `Basic ${authorizationToken}`,
      },
      fetch,
    });
    this.base = new BASE(this.client);
    this.wallet = new Wallet(this.client);
    this.order = new Order(this.client);
    this.send = new Send(this.client);
    this.withdrawal = new Withdrawal(this.client);
    this.trade = new Trade(this.client);
  }
}
