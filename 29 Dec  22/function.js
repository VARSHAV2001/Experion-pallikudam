// function greet(){
//     console.log("Hello World");
// }
// greet();



// greet();
// function greet(){
//     console.log("Hello World");
// }



// function add(x, y){
//     console.log(x + y);
// }
// add(1, 2);



// function add(x, y){
//     return x + y;
// }
// const res = add(1, 2);
// console.log(res);



// function convertCasting(value){
//     return value.toUpperCase();
// }
// const res = convertCasting('Hello');
// console.log(res.toLowerCase());



// Normal function

// function getFirstChar1(value){
//     return value[0];
// }



// anonymous function

// const getFirstChar2 = function (value){
//     return value[0];
// };



// lamda/ Arrow function

// const getFirstChar3 = (value) => {
//     return value[0];
// }

// console.log(getFirstChar1('Hello'));
// console.log(getFirstChar2('Hello'));
// console.log(getFirstChar3('Hello'));



// if use the arrow function only one word is called don't need to give bracket
//  const getFirstChar = value  => value[0];

// console.log(getFirstChar('Hello'));




// check the even numbers in an array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const evenNumbers = [];

// function isEven(value){
//     return value % 2 == 0;
// }

// for (let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     if(isEven(element)){
//         evenNumbers.push(element);
//     }
// }
// console.log("Method 1");
// console.log(evenNumbers);




//  to fill one value in array

// const numbers = [1, 2, 3, 4, 5, 6];
// numbers.fill(10);
// console.log(numbers);




// to check the given value is contain the array

// const numbers = [1, 2, 3, 4, 5, 6];
// if(numbers.includes(5)){
//     console.log('Array contains five');
// }



// to join the value b/w the values
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.toString());
console.log(numbers.join('->'));







