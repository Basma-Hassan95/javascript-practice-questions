// 1. Print numbers from 1 to 10 using a for loop.

// for(let i = 1; i<=10; i++){
//     console.log(i);
    
// }

// 2. Print even numbers between 1 to 20 using a while loop.

//  var num = 0;

// while(num % 2 === 0 && num<20 ){
//     console.log(num);
//     num = num + 2
    
// }


// 3. Print the table of a number (user input) up to 10.


// let num = +prompt("enter a table number")

// for(let i = 1; i<=10; i++){
//     console.log(num + "x" + i + "=" + num*i);
    
// }


// 4. Calculate the sum of numbers from 1 to n (user input).

//  let n = +prompt("enter a number")

//  let sum = 0;

//  for(let i = 0; i<=n; i++){
//                          // n = 5
//                         // i = 0
//                         // i = 1
//                         // i = 2
//                         // i = 3
//                         // i = 4
//                         // i = 5

//      sum += i // sum = sum + i
//                 // sum = 0 + 0 = 0
//                 // sum = 0 + 1 = 1
//                 // sum = 1 + 2 = 3 
//                 // sum = 3 + 3 = 6
//                 //  sum = 6 + 4  = 10  
//                 // sum = 10 + 5  = 15
    
//      console.log(sum);
    
//  }


// 5. Print all odd numbers between 50 to 70 using a for loop.

// let num = 70;

// for(let i = 51; i<num;i = i + 2){
//     console.log(i);
    
// }


// 6. Count down from 10 to 1 using a while loop.


// let i = 10;

// while(i>=1){
//     console.log(i);
//     i--;
    

// }


// 7. Ask the user for 5 numbers and calculate the total sum using a loop.

// let sum = 0;

// for(let i = 1; i<=5; i++){ // i = 3 i = 4 i = 5
// let num = +prompt("enter a number")
    
//     sum += num;  // sum = sum + num
//                  // sum = 5 + 5 = 10
//                 // sum = 10 + 5 = 15
//                 // sum = 15 + 5 = 20
//                 // sum = 20 + 5 = 25
//                  // sum = 25 + 5 = 30
//       console.log(sum);
    
// }


// 8. Find the factorial of a number using a loop.


// let n = +prompt("enter a number")
// let fact = 1;

// for(let i = 1; i<=n; i++){
 
//      fact *=  i;  // fact = fact * i
//                     //  fact = 1 * 1 = 1
//                     // fact = 1 * 2 = 2
//                     // fact = 2 * 3 = 6
//                     // fact = 6 * 4 = 24
//                     // fact = 24 * 5 = 120

//      console.log(fact);
     
// }

// 9. Print squares of numbers from 1 to 10.


// let num = 10

// for(let i = 1; i<num; i++){

//    let result =  i*i
//     console.log(result);
    
    
// }

// 10. Ask the user to enter 10 numbers. Print only the numbers that are divisible by 2.

// for (let i = 0; i<=10;i++){
//     let user = +prompt("enter a number")
//     if(user % 2 === 0){
//         console.log(user + " is divided by 2");
        
//     }
// }

// let num = +prompt("Enter a number");
// let isPrime = true;

// if (num <= 1) {
//     isPrime = false;
// } else {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }

// if (isPrime) {
//     console.log(num + " is a prime number.");
// } else {
//     console.log(num + " is not a prime number.");
// }


// // 12. Print the reverse of numbers from 100 to 80 (use for loop).


// for(let i = 100; i > 80; i--  ){
//     console.log(i);
    
// }


// 13. Ask the user for a number and print its multiplication table in reverse (from 10 to 1).

// let user = +prompt("enter a number")

// for(let i = 10; i>=1; i--){
//     console.log(user + "x" + i + "=" + user*i);
    
// }


// 15. Ask the user for 3 numbers and print the largest using loops.


// for(let i = 1; i<4; i++){
//     let user = +prompt("enter a number")
//     let user1 = 19;
//     let user2 = 15;
//     let user3 = 11;
//     if(user1 > user2 && user1 > user3){
//         console.log(user + " largest number");
        
//     }
// }


