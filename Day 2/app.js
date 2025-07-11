// var num = +prompt("Enter a number");

// const { use } = require("react");

// if(num > 100){

//     console.log("Too big")
// }else if(num > 50 && num < 100){

//     console.log("moderate")
// }else{

//     console.log("small number")
// }

// let username = "admin";
// let pass = 1234;

// if(username == "admin" && pass == 1234){
// console.log("Login Successful")

// }else{

//     console.log("invalid credentials")
// }

// let city = prompt("Enter your city")

// if(city == "karachi" || city == "lahore" ){

//     console.log("metro city")
// }else if(city == "peshawar"){
//      console.log("capital of kpk")

// }
//     else{

//   console.log("unknown city")
// }

// let num = +prompt("Enter a number")

// if(num % 2 === 0 && num % 3===  0){

//     console.log("Divisible by both")
// }else if(num % 2 === 0){

//     console.log("Only by 2")
// }else if(num % 3 === 0){

//     console.log("only by 3")
// }else{

//     console.log("not divisible by 2 or 3")
// }


// let vowels = prompt("Enter your number")

// if(vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u"){

//     console.log("Vowels")
// }else{

//     console.log("consonant")
// }


//  Create a string variable fruit = "banana" and print the index of the first "a".

// var fruit = "banana";
// console.log(fruit.indexOf('a')) // answer 1

// // Use lastIndexOf to find the last occurrence of "a" in "banana"

// console.log(fruit.lastIndexOf('a')); // answer 5

// // 3. Create a string city = "Islamabad" and extract "Islam" using slice.


// let city = "Islamad";

// let city1 = city.slice(0,5);
// console.log(city1); // answer islam

// // 4. Extract the last 3 characters of "Karachi" using slice.


// let charc = "karachi";

// let charc12 = charc.slice(4)
// console.log(charc12) // answer chi


// 5. Declare word = "elephant" and print the index of "ph".


// let word = "elephant";

// console.log(word.indexOf('ph')); // answer 3


// 6. If a string starts with "hello", print "Greeting detected!".

// let str = "hello".startsWith("hello");


//  if(str ==  "hello".startsWith("hello")){

//     console.log("greeting") // answer greeting
//  }


// 7. Take input from user, and check if the letter "z" exists in it or not using indexOf.

// let user = prompt("Enter the letters ")

// let user1 = user.indexOf('z');
// console.log(user1); 


// 8. Write a program to find the middle character of any string (use slice with calculated index).


// 10. Let str = "javascript" — use slice() to extract "script" from it.

// let str = "javascript";

// let str1 = str.slice(4);
// console.log(str1) // answer script


// Ask the user to enter a number. If it is divisible by 2 or 5, print "Valid Number", otherwise "Invalid Number".

// let user = +prompt("enter a number")

// if(user % 2 === 0 || user % 5 === 0) {

//     console.log("valid number")
// }else{

//     console.log("invalid number")
// }


// Check if a number is positive, negative, or zero using if, else if, else.

// Create a variable let temp = 42.
// If temp is greater than 40, print "Too Hot"
// Else if between 30 and 40, print "Warm"
// Else print "Cool".


// let temp = 42;
// if(temp > 40){
//     console.log("too hot")
// }else if(temp > 30 && temp < 40){
//     console.log("hot")
// }else{

//     console.log("cool") // hot
// }    

// Ask the user for a number. If it’s even and greater than 10, print "Even & > 10", otherwise "Does not match".
// let num = +prompt("enter a number")

// if(num % 2 === 0 && num > 10){

//     console.log("Even & > 10")
// }else{

//     console.log("doesnot match")
// }

// Declare let marks = 75.
// Print grade using these conditions:

// 80–100: A

// 70–79: B

// 60–69: C

// Below 60: F


// let marks = +prompt("Enter your grades");

// if(marks >= 80 && marks <= 100){
//     console.log("Grade A")
// }else if(marks >= 70 && marks <= 79){
//     console.log("Grade B")
// }else if(marks >= 60 && marks <= 69){
//     console.log("Grade C")
// }else{
//     console.log("Fail")
// }

// Take a number from the user. If it’s a multiple of both 4 and 6, print "Multiple of 4 and 6".


// let multi = +prompt("Enter a number");

