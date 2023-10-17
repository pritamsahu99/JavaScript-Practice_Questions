// // 01. Write a function that takes two numbers as arguments and returns their sum.

// function add (num1, num2){
//     return num1 + num2;
// }
// let a = 10;
// let b = 4;
// let sumOfTwo = add(a,b);
// console.log("Sum is: " + sumOfTwo);

// // 02. Write a function that takes a string as an argument and returns its length.
// function length (str){
//     return str.length;
// }
// let str = 'pritam sahu';
// console.log('Length of str is: ' + length(str));

// // 03. Write a program that takes two numbers and displays their sum, difference, product, and quotient. 

// let c = 10;
// let d = 2;

// const sum = (c + d);
// const difference = (c - d);
// const product = (c * d);
// const quotient = (c / d);

// console.log(`sum: ${sum}\ndifference: ${difference}\nproduct: ${product}\nquotient: ${quotient}`);

// // 04. Write a function that takes two numbers as arguments and returns the larger number.

// function largeNum(a, b){
//     return a>b?a:b;
// }
// let num1 = 20;
// let num2 = 30;

// console.log(`Large num b/w ${num1} & ${num2} is: ${largeNum(num1, num2)}`);

// // 05. Write a program that displays a string in reverse order. 

// function revStr(inputStr) {
//     const reversedStr = inputStr.split('').reverse().join('');
//     return reversedStr;
//   }
  
//   const strToReverse = "pritam";
//   const reversed = revStr(strToReverse);
//   console.log(`Reverse of ${strToReverse} is: ${reversed}`);

//   // 06. Write a program that takes a number and checks whether it is positive, negative, or zero

//   function checkNum(number){
//     return number > 0 ? 'Positive' : number < 0 ? 'Negative' : 'Zero'
//     // if(number > 0){
//     //     console.log("Positive");
//     // } else if(number < 0) {
//     //     console.log("Negative");
//     // } else {
//     //     console.log("Zero");
//     // }
//   }
// console.log(checkNum(0));
// console.log(checkNum(-10));
// console.log(checkNum(5));

// // 07. Write a program that takes a number and prints the multiplication table for that number. 

// let multiTable = (num) => {
//     for(let i = 1; i <= 10; i++){
//         console.log(`${num} * ${i} = ${num*i}`);

//     }
// }
// multiTable(4);

// 08. Write a program that takes a number and calculates the sum of all numbers from 1 to that number. 

// function sumOfNums(num){
//     let sum = 0;
//     for(let i = 1; i <= num; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumOfNums(5));

// 09. Write a program that takes a string and prints out the number of vowels in the string. 

// function checkVowel(str){

//     let count = 0;
//     for(let s of str){
//         if(s === 'a' || s === 'e' || s === 'i' || s === 'o' || s ==='u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log("Total vowels in the string: " + checkVowel('pritam sahu'));

// 10. Write a function that takes two arrays of integers as arguments and returns an array of the common elements in both arrays, without any duplicates. The returned array should be sorted in ascending order.
// For example, given the arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Hint: You may need to use nested loops and conditional statements to solve this problem.

// function findcommonelements(a1, a2) {
//     let commonElement = [];
//     for(let x=0 ;x<a1.length;x++){
//         for(let y=0;y<a2.length;y++){
//             if((a1[x]==a2[y]) && !commonElement.includes(a1[x])){
//                 commonElement.push(a1[x]);
//             }
//         }
//     }
//     return commonElement;
// }
// console.log(`Common elements are : `+findcommonelements([1, 2, 3, 4, 5],
//     [3, 4, 5, 6, 7]));    

// OR

// function findcommonelements(array1, array2) {
//     let commonElement = [];
//     for(let i = 0; i < array1.length; i++){
//         if(array2.includes(array1[i])){
//             if(!commonElement.includes(array2[i])){
//                 commonElement.push(array1[i]);
//             }
//         }
//     }
//     return commonElement;
// }
// const array1 = [1,2,3,4,5];
// const array2 = [3,4,5,6,7];
// const commonElement = findcommonelements(array1, array2);
// console.log(commonElement);

// 11. Write a function called 'greet' that takes a name parameter and logs a greeting message to the console. 

// function greet(name){
//     console.log(`Hello ${name}`);
// }
// greet('Pritam Pyare.');

// 12. Write a function called 'getSquare' that takes a number parameter and returns its square.

// function getSquare (numb) {
//     return numb * numb;
//     }
//     console.log(`${getSquare(8)}`);

// 13. Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

// function countLetters(str){
//     var Count = {};
//     for(var ch of str)
//     {
//         if(Count[ch])
//         {
//             Count[ch]+=1;
//         }
//         else {
//             Count[ch]=1;
//         }
//     }               
//     return Count;
// }
// console.log(countLetters("My namE IS Pritam"));

// 14. Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

// function createCounter(){
//     let counter = 0;
//     return function()
//     {
//         counter++;
//         return counter;
//     }
// }
// let cnt = createCounter();
// console.log(cnt());
// console.log(cnt());

// 15. Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

// function sumEvenNumbers(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 === 0){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// let arr = [1, 2, 3, 4, 5, 6, 8];
// console.log(sumEvenNumbers(arr));

// 16. Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
// function clacCartPrice(...nums){
//     let totalSum = 0;
//     for(let i = 0; i < nums.length; i++){
//         totalSum+=nums[i];
//     }
//     return totalSum;
// }   
//  console.log(clacCartPrice(200, 300, 400));

// OR

// function sum(numbers){
//     let totalSum = 0;
//     for(let i = 0; i < numbers.length; i++){
//         totalSum+=numbers[i];
//     }
//     return totalSum;
// }
// let nums = [1, 9, 9, 9];
// console.log(sum(nums));

// 17. Write a function that takes an array of strings as an argument and returns a new array with only the strings that have a length greater than 5.
// const strings = ["Pritam", "Khushi", "Queen", "King", "Prishi"];
// let string = strings.filter(strings => strings.length >= 6);
// console.log(string);

// OR

// function filterStrings(strings){
//     let newStr = [];
//     for(let i=0; i<strings.length; i++){
//         if(strings[i].length>=6)
//         {
//             newStr.push(strings[i]);
//         }
//     }
//     return newStr;
// }
// const strings = ["Pritam", "Khushi", "Queen", "King", "Prishi"];
// console.log(filterStrings(strings));

// 18. Write a function that takes an object and returns an array of all the keys in the object.

// function keysOfObjects(objects){
//     let keys = [];
//     keys.push(...Object.keys(objects));
//     return keys;
// }
// const objects = {
//     name: 'Pritam',
//     work: 'Student',
//     age: 23
// };
// console.log(keysOfObjects(objects));

//Or

function objects(obj){
    let keyArr=[];
    for (const key in obj) {
        if (Object.entries.call(obj, key)) {
            keyArr.push(key);
        }
    }
    return keyArr;
}
console.log(objects(
    {
     a: 'one', 
     b: 'two',
     c:'three'
    }
));

//Or

function objects(obj){
    let keyArr=[];
    for (const key in obj) {
        if (Object.entries.call(obj, key)) {
            keyArr.push(key);
        }
    }
    return keyArr;
}
console.log(objects(
    {
     a: 'one', 
     b: 'two',
     c:'three'
    }
));

// 19. Write a function that takes an array of objects and returns an array of all the values of a specified property name.
