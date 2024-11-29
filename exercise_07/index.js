//import and execute
import isTypeOf from "./isTypeOf.js";

console.log("Exercise 07")
console.log("isTypeOf (case 1):", isTypeOf('Hello World', 'string')); // Expected output: true
console.log("isTypeOf (case 2):", isTypeOf(123, 'number')); // Expected output: true
console.log("isTypeOf (case 3):", isTypeOf(true, 'boolean')); // Expected output: true
console.log("isTypeOf (case 4):", isTypeOf([1, 2, 3], 'array')); // Expected output: true
console.log("isTypeOf (case 5):", isTypeOf('123', 'array')); // Expected output: false

console.log("-----------------")
