import {gql} from "apollo-boost";


export const walletRequest= {
    createPaymentAddress: gql`
    mutation($crypto: Cryptocurrency!) {
      createAddress(cryptocurrency: $crypto) {
        cryptocurrency
        address
      }
    }
    `,
    getAllBalances: gql`
      query{
        getBalances{
          id
          cryptocurrency
          confirmedBalance
        }
      }
    `,
    getBalance: gql `
      query($crypto: Cryptocurrency){
        getBalances(cryptocurrency: $crypto){
          id
          cryptocurrency
          confirmedBalance
        }
      }
    `,
}