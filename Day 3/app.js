// 1. Ask the user to enter a fruit name. Use switch to check if it's "apple", "banana", or "orange", and print the price. For anything else, print "Not available".

// let fruitName = prompt("Enter your fruit Name")

// switch(fruitName){
//     case "apple":
//         console.log("Apple is 7$")
//         break;
//     case "banana":
//         console.log("banana is 10$");

//         break;
//     case "orange":
//         console.log("orange is 20$");

//         break;
//         default:
//             console.log("this is out of stock");

// }


// 2. Ask the user to enter a day (like "Monday"). Convert it to lowercase and print "It’s a weekday" or "It’s a weekend" using if and .toLowerCase().

// let day = prompt("Enter a day")

// if(day.toLowerCase() === "monday" || day.toLowerCase() === "tuesday" || day.toLowerCase() === "wednesday" || day.toLowerCase() === "thursday" || day.toLowerCase() === "friday"){
//     console.log("its a weekday");

// }else{
//     console.log("its a weekend");

// }


// 3. Ask the user to enter a password. If the password length is less than 6, print "Too short". If it's exactly 6, print "Acceptable". If greater than 6, print "Strong".

// let password = prompt("Enter your password")

// if(password.length > 6){
//     console.log("strong");

// }else if(password.length === 6){
//      console.log("Acceptable");

// }else if(password.length < 6){
//     console.log("Too short");

// }

// 4. Write a switch statement to check traffic light colors (e.g., "red", "yellow", "green"). Print what action should be taken (e.g., "Stop", "Slow down", "Go").

// let lightClr = prompt("Enter traffic colors")


// switch(lightClr.toLowerCase()){

//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("Slow Down");
//         break;
//     case "green":
//         console.log("Go");
//         break;
// }


// 5. Ask the user to enter their gender. If it’s "male", print "Welcome Sir", if "female", print "Welcome Ma’am", else print "Welcome".

// let gender = prompt("enter your gender")

// if(gender.toLowerCase() === "male"){
//     console.log("Welcome Sir");

// }else if(gender.toLowerCase() === "female"){
//     console.log("Welcome Madam");

// }else{
//     console.log("Welcome");

// }


// 6. Ask for a number. If it’s even, check if it's less than 50 or greater than 50, and print accordingly.

// let num = +prompt("enter a number")

// if(num % 2 === 0){
//     console.log(("even"));
//   if(num > 50){
//     console.log("Greater");

// }else if(num < 50){
//     console.log("less than 50");

// }  
// } 


// 7. Use switch to check grades like "A", "B", "C", "D", and print performance messages.

// let grades = prompt("Enter your grades")

// switch (grades.toUpperCase()) {
//     case "A":
//         console.log("Excellent");
//         break;
//     case "B":
//         console.log("GOOD");
//         break;
//     case "C":
//         console.log("Bad");
//         break;
//     case "D":
//         console.log("DUFFER");
//         break;

//     default:
//         console.log("You are failure");


// }


// 8. Ask the user for a string. If the string starts with the letter "A" or "a", print "Starts with A", else "Doesn’t start with A".


// let user = prompt("enter your name")

// if(user.startsWith("a")){
//     console.log("start with A")
// }

// 9. Ask the user to enter a sentence. Print the total number of characters using .length.


// let user = prompt("enter a sentence")

// console.log(user.length);

// 10. Ask for a number using prompt. If the number is divisible by both 2 and 5, print "Valid", else "Invalid".

// let num = +prompt("Enter a number")

// if(num % 2 === 0 && num % 5 === 0){
//     console.log("Valid");

// }else{

//     console.log("Invalid");

// }


// 11. Create a program that asks a user to enter their city name and converts it to uppercase using .toUpperCase().


// let city = prompt("Enter your city Name")

// console.log(city.toUpperCase());


// 12. Ask for a user’s age. If age is below 18, print "Underage". If 18-60, print "Adult". If more than 60, print "Senior".


// let age = +prompt("Enter your age")

// if(age < 18){
//     console.log("Underage");

// }else if(age >=18 && age <= 60){
//     console.log("Adult");

