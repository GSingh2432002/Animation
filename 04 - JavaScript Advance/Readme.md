# JavaScript Basics

## 1. What is Window Object?
The window object in web browsers represents the browser's window or tab containing a web page. It provides access to a wide range of browser functions and APIs. Since it is a global object, all its properties and methods are available directly without referencing `window`. The window object provides an interface between the web page and the browser, making it essential for building dynamic and interactive websites.

## 2. What is Browser Context API?
The browser context API is not a single API but a collection of features provided by web browsers that help developers control how a webpage interacts with the browser window or tab. The Browser Context API provides a set of tools that allow interaction between web pages and the browser's environment. It gives access to things like `window`.

## 3. What is Stack?
The stack is a memory structure that stores data in a Last In, First Out (LIFO) manner.
- It is used for function calls and primitive data types.
- Each time a function is called, a stack frame is added to the stack.
- When the function returns, its frame is removed.

Example:
```javascript
function greet() {
    console.log("Hello");
}
greet();  // A new frame for `greet` is pushed onto the stack.
```

## 4. What is Heap Memory?
The heap is a region of memory used for storing objects and reference types. Unlike the stack, data in the heap does not follow the LIFO order. Heap memory is managed by garbage collection, which cleans up unused memory.

Example:
```javascript
const obj = { name: "Gaurav" };  // Stored in the heap
```

## 5. What is Execution Context?
The execution context defines the environment in which JavaScript code is executed. 

Execution Context (EC) is like an imaginary container created when a function runs, containing:
1. Variables
2. Functions inside that parent function
3. The lexical environment of that function

Note: This imaginary container is called the execution context.

## 6. What is Lexical Environment?
The lexical environment is where variables and functions are physically written in the code. It defines the scope and scope chain, consisting of:
1. Environment Record: Stores variable and function declarations.
2. Outer Environment Reference: Points to the outer lexical environment.

## 7. How to Copy Reference Values?
In JavaScript, reference values (objects, arrays, functions) are stored in the heap. Assigning a reference value to another variable copies the reference, not the data.

To create a copy of the value instead of sharing the reference, use:

**Spread Operator (`...`)**
Example:
```javascript
var a = [1,2,3,4,5,6,7,8,9,10];
var b = [...a];
b.pop();

var obj = { name: 'John', age: 30, city: 'New York' };
var copyObj = {...obj};
copyObj.name = 'GKS';
```

## 8. What is Truthy and Falsy?
A **truthy** value evaluates to true in a boolean context, while a **falsy** value evaluates to false. JavaScript has exactly seven falsy values:
- `false`
- `0`
- `-0`
- `""` or `''`
- `null`
- `undefined`
- `NaN`

## 9. What is forEach Loop?
`forEach` is a method to iterate over arrays and perform an action on each element. It does not modify the original array.

Example:
```javascript
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(val) {
    console.log(val + 10);
});
```

## 10. What is for-in Loop?
The `for-in` loop iterates over the properties (keys) of an object or the indexes of an array.

Example:
```javascript
var person = {
    name: "Gaurav",
    age: 22,
    city: "Kolkata"
};

for(var key in person) {
    console.log(key, person[key]);
}
```

## 11. What is Callback Function?
A callback function is passed as an argument to another function to be executed later.

### Synchronous Example:
```javascript
function greet(name) {
    console.log("Hello, " + name);
}

function processUserInput(callback) {
    const name = "Gaurav";
    callback(name);  // Passing `greet` as a callback
}

processUserInput(greet);  // Output: Hello, Gaurav
```

### Asynchronous Example:
```javascript
setTimeout(function() {
    console.log("This message is delayed");
}, 2000);
```

## 12. What is First Class Function?
A first-class function is treated like any other variable:
- Stored in a variable
- Passed as an argument
- Returned from a function

Example:
```javascript
function sample(firstClassFn) {
    firstClassFn();
}

sample(function() {
    console.log("Hello");
});
```

## 13. How are Arrays Implemented Internally?
In JavaScript, arrays are dynamic objects with special behaviors. Elements are stored as key-value pairs:

Example:
```javascript
const arr = [10, 20, 30];
// Internally represented as:
{
    0: 10,
    1: 20,
    2: 30
}
```

## 14. Why Use Negative Index Arrays in JS?
JavaScript does not natively support negative indexing, unlike Python. However, custom implementations simulate this behavior to access elements from the end of an array, simplifying certain operations.

## 15. How to Delete Object Properties?
Example:
```javascript
var a = {
    name: "gaurav",
    age: 44
};
delete a.age;
console.log(a);  // { name: "gaurav" }
```