// if(multi % 4 === 0 && multi % 6 === 0){
//     console.log("miltiple of 4 and 6")
// }else{

//     console.log("not multiple")
// }

// If user enters "yes" or "y", print "Confirmed", otherwise print "Cancelled".

// let user = prompt("enter a string");

// if(user === "yes" || user === "y"){

//     console.log("confirmed")
// }else{

//     console.log("cancelled")
// }


// Ask the user to enter a single character. Check if it's a vowel or consonant.


// let charc = prompt('enter a character');
// let user = charc.toLowerCase();

// if(user === 'a' || user === 'e' || user === 'i' || user === 'o' || user === 'u'){

//     console.log("its a vowel")
// }else{

//     console.log("consonant")
// }


// Create variable let time = 19.
// Print "Good Morning" if time < 12, "Good Afternoon" if between 12–18, else "Good Evening".


// let time = +prompt("enter your time");

// if(time < 12){

//     console.log("Good Mornning")
// }else if(time >= 12 &&  time <= 18){

//     console.log("Good afternoon")
// }else{

//     console.log("good evening")
// }

// Ask for user's age.
// If between 13 and 19, print "Teenager", else "Not a teenager".


// let age = +prompt("enter your age")

// if(age >= 13 &&  age <= 19){

//     console.log("teenager")
// }else{
//     console.log("not teenager")
// }

// Declare let username = "admin".
// If username is "admin" or "superuser", print "Access granted", else "Access denied".


// let username = "admin";

// if(username === "admin" || username === "superuser"){

//     console.log("access granted")
// }else{

//     console.log("access denied")
// }

// Ask the user for their score.
// If score > 100 or < 0, print "Invalid", else print "Valid".


// let score = +prompt('enter your score')
// if(score > 100 || score < 0){
//     console.log("invalid")
// }else{
//     console.log("valid")
// }


// Create two variables: let x = 15, let y = 20.
// Print the greater number using if-else.


// let x = 15;
// let y = 20;

// if(x>y){
//     console.log( x + " is greater")
// }else if(x < y) {
//     console.log(y + "is lesser")
// }else{

//     console.log("both are equal")
// }


// Ask user to input a year. If year is divisible by 4, print "Leap Year".

// let user = +prompt("enter a year")

// if(user % 4 === 0){
//     console.log("leap year")
// }

// Ask user for a number. If it’s positive, check if it’s even or odd.


// let user = +prompt("Enter a number")

// if(user % 2 === 0){
//     console.log('even')
// }else{
//     console.log("odd")
// }

// Ask user for two numbers. Check which one is greater and whether it is divisible by 3.


// let user1 = +prompt("Enter the first number")
// let user2 = +prompt("Enter the second number")

// if(user1 > user2){
//     console.log("user1 is greater")

//     if(user1 % 3 === 0){

//         console.log("user1 is divisible by 3")
//     }else{
//         console.log("user1 is not divisible by 3")
//     }
// }else if(user2 > user1){
//     console.log("user2 is greater")

//     if(user2 % 3 === 0){
//         console.log("user2 is divisible by 3")
//     }else{
//         console.log("user2 is not divisible by 3")
//     }
// }else {

//     console.log("both numbers are equal")
// }


// let age = +prompt("Enter your age")
// let country = prompt("Enter your country")

// if(age > 18){
//     console.log("You are above 18 lets vote")

//     if(country.toLowerCase() === "pakistan"){
//         console.log("eligible to vote in pakistan")
//     }else{
//         console.log("not eligible to vote in pakistan")
//     }
// }
// else{

//     console.log("not eligible to vote")
// }


// let user = +prompt("Enter a positive number")

// if(user > 0){

//     console.log("Number is positive")

//     if(user % 2 === 0){
//         console.log("positive even number")
//     }else{
//         console.log("positive odd number")
//     }
// }else{
//     console.log("Negative number")
// }

// Ask user for age and city. If age is >18 and city is "Lahore", print "Eligible".


// let user = +prompt("enter your age")
// let city = prompt("enter your city")

// if(user >= 18){

//     console.log("lets vote")

//     if(city.toLocaleLowerCase() === "lahore"){
//         console.log("eligible")
//     }else{
//         console.log("not eligible")
//     }
// }else{
//     console.log("you are not adult")
// }


