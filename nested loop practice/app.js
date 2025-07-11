//nested loop


// for(let i = 1;i<=3;i++){
//     console.log(i);
    
// }

// for(let i = 1; i<=3;i++){

//     for(let j = 1;j<=3;j++){
//         console.log("i =", i, "j =", j);
        
//     }
// }



// for(let i = 1; i<=3;i++){

//     for(let j = 1;j<=3;j++){
//         console.log(i*j);
        
//     }
// }

// for (let i = 1; i <= 3; i++) {
//     let row = "Row " + i + " → "; // row 1 → 

//     for (let j = 1; j <= 3; j++) {
//         row += j + " "; // row = row + j
//                         // row = row 1 → + 1 =  row 1 → 1
                           // row = row 1 → 1 + 2 = row 1 → 1 2
                           // row =  row 1 → 1 2 + 3 = row 1 → 1 2 3               
//     }

//     console.log(row);
// }


// for(let i = 2;i<=4;i++){
      
//     let row = "";

//     for(let j = 1;j<=3;j++){
        
//          row *= j + " "
        
//     }
    
//     console.log(row);
    
// }



// for(let i = 1;i<=3;i++){
//     let row = ""; // row = 111
//                   // row = 222

//     for(let j = 1;j<=3;j++){
//         row += i // row = row + 1 = "" + 1 ="1"
//                  // row = "1" + 1 = "11"
//                  // row = "11" + 1 = "111"
//                  // row = "" + 2 = "" + 2 = "2"
//                  // row = "2" + 2 = "22"
//                  //row = "22" + 2 = "222"
//     }
// console.log(row);

    
// }


// for(let i = 1;i<=3;i++){
//     let row = ""; // row = 111
//     // console.log(row);
    

//     for(let j = 1; j<=4;j++){
//         row += i 
//     }
//     // row = row + i = "" + 1 = row = "1"
//                  // row = "1" + 1 = "11"
//                  // row = "11" + 1 = "111"
//                  // row = "111" + 1 = "1111"
//    console.log(row);
   
// }


// for(let i = 1;i<=4;i++){

//     let row = ""; // row = 1234
//     for(let j = 1; j<=4;j++){

//         row += j  // row = row + j
//                   // row = " " + 1 = "1"
//                 // row = "1" + 2 = "12"
//                  // row  = "12" + 3 = "123"
//                  // row = "123" + 4 = "1234"
//     }

//     console.log(row);
    
// }
 

// for(let i = 1; i <= 3; i++)  {  // pehly i ka loop chalay ga.. i = 1.. phr javascript line by line chalti hai..phr jb wo neechay gaya tw neechay ussay row string mai blank mila..phr wo neechay gaya tw ek aur  loop mila jo j ka loop tha..
//     let row = "";// yeh string hai..ok?

//     for(let j = 1; j <= 4; j++){ // ab hum chalty hain j ky loop mai.. j = 1, 1<4---condition true phr jb condition true hoti hai wo neechay jata hai neechay ek line hai row += i,  eska mtlb hai row = row + i.. row = "" + 1 = "1";
//             //row = "1" + 1 = "11" 
//         row += i + " ";
//     }

//     console.log(row);
// }



// let userName = +prompt("Enter a number do you want to convert from a decimal")
// let converstionType = +prompt("Enter a number Type");

// if(converstionType === 2){
//     console.log(userName.toString(converstionType));
    
// }else if(converstionType === 8){
//     console.log(userName.toString(converstionType));
// }else if(converstionType === 16){
//     console.log(userName.toString(converstionType));
// }
// else{
//     console.log("Invalid Converstion");
    
// }


// 🧩 Q1: Ask the user for a number, print a multiplication table till that number

// let user = +prompt("enter a number")

// for(let i = 1;i<=3;i++){

//     let row = "";
    
//     for(let j = 1;j<=3;j++){

//         row *= parseInt(i * j);
//     }

    
//     console.log(row);
// }


// for (let i = 1;i<=3;i++){
//     let row = "";

//     for(let j = 1;j<=3;j++){
//         row +=  i * j + " ";
//     }
//     console.log(row);
    
// }



// for(let i = 1;i<=3;i++){

//     let row = "";
//     for(let j = 1;j<=3;j++){
//         row += i + " "
//     }

//     console.log(row);
    
// }



// for(let i =1 ; i<=5;i++){

//     let row = "";

//     for(let j = 5;j>=1;j--){
//         row += j + " ";
//     }

//     console.log(row);
    
// }


// for(let i = 1;i<=3;i++){

//     let row = " ";
//     for(let j = 1;j<=5;j++){

//         row += "*" + " "
//     }

//     console.log(row);
    
// }


// for(let i = 1;i<=5;i++){
//     let row = ""

//     for(let j = 5;j>6-i;j--){
//         row += j + " "
//     }

//     console.log(row);
    
// }


// for(let i = 1;i<=5;i++){

//     let row = " ";

//     for(let j = 1;j<=6-i;j--){

//         row += j + " "
//     }

//     console.log(row);
    
// }



// for(let i =1;i<=4;i++){

//     let row = " ";

//     for(let j = 1;j<=5-1;j--){
//         row+= count + " "
        
//     }

//     console.log(row);
    
// }