// Print all even numbers from 1 to 20 using a loop.

// for(let i = 1; i<=20;i++){

//     console.log(i);
    
// }

// Ask the user for a number. Print its multiplication table up to 10.


// let num = +prompt("enter a number")

// for(let i = 1; i<=10; i++){

//     console.log(num + "x" + i + "=" + num*i);
    
// }


// Count how many vowels are in a word entered by the user.

// let count = prompt("enter a words")

// for(let i = 0; i<count.length; i++){
        
//     if(count[i].toLowerCase() === "a" || count[i].toLowerCase() === "e" || count[i].toLowerCase() === "i" || count[i].toLowerCase() === "o" || count[i].toLowerCase() === "u" ){
        
//         console.log(count[i]);
        
        
//     }else{
        
//         console.log("not vowels");
        
//     }
// }

// Print each character of a string using a for loop.


// let charc = "hello world"

// for(let i = 0;i<charc.length;i++){
//     console.log(charc[i]);
    
// }

// Ask the user for a word, and print it in reverse.

// let word = prompt("enter a word")

// for(let i = word.length-1; i>=0 ; i--){
//     console.log(word[i]);
    
// }

// Print the factorial of a number (e.g., 5! = 5×4×3×2×1 = 120).



// let user = +prompt("enter a number")
// let fact = 1;

// for(let i = 1; i<=user; i++){

//     fact *= i  // fact = fact * 1
//                // fact = 1 * 1 = 1
//                // fact = 1 * 2 = 2
//                // fact = 2 * 3 = 6
//                // fact = 6 * 4 = 24
//                // face = 24 * 5 = 120
//     console.log(fact);
    
// }


// Ask the user for a number. Print the sum of digits (e.g., 123 ➝ 1+2+3 = 6).

// let num = prompt("enter a string")

// let sum = 0

// for(let i = 0;i<num.length;i++){

    
//     sum += parseInt(num[i])
    
// }
//  console.log(sum)    



// let user = prompt("enter numbers")

// let mult = 1;
                                       
// for(let i = 0; i<user.length;i++){  
  
//     mult *= parseInt(user[i])  // mult = mult * user[i]
//                                 // mult = 1 * "2" 2 = 2     
//                                 // mult = 2 * "3" 3 = 6
//                                 // mult = 6 * "4" 4 = 12 
// }
// console.log(mult)


// Ask the user for a number. Count how many even digits are in it.

// let num = prompt("enter a number")

// for(let i = 0; i<num.length;i++){
//     if(parseInt(num[i]) % 2 === 0){
//         console.log("even number", num[i]);
        
//     }
// }


//Question 3:
// Ask the user for a number. Print the reverse of the number using string logic.
//  Example:
// Enter number: 9876 → Output: 6789


// let user = prompt("enter a number")

// for(let i = user.length -1 ;i>=0;i--){

//     console.log(user[i]);
    
// }


// Ask the user for a sentence. Count how many spaces are there.


// let user = prompt("enter a sentence")

// for(let i = 0;i<user.length;i++){

//     if(user[i] === ' '){
//         console.log("Space found");
        
//     }
    
// }


// Check if a string is a palindrome or not (e.g., madam, level).

// let user = prompt("enter a word")

// let word = ""

// for(let i = user.length - 1; i>=0; i-- ){

//     word += user[i]
    
     
// }
// console.log(word);

//     if(user === word){
//         console.log("thats palindrome");
        
//     }else{

//         console.log("not palindrome");
        
//     }



// Ask the user to enter a sentence. Convert each letter to uppercase and print.

// let user = prompt("enter a sentence")

// let res = user.toUpperCase();
// console.log(res);


// Print all numbers from 1 to 50 that are divisible by both 3 and 5.


// for(let i = 1; i<=50;i++){

//     if(i % 3 === 0 && i % 5 === 0){

//         console.log(i);
//      }
     
    
//     }


// Project 1: Marksheet / GPA Calculator
// Inputs: 3 to 5 subject marks (via prompt)

// Logic: Total, Average, Percentage, Grade (using if-else)

// Topics: prompt, parseInt, conditions, arithmetic

