// fun.test.js
// Jest test file for the eye-catching JS function in fun.js

// Import the function to test
const { greet } = require("./fun");

// ✅ Passing test example
test("returns correct greeting for a given name", () => {
  expect(greet("Anne")).toBe("Hello, Anne!");
});

// ❌ Failing test example (uncomment this block to demonstrate a failed CI run)
// test("intentional fail to demonstrate CI blocking deploy", () => {
//   expect(greet("Anne")).toBe("Hi, Anne!");
// });
