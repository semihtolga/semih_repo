// ! node module import formatı
const {
  calculateTotal,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  fibonacci,
} = require("./math.js");

// ! es6 module format
// import { calculateTotal,
// celsiusToFahrenheit,
// fahrenheitToCelsius,
// fibonacci } from './math';

describe("calculateTotal", () => {
  // test caselerini oluşturuyoruz
  it("should exist", () => {
    expect(calculateTotal).toBeDefined();
  });

  it("should return a number", () => {
    expect(calculateTotal(100, 0.2)).toBe(120);
  });

  it("should return with default VAT", () => {
    expect(calculateTotal(200)).toBe(236);
  });
});

describe("celsiusToFahrenheit", () => {
  it("should exist", () => {
    expect(celsiusToFahrenheit).toBeDefined();
  });

  it("should return a number", () => {
    expect(celsiusToFahrenheit(10)).toBe(50);
  });

  it("should convert 20 C to 68 F", () => {
    expect(celsiusToFahrenheit(20)).toBe(68);
  });
});

describe("fahrenheitToCelsius", () => {
  it("should exist", () => {
    expect(fahrenheitToCelsius).toBeDefined();
  });

  it("should convert 32F to 0C", () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
  });
});

describe("fibonacci", () => {
  it("should exist", () => {
    expect(fibonacci).toBeDefined();
  });

  it("should return a number", () => {
    expect(fibonacci(1)).toBe(1);
  });
});
