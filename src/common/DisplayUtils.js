export const getNumberDispalywithMetrics = (labelValue) => {
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + 'B'
    : Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + 'M'
    : Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + 'K'
    : Math.abs(Number(labelValue)) == 0
    ? '-'
    : Math.abs(Number(labelValue));
};

export const getPriceDisplay = (val) => (val != undefined ? val + ' USD' : '-');

export const limitDecimal = (val) => (val != undefined ? val?.toFixed(2) : '-');
