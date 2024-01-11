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

// function objects(obj){
//     let keyArr=[];
//     for (const key in obj) {
//         if (Object.entries.call(obj, key)) {
//             keyArr.push(key);
//         }
//     }
//     return keyArr;
// }
// console.log(objects(
//     {
//      a: 'one', 
//      b: 'two',
//      c:'three'
//     }
// ));

//Or

// function objects(obj){
//     let keyArr=[];
//     for (const key in obj) {
//         if (Object.entries.call(obj, key)) {
//             keyArr.push(key);
//         }
//     }
//     return keyArr;
// }
// console.log(objects(
//     {
//      a: 'one', 
//      b: 'two',
//      c:'three'
//     }
// ));

// 19. Write a JavaScript program to find out whether two given arrays are identical or not?

// function isIdenticalArrays(arr1, arr2) {
//   if (arr1 === null || arr2 === null) {
//     throw Error("Both arrays should be non-null");
//     }
//     if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
//       throw Error("Both arguments should be arrays")
//     }
//     if (arr1.length !== arr2.length) {
//       return false;
//     }
//     const sortedA = [...arr1].sort();
//     const sortedB = [...arr2].sort();
//     return JSON.stringify(sortedA) == JSON.stringify(sortedB);
//   }
//   console.log(isIdenticalArrays([1, 2, 3], [1, 2, 3]));

// 20. Given an unsorted array i.e. [8, 2, -2, -3, 0, -4, 6, 4, -5]. First sort the array without using array.sort method then find the pair which gave sum = 0 and store that output in result variable.

// When array is sortd already

// function pairSumGiveZero(array) {
//     for(let numbers of array){
//         // console.log(numbers)
//         for( j = 1; j < array.length; j++){
//             if(numbers + array[j] === 0){
//                 return [numbers , array[j]];
//             }
//         }
//     }
// }
// const newArray = pairSumGiveZero([ -5, -4, -3, -2, 0, 2, 4, 6, 8 ]);
// console.log(newArray);

// OR When not sorted
// function findPairWithSumZero(array) {
//     array.sort((a, b) => a - b); // Sort the array in ascending order.

//     let left = 0;
//     let right = array.length - 1;

//     while (left < right) {
//         const sum = array[left] + array[right];

//         if (sum === 0) {
//             return [array[left], array[right]];
//         } else if (sum < 0) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return null; // If no such pair is found, return null.
// }

// const unsortedArray = [8, 2, -2, -3, 0, -4, 6, 4, -5];
// const result = findPairWithSumZero(unsortedArray);

// if (result !== null) {
//     console.log("Pair with sum of 0 found:", result);
// } else {
//     console.log("No pair with sum of 0 found.");
// }
    
// 21. Write a program that checks two strings length are equal to each other or are anagram. Show the output as Boolean value without using toLowerCase().split('').sort().join('') methods.

// function isAnagram(str1, str2){
//     if(str1.length !== str2.length){
//         return false;
//     }
//     const countLetters = {};
//     for(let letters of str1){
//         countLetters[letters] = (countLetters[letters] || 0) + 1;
//        // console.log(countLetters[letters]);
//     }
//     for(let chars of str2){
//         if(!countLetters[chars]){
//             return false;
//         }
//         countLetters[chars]-=1;
//     }
//     return true;
// }
// const newStr = isAnagram("Pritam","iraPtm");
// console.log(newStr);

// Array Filtering and Mapping:
// 22. Given an array of numbers, create a new array that contains only the even numbers, and then square each of these even numbers. Implement this using filter() and map().
    // const numbers = [1,2,3,4,5,6,7,8,9,10];
    // const squaredEvenNums = numbers.filter(numbers => numbers % 2 == 0).map(squaredEvenNums => squaredEvenNums ** 2);
    // console.log(squaredEvenNums);

// Object Manipulation:
// 23. You have an object representing a student with properties like name, age, and grades. Write a function that takes an array of such student objects and calculates the average grade for all students.

// Function Callbacks:
// 24. Create a function that accepts an array of strings and a callback function. The callback function should modify each string in the array by adding " - Processed" to the end of it. Then, the main function should return the modified array.

// Array Sorting:
// 25. Given an array of objects representing products with properties like name, price, and quantity, write a function that sorts the products by price from the highest to lowest, and for products with the same price, sort them by name alphabetically.

// Object Creation and Composition:
// 26. Implement a function that generates a person object with properties for name, age, and gender. Then, create an array of person objects and use methods to filter and find people of a certain age or gender.
// 27. Count unique number from array [1,1,2,2,3,4,4,5,6,7,8,8].

// function getUniqueNum(array){
//     if (array.length > 0){
//         let i = 0;
//         for (let j = 1; j < array.length; j++){
//             if (array[i] != array[j]) {
//                 i++;
//                 array[i] = array[j];
//             }
//         }
//         return i+1;
//     } else {
//         throw new Error ("Array is empty.");
//     }
// }
// const result = getUniqueNum ([1,1,2,2,3,4,4,5,5,6,7,8,8,9,9,9]);
// console.log(result);

// 28. Write function largest sum of consecutive numbers given array [1,2,3,4,5,6,7,8,9,10,11,12].
//     function consNums(array, num){
//         if(num > array.length){
//             throw new Error ('Your num is greater than array!');
//         } else {
//             let max = 0;
//             for (let i = 0; i < array.length - num + 1; i++) {
//                 let tmp = 0;
//                 for (let j = 0; j < num; j++) {
//                     console.log("i "+i+" j "+j);
//                     tmp += array[i + j];
//                 }
//                 if (tmp > max) {
//                     max = tmp;
//                 }
//             }
//            return max;
//         }
//     }
// const newRslt = consNums([1,2,3,4,5,6,7,8], 4);
// console.log(newRslt);

// 29. divide and conq.
// function divideConq(arr,myNum){
//     let strtIndx = 0;
//     let endIndx = arr.length - 1;
//     while (strtIndx <= endIndx){
//         let midIndx = Math.floor((strtIndx + endIndx) / 2);
//         if (arr[midIndx] < myNum) {
//             strtIndx = midIndx + 1;
//         } else if (arr[midIndx] > myNum) {
//             endIndx = midIndx - 1;
//         } else {
//             return midIndx;
//         }
//     }
//     return -1;
// }
// const result = divideConq([1,2,3,4,5,6,7,8,9],3);
// console.log(result);

// 30. Check array that includes square of another array if yes, then true and vice versa using javascript.
    function checkSquare(array1, array2){
        for (let i = 0; i < array1.length; i++) {
           const newArray = array1[i] * array1[i];
            // console.log(newArray);
            let isSquare = false;
            for (let j = 0 ; j < array2.length; j++){
                if (newArray === array2[j]) {
                    isSquare = true;                    
                } else if (j === array2.length-1){
                if (!isSquare) {
                        return false;
                    }   
                }
            }
        }
        return true;
    }
    const res = checkSquare([1,2,3,4],[1,4,9,17])
    console.log(res);
/* 
Write a function that takes an array of objects and returns an array of all the values of a specified property name.

How do you declare an empty array in JavaScript, and what are some common methods for adding and removing elements from it?

What is the difference between an array and an object in JavaScript? How can you access and manipulate the properties or elements within each data structure?

Explain the concept of callback functions in JavaScript. Provide an example of how you might use a callback function with an array manipulation method.

What is a closure in JavaScript, and how can it be created? How might closures be useful in the context of functions that work with objects or arrays?

Describe the purpose and usage of the map and filter functions for arrays in JavaScript. Provide an example of how each of these functions can be used to transform or filter an array of objects.
*/