// Ask user for a name. If the name is "Ali", check if the length is greater than 3.

// let name = prompt("enter your name")

// if(name.toLowerCase() === "ali"){

//     console.log("Correct answer")

//     if(name.length > 3){
//         console.log("length is greater than ali")
//     }else{
//         console.log("doesnot match length")
//     }
// }else{
//     console.log("try again")
// }


// Ask user for marks in 3 subjects. Calculate average. If average > 80, print "Excellent".


// let eng = +prompt("Enter marks of english")
// let math = +prompt("Enter marks of math")
// let phy = +prompt("Enter marks of physics")

// let total = eng + math + phy;
// let average = total/3;

// if(average >= 80){
//     console.log("excellent");
// }else{
//     console.log("you are a loser")
// }

// Ask user for total purchase. If total > 1000, check if user has coupon. If yes, give 10% discount.

// let purchase = +prompt("total purchase")

// if(purchase >= 1000){

//     let coupon = prompt("do you have coupen");

//     if(coupon.toLowerCase() === "yes"){

//         console.log("just give you 10% discount")
//     }else{
//         console.log("cant give you any discount")
//     }
// }else{
//     console.log("try again")
// }

// Ask user to enter a password. If password is "admin123", ask for a security code. If correct, print "Access Granted".

// let password = prompt("enter the password")

// if(password.toLowerCase() === "admin123"){

//     let code = +prompt("tell me your security code?")
//     if(code === 242420){
//         console.log("access granted")
//     }else{
//         console.log("your code is incorrect, try again")
//     }
// }else{
//     console.log("password is incorrect")
// }


// Ask user for temperature. If > 40, print "Hot", if > 30, print "Warm", else print "Cool".

// let temp = +prompt("enter the temperature")

// if(temp >= 40){
//     console.log("hot")
// }else if(temp >= 30){
//     console.log("warm")
// }else{
//     console.log("its coooollll")
// }

// function addition(num) {
// 	num++
// 	return num;
	
// }

// console.log(addition(0));

// Ask user for a letter. If it’s vowel, check if it’s uppercase or lowercase.


// let letter = prompt("Enter a character")

// if(letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u"){
//     console.log("its a vowel")

//     if(letter === letter.toLowerCase()){
//         console.log("vowels are lowercase")
//     }
// }else{
//     console.log("no is not vowels")
// }

// Ask user for a number. If divisible by 2 and 5 both, print "Divisible by both".

// let num = +prompt("enter a number")

// if(num % 2 === 0 && num % 5 === 0){
//     console.log("divisible by both")
// }else{
//     console.log("not divisible")
// }

// Ask user for a number. If it’s odd, check if it’s also > 50.



// Ask user for name and city. If name is "Sara" and city is "Karachi", print "Welcome, Sara!".


// let name = prompt("whats your name")
// let city = prompt("whats your city")

// if(name === "sara" && city === "karachi"){
//     console.log("Welcome, sara!")
// }else{
//     console.log("wrong details")
// }


// Ask user for 3 numbers. If all are equal, print "All Equal", else check if any two are equal.

// let num1 = +prompt("Enter the number1")
// let num2 = +prompt("Enter the number2")
// let num3 = +prompt("Enter the number3")

// if(num1 === num2 && num1 === num3 && num2 === num3){
//     console.log("All are equal")
// }else if(num1 === num2 || num1 === num3 || num2 === num3 ){
//     console.log("Only two are equal")
// }else{
//     console.log("No one is equal")
// }





// Ask user for username and password. If both are correct, print "Login successful", else show "Error".

// let username = prompt("enter username")
// let password = prompt("enter your password")

// if(username === "basma" && password === "basmakhan220"){
//     console.log("login succesful")
// }else{
//     console.log("error")
// }


// Ask user for current time in hours (24hr format). If time is between 6 and 12, print "Good Morning", else if between 12 and 18, "Good Afternoon", else "Good Evening


// let time = +prompt("enter current time")

// if(time >= 6 && time < 12){
//     console.log("Good Mornning")
// }else if(time >= 12 && time <= 18){
//     console.log("Good Afternoon")
// }else{
//     console.log("Good Evening")
// }