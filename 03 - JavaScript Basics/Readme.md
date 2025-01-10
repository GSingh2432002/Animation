# JavaScript Basics Notes

### 1. What is Word and Keyword?
- **Word**: The most basic unit of language that conveys meaning and is used in speech and writing.  
  Example: `Dog`, `Tree`
- **Keyword**: A word with a special predefined meaning in a programming language. These are part of the language syntax and are used for specific operations or structures.

### 2. What is var, const, let?
- **var**: Function-scoped, can be re-declared and updated. More flexible but riskier.
- **let**: Block-scoped, introduced in ES6, can be updated but not re-declared.
- **const**: Block-scoped, cannot be updated or re-declared. Best for values that should remain constant.

### 3. What is Hoisting?
Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution, allowing usage before declaration.

### 4. Types in JavaScript
- **Primitive Types**: Immutable, represent single values, directly stored in memory.
  Examples: `string`, `number`, `bigint`, `boolean`, `undefined`, `null`, `symbol`
- **Reference Types**: Objects that store references to memory locations.
  Examples: `Object`, `Array`, `Function`, `Date`, `Map`, `Set`

### 5. What is Conditionals?
Conditionals execute different blocks of code depending on a condition.

1. **if statement**:
   ```javascript
   let age = 18;
   if (age >= 18) {
       console.log("You are an adult.");
   }
   ```

2. **if-else statement**:
   ```javascript
   let age = 16;
   if (age >= 18) {
       console.log("You are an adult.");
   } else {
       console.log("You are a minor.");
   }
   ```

3. **if-else if-else statement**:
   ```javascript
   let score = 85;
   if (score >= 90) {
       console.log("Grade: A");
   } else if (score >= 80) {
       console.log("Grade: B");
   } else {
       console.log("Grade: C");
   }
   ```

4. **switch statement**:
   ```javascript
   let day = "Monday";
   switch (day) {
       case "Monday":
           console.log("Start of the work week.");
           break;
       case "Friday":
           console.log("End of the work week.");
           break;
       default:
           console.log("It's a regular day.");
   }
   ```

### 6. What is Loops?
Loops execute a block of code repeatedly based on a condition.

1. **for loop**:
   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log(i);  // Outputs: 0, 1, 2, 3, 4
   }
   ```

2. **while loop**:
   ```javascript
   let i = 0;
   while (i < 5) {
       console.log(i);
       i++;
   }
   ```

### 7. What is Functions?
Functions are reusable blocks of code for specific tasks.

Example:
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));  // Output: Hello, Alice!
```

### 8. What is Parameters and Arguments?
- **Parameters**: Placeholders in a function declaration.
- **Arguments**: Values passed when calling a function.

Example:
```javascript
function greet(name) {  // 'name' is a parameter
    console.log(`Hello, ${name}!`);
}
greet("Alice");  // "Alice" is an argument
```

### 9. What is Arrays?
Arrays store multiple values in a single variable.

Example:
```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);  // Output: apple
```

### 10. What is push(), pop(), shift(), unshift()?
- `push()`: Adds elements to the end of an array.
- `pop()`: Removes the last element.
- `shift()`: Removes the first element.
- `unshift()`: Adds elements to the beginning.

Example:
```javascript
let numbers = [1, 2, 3];
numbers.push(4);  // [1, 2, 3, 4]
numbers.pop();  // [1, 2, 3]
let animals = ["cat", "dog"];
animals.shift();  // ["dog"]
animals.unshift("lion");  // ["lion", "dog"]
```

### 11. What is Object?
Objects are collections of key-value pairs.

Example:
```javascript
let person = {
    name: "John",
    age: 30,
    isStudent: false
};
```

### 12. What is Props and Method?
- **Props/Properties**: Values stored in an object.
- **Method**: Functions within an object.

Example with Properties:
```javascript
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};
console.log(car.brand);  // Output: Toyota
```

Example with Methods:
```javascript
let calculator = {
    add: function(a, b) {
        return a + b;
    }
};
console.log(calculator.add(5, 3));  // Output: 8
```

### 13. What is Updating Object Properties?
1. **Dot Notation**:
   ```javascript
   let person = {
       name: "Alice",
       age: 25
   };
   person.age = 26;
   console.log(person.age);  // Output: 26
   ```

2. **Bracket Notation**:
   ```javascript
   let property = "name";
   person[property] = "Bob";
   console.log(person.name);  // Output: Bob
   ```
