// An array is a special variable that can store multiple values in one place.
// let fruits = ["Apple", "Mango", "Banana"];

// JavaScript Array Methods

// These are the most important array methods for beginners 👇



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
// let array=["mango","banana","stawbery","sharifa","water mallon ","kahr boza"]
// console.log(array)


// 2. Create an array of 5 numbers and print the first value.
// let num = [10,"30","35","40","65"]
// console.log(num);

// 3.Create an array of cities and print the last city.
// const  city =["Quetta","lahor","punjab","faisalabd","mastung"]
// console.log(city[4]);



// 4 Create an array of 4 animals and print the second animal.
// let animal= ["loin","elefant","dinasor","rabet"]
// console.log(animal[2]);


// 5 Create an array of 5 colors and print the first color.
// let color= ["blue","white","purple","orang"]
// console.log(color[0]);

// 6 Create an array of 3 countries and print the last country.
// let country=["pakistan","germany","france"]
// console.log(country[2]);

// 7.Create an array of numbers and print the third number.
// let number= ["30","70","50","10"]
// console.log(number[2]);



// Little More Practice 🚀
// 11. Create an array of 5 movies and print movie number 4.
// let movie = ["satrangi","ertugrul Ghazi","sultan salhudin ","osman","sultan abdul hamid "]
// console.log(movie[3]);



// 1. push()
// Adds value at the end of array.
// let fruits = ["Apple", "Mango"];
// fruits.push("Banana");
// console.log(fruits);
// Output:
// ["Apple", "Mango", "Banana"]




// push 
// Use push() to add "orange" to the array.
// let fruits = ["apple", "banana", "mango"];
// fruits.push("orange");
// console.log(fruits);




// Use push() to add 40 and 50 to the array.
// let numbers = [10, 20, 30];
// numbers.push(40,50)
// console.log(numbers);

// Use push() to add "blue" at the end of the array.
// let colors = ["red", "green"];
// colors.push("blue");
// console.log(colors);


// Use push() to add "Karachi" and "Lahore" to the array.
// let cities = ["Islamabad"];
// cities.push("karachi","lahore")
// console.log(cities);

// Use push() to add true to the array.
// let values = [1, 2, 3];
// values.push("true");
// console.log(values);



























































































// splice practice 
// Use splice() to remove "orange" from the array.
// let fruits = ["apple", "banana", "orange", "mango"];





// Use splice() to add "white" at index 2.
// let colors = ["red", "blue", "green"];





// Use splice() to replace "Ali" with "Ahmed".
// let names = ["Hamza", "Ali", "Usman"];


// Use splice() to remove 2 elements starting from index 1.
// let numbers = [1, 2, 3, 4, 5];



// Use splice() to add "Math" and "Science" at the start of the array.
// let subjects = ["English", "Computer"];

















































































































































































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