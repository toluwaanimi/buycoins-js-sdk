import ApolloClient from "apollo-boost";
import BASE from "./shared/Base";
const fetch = require("cross-fetch/polyfill").fetch;

const BUYCOINS_API_URL = "https://backend.buycoins.tech/api/graphql"


export class Buycoins{
    client: ApolloClient<any>
    base: BASE
    constructor(username: string, password: string) {
        if (!username || !password) {
            throw new Error("missing credentials, please pass in your credentials")
        }
        const authorizationToken = Buffer.from(process.env.USERNAME + ":" + process.env.PASSWORD).toString("base64");
        this.client = new ApolloClient({
            uri: BUYCOINS_API_URL,
            headers: {
                Authorization: `Basic ${authorizationToken}`
            },
            fetch: fetch
        });
        this.base = new BASE(this.client)
        // this.depositAccount = new DepositAccount(this.client);
        // this.wallet = new Wallet(this.client)
        //  this.order = new Order(this.client)
        //  this.send = new Send(this.client)
        // this.withdrawal = new Withdrawal(this.client)
        // this.trade = new Trade(this.client)
    }
}