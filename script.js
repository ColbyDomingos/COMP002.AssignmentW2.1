// For each of the 10 tasks below, write a console.log(...) statement that satisfies the
// requirement. Write your code to accomplish the programming task beneath each comment.

// 1. Write code to output the following string to the console:
// "Hello World!"

console.log("Hello World");

// 2. Write code to concatenate three strings and output the result to the console:
// "Hello", " ", "World!"

let str1 = "Hello";
let str2 = " ";
let str3 = "World!";

let result = str1 + str2 + str3;
console.log(result);

// 3. Write code to output "Hello" on one line and "World!" on the next line to the console.
// *Note: You should only have one console.log() statement - how do you add a new line in
// a string?...

console.log("Hello\nnWorld!");

// 4. Write code to output the result of the arithmetic expression to the console:
// 3 * 8 + 2;

console.log(3 * 8 + 2);

// 5. Write code to output the result of the comparison:
// 5 is less than 10.

console.log(5 < 10);

// 6. Write code to output the result of the comparison:
// 10 is greater than 5.

console.log(10 > 5);

// 7. Write code to output the result of the comparison:
// "Apples" is NOT equal to "Oranges"

console.log("Apples" != "Oranges");

// 8. Write code to output the result of the comparison:
// 10 * 10 is greater than 50 AND 5 * 5 is less than 50

console.log((10 * 10) > 50 && (5 * 5) < 50);

// 9. Write code to output the result of the comparison:
// 1 + 2 is greater than 5 OR 1 * 10 is greater than 5

console.log((1 + 2) > 5 || (1 * 10) > 5);

// 10. Write code that demonstrates an automatic type conversion as shown in Chapter 01.

console.log(189 * null);
console.log("78" - 179382);
console.log("6" + 9898);
console.log("eight" * 8);
console.log(true == 5);

console.log(null == undefined);
console.log(null == 0)