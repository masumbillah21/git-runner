// Simple application logic for build step
console.log("=== Running Build Step ===");
console.log("Compiling and packaging project assets...");

const app = {
  name: "ostad-runner-demo",
  version: "1.0.0",
  status: "ready",
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
};

console.log(`Build complete for ${app.name} v${app.version}.`);
module.exports = app;
