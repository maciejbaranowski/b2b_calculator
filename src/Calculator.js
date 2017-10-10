export const LINEAR_TAX = 0;
export const PROGRESSIVE_TAX = 1;
export const CONSTANT_TAX = 2;

const getInitialInput = () => {
  return {
    netInvoice : 2000,
    zusSmallSize : true,
    zusHealth : true,
    taxChoice : LINEAR_TAX
  }
}

const calculateIncomeTax = (inputStats) => {
  switch (inputStats.taxChoice) {
    case LINEAR_TAX:
      return inputStats.netInvoice * 0.19;
    case PROGRESSIVE_TAX:
      const taxThreshold = 85528;
      const yearlyIncome = 12 * inputStats.netInvoice;
      const freeOfTaxation = 6600;
      let tax = 0;
      if (yearlyIncome > taxThreshold)
      {
        tax = 15395.04 + 0.32 * (yearlyIncome - taxThreshold);
      }
      else
      {
        tax = 0.18 * yearlyIncome;
      }
      if (tax < freeOfTaxation)
        return 0
      return (tax - freeOfTaxation)/12;
    case CONSTANT_TAX:
      return inputStats.netInvoice * 0.17;
  }
}

const calculateOutput = (inputStats) => {
  let incomeTax = calculateIncomeTax(inputStats);
  let zus = (inputStats.zusSmallSize ? 500 : 1100 )+
            (inputStats.zusHealth ? 5.55 : 0);
  return {
    incomeTax : incomeTax.toFixed(2),
    zus : zus.toFixed(2),
    realIncome : (inputStats.netInvoice - incomeTax - zus).toFixed(2)

  }
}

export {getInitialInput,calculateOutput};
