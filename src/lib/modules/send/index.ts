import {sendRequest} from "./sendRequest";
import {INetworkFee, ISend, ISendOffChain} from "./interface";
import BASE from "../../shared/Base";


export default class Send extends BASE {
    constructor(client: any) {
        super(client)
    }

    async getNetworkFee(networkOptions: INetworkFee): Promise<any> {
        return this.client.query({query: sendRequest.getNetworkFee, variables: networkOptions})
    }

    async sendOffChain(sendOffChainOpts: ISendOffChain): Promise<any> {
        return this.client.mutate({mutation: sendRequest.sendOffChain, variables: sendOffChainOpts})
    }

    async send(sendOpts: ISend): Promise<any> {
        return this.client.mutate({mutation: sendRequest.send, variables: sendOpts})
    }
}