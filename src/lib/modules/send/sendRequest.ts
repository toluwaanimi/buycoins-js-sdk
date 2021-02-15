import {gql} from "apollo-boost";


export const sendRequest = {
    send: gql`
    mutation($crypto: Cryptocurrency,$address: String!, $amount: BigDecimal!) {
      send(cryptocurrency: $crypto, amount: $amount, address: $address) {
        id
        address
        amount
        cryptocurrency
        fee
        status
        transaction {
          id
          txhash
        }
      }
    }
    `,

    sendOffChain: gql`
    mutation($crypto: Cryptocurrency,$recipient: String!, $amount: BigDecimal!) {
      sendOffchain(cryptocurrency: $crypto, recipient : $recipient, amount: $amount) {
          initiated
      }
    }
    `,
    getNetworkFee: gql`
    query($crypto: Cryptocurrency, $amount: BigDecimal!) {
      getEstimatedNetworkFee(cryptocurrency: $crypto, amount: $amount) {
        estimatedFee
        total
      }
    }
    `,
}