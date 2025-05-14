//test my sum function
//use tools and code from the vitest package --> import
import { test, describe, expect } from "vitest";
import { sum, multiply } from "./app";

describe("Sum Tests", function () {
  test("adds 1 + 2 and the expected result is 3", function () {
    expect(sum(1, 2)).toBe(3);
  });
  test("adds 5 + 8 and the expected result is 13", function () {
    expect(sum(5, 8)).toBe(13);
  });
});

//test my multiply function
describe("Multiply Tests", function () {
  test("multiply 2 times 6 and I get 12", function () {
    expect(multiply(2, 6)).toBe(12);
  });
});

//===========================================================
// import { test, describe, expect } from "vitest";

//destructuring --> extracting singular elements from a file or folder

// vitest = {
//   key: "value",
//   key: "value",
//   test: function () {},
//   describe: function () {},
//   expect: function () {},
// };

//without destructuring, we need to use dot notation to access those vitest methods
// vitest.test()
// vitest.expect()
// vitest.describe()

//with destructuring, we can call the methods directly
// test()
// expect()
// describe()
