// An array is a special variable that can store multiple values in one place.
// let fruits = ["Apple", "Mango", "Banana"];

// JavaScript Array Methods

// These are the most important array methods for beginners 👇

// 1. push()
// Adds value at the end of array.
// let fruits = ["Apple", "Mango"];
// fruits.push("Banana");
// console.log(fruits);
// Output:
// ["Apple", "Mango", "Banana"]




// 2. pop()
// Removes value from the end.
// let fruits = ["Apple", "Mango", "Banana"];
// fruits.pop();
// console.log(fruits);
// Output:
// ["Apple", "Mango"]



// 3. unshift()
// Adds value at the start.
// let fruits = ["Mango", "Banana"];
// fruits.unshift("Apple");
// console.log(fruits);
// Output:
// ["Apple", "Mango", "Banana"]




// 4. shift()
// Removes value from the start.
// let fruits = ["Apple", "Mango", "Banana"];
// fruits.shift();
// console.log(fruits);
// Output:
// ["Mango", "Banana"]





// 5. splice()
// Used to:
// add
// remove
// replace values
// Remove Values
// let fruits = ["Apple", "Mango", "Banana"];
// fruits.splice(1, 1);
// console.log(fruits);
// Explanation:
// First 1 = start index
// Second 1 = how many items remove
// Output:
// ["Apple", "Banana"]
// Add Values
// let fruits = ["Apple", "Banana"];
// fruits.splice(1, 0, "Mango");
// console.log(fruits);
// Output:
// ["Apple", "Mango", "Banana"]
// Replace Values
// let fruits = ["Apple", "Mango", "Banana"];
// fruits.splice(1, 1, "Orange");
// console.log(fruits);
// Output:
// ["Apple", "Orange", "Banana"]


// 6. slice()
// Copies part of array.
// let fruits = ["Apple", "Mango", "Banana", "Orange"];
// let result = fruits.slice(1, 3);
// console.log(result);
// Explanation:
// Start from index 1
// Stop before index 3
// Output:
// ["Mango", "Banana"]




// Simple Memory Trick
// push → add end
// pop → remove end
// unshift → add start
// shift → remove start
// splice → change original array
// slice → copy array part




// Simple Array Practice Questions

// 1. Create an array of 5 fruits and print the whole array.
let array=["mango","banana","stawbery","sharifa","water mallon ","kahr boza"]
console.log(array)


// 2. Create an array of 5 numbers and print the first value.
let num = [10,"30","35","40","65"]
console.log(num);

// 3.Create an array of cities and print the last city.
const  city =["Quetta","lahor","punjab","faisalabd","mastung"]
console.log(city[4]);



// 4 Create an array of 4 animals and print the second animal.

// 5 Create an array of 5 colors and print the first color.

// 6 Create an array of 3 countries and print the last country.

// 7.Create an array of numbers and print the third number.



// Little More Practice 🚀
// 11. Create an array of 5 movies and print movie number 4.

// 12. Create an array of mobile brands and change one value.

// 13. Create an array of 5 students and print each student using for loop.

// 14. Create an array of fruits and check if "Apple" exists using includes().

// 15. Create an array of colors and find the index of "Black".





let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];

fruits.reverse();

console.log(fruits);

















































































































































































// let names = ['noman' , "ali" , 'rizwan' , 45 , true , 200 , 50 , 'yousuf' , 'anas']


// console.log(names)

// names.splice(2 , 3 , 200 , false, 90 )

// console.log(names)

// let copy =names.slice( 1 , 5)

// console.log(copy)

// console.log(names)
   
// console.log(names)
// console.log(names[3])
// names.push(false)

// names.pop()
// names.shift()
// console.log(names)

// names.unshift('pakistan')



// let username = ["Abdullah" , "Usman" , "Ammar" , "Affan"]; 

// console.log(typeof username);
// length 1
// index 0
// console.log(username[1]);

//  let mixedArr = [1 , 2 ,true , "abdullah" , ['ali' , ['Usman']]]

//  console.log(mixedArr[4][1][0]);
 


// push
// pop
// unshift
// shift
// splice
// slice

// let fruits = ['apple' , 'banana' , 'orange']
// fruits.push("apple")