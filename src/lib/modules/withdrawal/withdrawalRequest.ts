import {gql} from "apollo-boost";


export const withdrawalRequest = {
    getAllBankAccounts: gql`
    query{
        getBankAccounts{
        id
        accountNumber
        accountType
        accountReference
        accountName
        bankName
        }
    }
    `,
    getBankAccount: gql`
    query($accountNumber : String!){
        getBankAccounts(accountNumber: $accountNumber){
            id
            accountNumber
            accountType
            accountReference
            accountName
            bankName
        }
    }
    `,
    createWithdrawal: gql`
    mutation( $bankAccount: ID!, $amount: BigDecimal!  ){
       createWithdrawal(bankAccount : $bankAccount,amount: $amount){
            id
            amount
            fee
            reference
            status
            totalAmount
            type
            createdAt
         }
       }
    `,
    cancelWithdrawal: gql`
    mutation($payment: ID!){
        cancelWithdrawal( payment: $payment){
           id
            amount
            fee
            reference
            status
            totalAmount
            type
            createdAt
        }
    }
    `
}