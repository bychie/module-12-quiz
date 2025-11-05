// fun.test.js
// Jest test file for the eye-catching JS function in fun.js

const { greet } = require("./fun");

// ✅ Passing test example
test("returns correct greeting for a given name", () => {
  expect(greet("Anne")).toBe("Hello, Anne!");
});

// ❌ Failing test example
test("intentional fail to demonstrate CI blocking deploy", () => {
  expect(greet("Anne")).toBe("Hi, Anne!"); // should fail on purpose
});
