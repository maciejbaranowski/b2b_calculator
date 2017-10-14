export const LINEAR_TAX = 0;
export const PROGRESSIVE_TAX = 1;
export const CONSTANT_TAX = 2;

const getInitialInput = () => {
  return {
    netInvoice: 2000,
    zusSmallSize: true,
    zusSickChoice: true,
    taxChoice: LINEAR_TAX
  };
};

const calculateIncomeTax = inputStats => {
  switch (inputStats.taxChoice) {
    case LINEAR_TAX:
      return inputStats.netInvoice * 0.19;
    case PROGRESSIVE_TAX:
      const taxThreshold = 85528;
      const yearlyIncome = 12 * inputStats.netInvoice;
      const freeOfTaxation = 6600;
      let tax = 0;
      if (yearlyIncome > taxThreshold) {
        tax = 15395.04 + 0.32 * (yearlyIncome - taxThreshold);
      } else {
        tax = 0.18 * yearlyIncome;
      }
      if (tax < freeOfTaxation) return 0;
      return (tax - freeOfTaxation) / 12;
    case CONSTANT_TAX:
      return inputStats.netInvoice * 0.17;
  }
};

const calculateZusPart = inputStats => {
  if (!inputStats.zusSmallSize) {
    return {
      health: (297.28).toFixed(2),
      retirement: (499.28).toFixed(2),
      pension: (204.62).toFixed(2),
      sick: inputStats.zusSickChoice ? (62.67).toFixed(2) : (0.0).toFixed(2),
      accident: (46.04).toFixed(2),
      workFund: (62.67).toFixed(2)
    };
  }
  return {
    health: (297.28).toFixed(2),
    retirement: (117.12).toFixed(2),
    pension: (48.0).toFixed(2),
    sick: inputStats.zusSickChoice ? (14.7).toFixed(2) : (0.0).toFixed(2),
    accident: (10.8).toFixed(2),
    workFund: (0.0).toFixed(2)
  };
};

const calculateOutput = inputStats => {
  let incomeTax = calculateIncomeTax(inputStats).toFixed(2);
  let zus = calculateZusPart(inputStats);
  let zusSum = 0;
  Object.values(zus).map(value => {
    console.log(Number(value));
    zusSum += Number(value);
  });

  let realIncome = (inputStats.netInvoice - incomeTax - zusSum).toFixed(2);
  return {
    incomeTax,
    zus,
    zusSum,
    realIncome
  };
};

export { getInitialInput, calculateOutput };
