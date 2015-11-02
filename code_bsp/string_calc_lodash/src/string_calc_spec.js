"use strict";

import { stringCalc } from "./string_calc.js";

describe("stringCalc", () => {
  it("should return 0 for an empty string", () => {
    expect(stringCalc("")).toEqual(0);
  });
  it("should return a single number from a string", () => {
    expect(stringCalc("7")).toEqual(7);
  });

 it('should return the sum of multiple cs-numbers', () => {
    expect(stringCalc("1,2,3")).toEqual(6);
 })

 it('should not count numbers >= 100', () => {
   expect(stringCalc("1,1000,2")).toEqual(3);
 });

});
