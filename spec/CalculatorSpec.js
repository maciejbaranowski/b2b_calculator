import { calculateOutput, getInitialInput, CONSTANT_TAX } from "../src/Calculator";
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
});
