/* Primitive Data types
    1. String
    2. number
    3. boolean
    4. BigInt
    5. undefined
    6. null
    7. Symbol
*/

//String
let myString1 = 'Define a string 1';
let myString2 = "Define a string 2";
let myString3 = `Define a string 3`;

//Number
let myIntegerNumber = 1023;
let myDecimalNumber = 123.3414;
let myNegativeNumber = - 121.12;

//Boolean
let myLogicalValue = true;
let myLogicalValue1 = false;

//BigInt
let myBigIntValue = 21345678212n;

/*Undefined
When we console.log any variable where no value is assigned
we get output as undefined
*/
let myUndefinedValue;
console.log(myUndefinedValue);

/* Null
When we explictly want to empty a variable we assign it null
*/
let myVariable = "2143";
console.log("before null " + myVariable);
myVariable = null;
console.log("after null " + myVariable);

/*Symbol
Used to create unique identifers and objects
*/
const mySymbol = Symbol();
console.log(mySymbol);


/* Reference data type 
   1. Object
*/


