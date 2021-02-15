import {gql} from "apollo-boost";


export const tradeRequest = {
    getMarketBook: gql `
    query {
        getMarketBook {
          dynamicPriceExpiry
          orders {
            edges {
              node {
                id
                cryptocurrency
                coinAmount
                side
                status 
                createdAt
                pricePerCoin
                priceType
                staticPrice
                dynamicExchangeRate
              }
            }
          }
        }
      }      
    `,
    getOrder: gql`
    query getOrder($id: ID!){
        node(id: $id) {
          id
          ... on Order {
            status
            cryptocurrency
            totalCoinAmount
            side
          }
        }
      }
    `,
    getOrdersExpiry: gql`
    query($status: GetOrdersStatus!) {
        getOrders(status: $status) {
          dynamicPriceExpiry
        }
    }`,
    getOrders: gql`
    query($status: GetOrdersStatus!) {
        getOrders(status: $status) {
          dynamicPriceExpiry
          orders {
            edges {
              node {
                id
                cryptocurrency
                coinAmount
                side
                status
                createdAt
                pricePerCoin
                priceType
                staticPrice
                dynamicExchangeRate
              }
            }
          }
        }
      }      
    `,
    placeLimitOrder: gql`
    mutation($orderSide: OrderSide!, $amount: BigDecimal!, $crypto: Cryptocurrency, $staticPrice: BigDecimal, $priceType: PriceType!, $dynamicExchangeRate: BigDecimal) {
        postLimitOrder(orderSide: $orderSide, coinAmount: $amount, cryptocurrency: $crypto, staticPrice: $staticPrice, priceType: $priceType, dynamicExchangeRate: $dynamicExchangeRate){
          id
          cryptocurrency
          coinAmount
          side
          status 
          createdAt
          pricePerCoin
          priceType
          staticPrice
          dynamicExchangeRate
        }
      }
    `,
    postMarketOrder: gql`
    mutation($orderSide: OrderSide!, $amount: BigDecimal!, $crypto: Cryptocurrency) {
        postMarketOrder(orderSide: $orderSide, coinAmount: $amount, cryptocurrency: $crypto){
            id
            cryptocurrency
            coinAmount
            side
            status 
            createdAt
            pricePerCoin
            priceType
            staticPrice
            dynamicExchangeRate
        }
    }
    `,
}