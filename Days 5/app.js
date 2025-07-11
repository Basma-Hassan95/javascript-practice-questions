// Array Methods Practice


// 1. Create an array of 5 colors and print the first and last element.


// let arr = ["pink","blue","yellow","red","green"]

// console.log("first element: ",arr[0], "last element: ", arr[4]);


// 2. Make an array of 3 student names. Replace the second name with another.

// let arr = ["basma","amin","saad"]

// arr[1] = "hamza"
// console.log(arr);
 

// 🔹 3. Create an array of 4 numbers. Use .push() to add one number.

// let arr = [2,3,4,5]
// arr.push(8);
// console.log(arr);


// 🔹 4. Create an array and use .pop() to remove the last item. Print updated array.

// let arr = ["filza","qirat","basma","fareeha"]
// arr.pop()
// console.log(arr);


// // 🔹 5. Use .length to find total items in: ["apple", "banana", "mango", "grapes"]

// let arr = ["apple", "banana", "mango", "grapes"]
// console.log(arr.length);


// 🔹 6. Create an array and use .unshift() to add an element at the beginning.

// let arr = ["watermelon","cocomelon","eclair","bubble"]
// arr.unshift("chips")
// console.log(arr);


// 🔹 7. Use .shift() on an array to remove the first item and print the result.

// let arr = ["watermelon","cocomelon","eclair","bubble"]
// arr.shift()
// console.log(arr);


// // 🔹 8. Use .includes("apple") on an array to check if apple is in the list.

// let arr = ["banana","apple","chiko","mango"]

// console.log(arr.includes("apple"));


// 🔹 9. Create an array of cities and use .indexOf("Lahore") to find its position.

// let arr = ["karachi","lahore","islamabad","peshawar"]
// console.log(arr.indexOf("lahore"));


// find the indexof pen

// let arr = ["pen", "pencil", "eraser", "pen"]
// console.log(arr.indexOf("pen"));


// find indexof monkey

// let arr = ["dog", "cat", "lion", "tiger"]
// console.log(arr.indexOf("monkey"));


// find the indexof 30

// let arr = [10, 20, 30, 40, 50]
// console.log(arr.indexOf(30));


// find the indexof java

// let arr = "learn javascript"
// console.log(arr.indexOf("java"));


// let arr = ["blue", "green", "red"]
// console.log(arr.indexOf("green"));


// 🔹 10. Join an array of words into a sentence using .join(" ").


// let arr = ["I","Love","Coding"]

// console.log(arr.join(" "));




// Array With Loops

// 1. Print each item of an array using a for loop.

// let arr = ["apple","mango","banana"]

// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
    
// }

// 2. Print only even numbers from an array.


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for(let i =0;i<numbers.length;i++){
    
//     if(numbers[i] % 2 === 0){
//         console.log(numbers[i]);
        
//     }
    
// }


// // 3. Calculate the total sum of elements in an array.

// let a = [1,2,3,4,5,6,7]
// let sum = 0

// for(let i = 0;i< a.length;i++){

//     sum += a[i]
    
//     console.log(sum);
    
// }

// 4. Find the maximum value in an array.

// let arr = [20,30,40,50,60]
// let max = arr[0]

// for(let i = 0; i< arr.length;i++){
    
//     if(arr[i] > max){

//         max = arr[i]
//     }

   
    
// }
//  console.log(max);


// let arr =[1,2,3,4,5,6,7,8,9,10]
// let even =[]
// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i]
//   if (num%2 === 0) {
//     even += num
//    console.log(even)

//  }

// }

// 5. Count how many values are greater than 50 in an array.


// let arr = [40,50,70,80,90]

// let count = 0

// for(let i = 0;i<arr.length;i++){


// }

// let arr =[1,2,3,4,5,6,7,8,9,10]
// let even =[]
// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i]
//   if (num%2 === 0) {
//     even.push(num)
  

//   } 

// }
//  console.log(even)


// 6. Create a new array that stores double of each element.

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr2 = []

// for(let i = 0;i< arr.length;i++){

    
    
//     arr2.push(arr[i] * 2)
// }
// console.log(arr2);


// 7. Count how many even numbers are in the array.

// let arr = [1,2,4,5,6,7,8,9,10,11,12,13,14]
// let count = 0

// for(let i = 0;i<arr.length;i++){

//     if(arr[i] % 2 === 0){

//         count++
//     }


// }

// console.log(count);


// 8. Print only string elements from a mixed-type array.

// let arr = ["basma","hassan",1,20,true,false]

// for(let i = 0;i<arr.length;i++){
    
//     if(typeof arr[i] === "string"){

//         console.log(arr[i]);
        
//     }
    
    
// }


// 9. Find the average of numbers in an array.

// let num = [2,3,5,6,7,8,9]
//  let total = 0

// for(let i = 0;i< num.length;i++){

//  total += num[i];


 
// }
//  let average = total / num.length;

// console.log(Math.round(average));


// // 10. Print elements that are divisible by 3 and 5.

// let arr = [3,5,7,6,8,9,10,12,15]

// for(let i = 0;i<arr.length;i++){

//     if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
//         console.log(arr[i]);
        
//     }
// }


// Given an array of numbers, find the total sum of all elements.


// let arr = [23,22,34,56,78,89]
// let total = 0

// for(let i = 0;i<arr.length;i++){
    
//     total += arr[i]
    
    
// }
// console.log(total);


// // Print the sum of all numbers in an array.

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let sum = 0

// for(let i = 0;i<arr.length;i++){
//     sum += arr[i]
// }
// console.log(sum);


