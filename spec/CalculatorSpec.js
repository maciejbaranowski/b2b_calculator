import { calculateOutput, getInitialInput, CONSTANT_TAX, LINEAR_TAX, PROGRESSIVE_TAX } from "../src/Calculator";
import "babel-polyfill";

describe("CalculateOutput", function() {
  it("returns output properly on default input", function() {
    expect(calculateOutput(getInitialInput())).toBeDefined();
  });

  it("returns lower retirement on small zus choice", function() {
    let input = getInitialInput();
    input.zusSmallSize = true;
    expect(calculateOutput(input).zus.retirement).toEqual("117.12");
  });

  it("returns properly calculated constant tax", function() {
    let input = getInitialInput();
    input.taxChoice = CONSTANT_TAX;
    expect(calculateOutput(input).incomeTax).toEqual("340.00");
  });

  it("returns no income tax for very low income with progressive choice", function() {
    let input = getInitialInput();
    input.netInvoice = 300;
    input.taxChoice = PROGRESSIVE_TAX;
    expect(calculateOutput(input).incomeTax).toEqual("0.00");
  });

  it("returns income tax for 2000 invoice with progressive choice", function() {
    let input = getInitialInput();
    input.netInvoice = 2000;
    input.taxChoice = PROGRESSIVE_TAX;
    expect(calculateOutput(input).incomeTax).toEqual("313.67");
  });
});
