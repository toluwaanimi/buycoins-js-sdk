import {createMockClient} from 'mock-apollo-client';
import {getBalances, mockClient, networkFees} from "../testdata/testdata"
import Send from "../lib/modules/send";
import {sendRequest} from "../lib/modules/send/sendRequest";

// eslint-disable-next-line no-undef
describe("Send", () => {
    let mockClient: any;
    let mockQuery = jest.fn()
    let send: any;
    beforeEach(() => {
        mockClient = createMockClient()
        send = new Send(mockClient)
        mockQuery.mockClear()
    })

    test('network fee', async () => {
        const options = {
            amount: 0.01,
            crypto: 'bitcoin',
        }
        const responseHandler = mockQuery.mockResolvedValue(networkFees)
        mockClient.setRequestHandler(sendRequest.getNetworkFee, responseHandler)
        const promise = await send.getNetworkFee(options)
        expect(responseHandler).toBeCalledTimes(1);
       await expect(promise.data).toEqual(networkFees.data)
    })
})