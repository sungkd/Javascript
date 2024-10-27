/* If else statement 
   Syntax 
   if (<condition>) {
     statement
   }
     else {
       Statement
     
     }

*/

let a = 2000, b = 2000;

if (a > b) {
    console.log('A is greater');
} else if (a < b) {
    console.log('B is greater')
} else
{
    console.log('Values are equal');
}

/*Switch Case
  Syntax
   switch(variable) {
     case <value>:
        statement;
        break;
     case <value>:
        statment;
        break;
     default:
        statmenet;
   }
 
*/

let lvc_month = 15;

switch (lvc_month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("Decemeber");
        break;
    default:
        console.log("Invalid Month");
}

/* For loop
   Syntax
    for ( initialization; condition; increment/decrement) {
      statement;
    }
*/

let myArray = [1,2,3,4,5,6,7,8,9,10,11,12];
let idx = 0;

// for (idx; idx < myArray.length; idx++) {

//     console.log(myArray[idx]);
// }

/* While Loop
   Syntax
    while (condition) {
      statement
    }

*/

let myVal = 10, idx1 = 0;

while (myVal > idx1) {
    console.log(myVal - idx1);
    idx1 ++;
}

let sum = 0;
while(true) {
    console.log('while-true', sum);
    sum++;

    if (sum === 15)
        break;

}

/* Do while loop 
   Syntax
   do {
     statement
   } while (condition);

   Difference between do while and while loop is
   Do while will execute minimum once irrespective of the while condition
   whereas while loop will execute only if the condition is met.
*/

let i = 50;

do {
    console.log('do-while ', i);
    i++;
} while (i <= 5);

/* for in loop : used for objects
   Syntax
   for (const <variable> in <object>) {
      statement
   } 

*/

/* Output
    Sunny
    30
    Male
*/

let myObj = {
    name: "Sunny",
    age: 30,
    Gender: 'Male'
};


for (const lvi in myObj) {
    console.log(myObj[lvi]);
}

/*Short Hand for loop 
  Syntax
   for (let <variable name> of <array name>) {
     statement;
   }

*/
let num = [1,2,3,4];

for (let element of num) {
  console.log(element);
}

/*Continue statement is used to skip the condition
  Syntax
   if (condition) {
      continue;  
   }
*/

let cnt = 0;

for (cnt; cnt <= 10 ; cnt++){
    if (cnt === 5) continue;
    console.log('continue ', cnt);
}