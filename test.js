// Simple test suite for test step
const assert = require("assert");
const app = require("./index");

console.log("=== Running Test Suite ===");

function testAdd() {
  const result = app.add(2, 3);
  assert.strictEqual(result, 5, "2 + 3 should equal 5");
  console.log("✔ Test testAdd passed: 2 + 3 = 5");
}

function testMultiply() {
  const result = app.multiply(4, 5);
  assert.strictEqual(result, 20, "4 * 5 should equal 20");
  console.log("✔ Test testMultiply passed: 4 * 5 = 20");
}

function testAppStatus() {
  assert.strictEqual(app.status, "ready", "App status should be ready");
  console.log("✔ Test testAppStatus passed: status is ready");
}

try {
  testAdd();
  testMultiply();
  testAppStatus();
  console.log("=== All Tests Passed Successfully! ===");
  process.exit(0);
} catch (error) {
  console.error("✖ Test failed:", error.message);
  process.exit(1);
}
