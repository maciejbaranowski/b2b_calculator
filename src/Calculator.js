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

const calculateFreeOfTaxationIncomeForProgressive = income => {
  //source for formulas below: http://www.pit.pl/kwota-wolna-od-podatku/
  //valid for 2017
  if (income <= 6601.49) {
    return income * 0.18; //shall annul whole tax to be paid
  }
  if (income <= 11000.49) {
    return 1188 - 631.98 * (income - 6600) / 4400;
  }
  if (income <= 85528.49) {
    return 556.02;
  }
  if (income <= 127000.49) {
    return 556.02 - 556.02 * (income - 85528) / 41472;
  }
  return 0;
};

const calculateCosts = inputStats => {
  return 0;
};

const calculateTaxationBase = inputStats => {
  return inputStats.netInvoice - calculateCosts(inputStats);
};

const calculateIncomeTax = (inputStats, zus) => {
  switch (inputStats.taxChoice) {
    case LINEAR_TAX:
      return calculateTaxationBase(inputStats) * 0.19;
    case PROGRESSIVE_TAX:
      const taxThreshold = 85528;
      const yearlyIncome = 12 * calculateTaxationBase(inputStats);
      const freeOfTaxation = calculateFreeOfTaxationIncomeForProgressive(yearlyIncome);
      let tax = 0;
      if (yearlyIncome > taxThreshold) {
        tax = 15395.04 + 0.32 * (yearlyIncome - taxThreshold);
      } else {
        tax = 0.18 * yearlyIncome;
      }
      if (tax <= freeOfTaxation) return 0;
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
  let zus = calculateZusPart(inputStats);
  let zusSum = 0;
  Object.values(zus).map(value => {
    zusSum += Number(value);
  });

  let incomeTax = calculateIncomeTax(inputStats, zus).toFixed(2);
  let realIncome = (inputStats.netInvoice - incomeTax - zusSum).toFixed(2);
  return {
    incomeTax,
    zus,
    zusSum,
    realIncome
  };
};

export { getInitialInput, calculateOutput };