// }else if(age > 60){
//     console.log("Senior");

// }else{
//     console.log("try again");

// }


// 13. Use switch to ask for a meal time ("breakfast", "lunch", "dinner") and print the recommended food.

// let meal = prompt("what is your meal")

// switch (meal.toLowerCase()) {
//     case "breakfast":
//         console.log("lavish breakfast");
//         break;
//     case "lunch":
//         console.log("have a great lunch");
//         break;

//     case "dinner":
//         console.log("good dinner");
//         break;
//     default:
//         console.log("this is not your meal");

// }

// 15. Ask the user to enter a number. If it’s negative, print "Negative number", if zero print "Zero", else print "Positive number".

// let user = +prompt("Enter a number")

// if(user === 0){
//     console.log("Zero");
    
// }else if(user > 0){
//     console.log("Positive number");
    
// }else{
//     console.log("Negative number");
    
// }

// 14. Ask the user to enter any sentence. If the sentence includes the word "javascript", print "Great!", else print "Keep learning!".


// let sentence = prompt("Enter a sentence")



// if(sentence.toLowerCase().includes('javascript')){

// console.log("great");

// }else{
//     console.log("keep learning");
    
// }


// 1.	Write a program to check whether the given input number isdivisible by 3 or else show a message “Number is not divisibleby 3”.

// let num = 9

// if(num % 3 === 0){
//     console.log("divisble by 3");
    
// }else{
//     console.log("number is not divisible by 3");
    
// }

// Q1. Ask the user to enter a day name (e.g., "Monday"). Use switch to print if it’s a weekday or weekend.

// let day = prompt("Enter your day name")


// switch(day.toLowerCase()){
//     case "monday":
//     case "tuesday":
//     case "wednesday":
//     case "thursday":
//     case "friday":
//     console.log("Its a weekday");
//     break;
//     default:
//         console.log("its a weekend");       
// }


// Q2. Ask the user to enter a string and display its length using .length.

// let user = "basma hassan"
// console.log(user.length);


// Q3. Ask the user to enter their name and convert it to uppercase using .toUpperCase().

// let user = prompt("enter your name")
// console.log(user.toUpperCase());

// Q4. Ask the user to enter a color. Convert it to lowercase using .toLowerCase() and match it with a switch to print related message (like “red = stop”).

// let colr = prompt("enter color name")

// switch(colr.toLowerCase()){

//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("go");
//         break;
//     case "blue":
//         console.log("wait");
//         break;
//     default:
//         console.log("try again");
        
// }

// Q5. Create a program that asks for a decimal number and rounds it using Math.round().

// let program = +prompt("enter a number")
// let round1 = Math.round(program);
// console.log(round1);


// Q6. Ask the user to enter a decimal number and print:
//  Floor value using Math.floor()
//  Ceil value using Math.ceil()

// let user = +prompt("enter decimal numbers")
// let user1 = Math.floor(user);
// console.log(user1);
// let user2 = Math.ceil(user);
// console.log(user2);

// Q8. Ask the user to input a sentence. Convert it to lowercase and count the number of characters.

// let input = prompt("enter a sentence")
// console.log(input.length);


// Q10. Ask for a number with decimal and print it with 2 decimal places using .toFixed(2).


// let num = Number(prompt("enter a number"))
// console.log(num.toFixed(2));

// Q9. Ask the user for their age. If it’s not a number, show an error using isNaN().

// Q7. Ask the user for temperature. Use switch to suggest:
//“Too Cold” for less than 10
// “Pleasant” for 10–25
// “Hot” for more than 25
// (Hint: use true in switch(true) to allow range checking)

// let temp = +prompt("enter your city temperature")

// switch(temp){
//     case 9:
//         console.log("Too cold");
//         break;
//     case 15:
//         console.log("Pleasant");
//         break;
//     case 30:
//         console.log("HOT");
//         break;
//     default:
//         console.log("try again");        
// }


// Q9. Ask the user for their age. If it’s not a number, show an error using isNaN().

// let age = +prompt("enter your age")

// if(age != ){
//     alert("is not a number")
// }else{
//     console.log("it is a number");
    
// }



