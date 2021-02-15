export const sendError = {
  message: 'Not enough Bitcoin in your main account',
  locations: [
    {
      line: 2,
      column: 3,
    },
  ],
  path: ['send'],
};

export const networkFees = {
  data: {
    getEstimatedNetworkFee: {
      estimatedFee: '0.0004',
      total: '0.0104',
    },
  },
};

export const sendOffChain = {
  data: {
    initiated: true,
  },
};
