import {IBankAccounts, ICancelWithdrawal, ICreateWithdrawal} from "./interface";
import {withdrawalRequest} from "./withdrawalRequest";
import BASE from "../../shared/Base";

export default class Withdrawal extends BASE {
    constructor(client: any) {
        super(client)
    }

    async getBankAccounts(bankAccountOpts?: IBankAccounts): Promise<any> {
        // @ts-ignore
        if (bankAccountOpts.accountNumber) {
            return this.client.query({query: withdrawalRequest.getBankAccount, variables: bankAccountOpts})
        }
        return this.client.query({query: withdrawalRequest.getAllBankAccounts})
    }

    async createWithdrawal(createWithdrawalOpts: ICreateWithdrawal): Promise<any> {
        return this.client.mutate({mutation: withdrawalRequest.createWithdrawal, variables: createWithdrawalOpts})
    }

    async cancelWithdrawal(cancelWithdrawalOpts: ICancelWithdrawal): Promise<any> {
        return this.client.mutate({mutation: withdrawalRequest.cancelWithdrawal, variables: cancelWithdrawalOpts})
    }

}