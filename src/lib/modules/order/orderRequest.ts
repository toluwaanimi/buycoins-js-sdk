import {gql} from "apollo-boost";


export const orderRequest = {
    getAllPrices: gql`
    query{
        getPrices{
        buyPricePerCoin
        cryptocurrency
        expiresAt
        id
        maxBuy
        maxSell
        minBuy
        minCoinAmount
        minSell
        sellPricePerCoin
        status
        }
    }
    `,

    getPrice: gql`
    query($crypto : Cryptocurrency){
        getPrices(cryptocurrency: $crypto){
            buyPricePerCoin
            cryptocurrency
            expiresAt
            id
            maxBuy
            maxSell
            minBuy
            minCoinAmount
            minSell
            sellPricePerCoin
            status
            }
        }
    `,
    buyCoin: gql`
    mutation buy($price: ID!, $coin_amount: BigDecimal!, $crypto: Cryptocurrency) {
        buy(price: $price, coin_amount: $coin_amount, cryptocurrency: $crypto) {
            id
            cryptocurrency
            status
            totalCoinAmount
            side
        }
    }
    `,
    sellCoin: gql`
        mutation sell($price: ID!, $coin_amount: BigDecimal!, $crypto: Cryptocurrency) {
            sell(price: $price, coin_amount: $coin_amount, cryptocurrency: $crypto) {
                id
                cryptocurrency
                status
                totalCoinAmount
                side
            }
        }
    `,
}