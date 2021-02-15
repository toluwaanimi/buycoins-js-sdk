import ApolloClient from "apollo-boost";


export default class BASE {
    client: ApolloClient<any>

    constructor(client: ApolloClient<any>) {
        this.client = client
    }
}