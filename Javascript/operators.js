/* Arithmetic Operators 
  - Subtraction
  + Addition
  * Multiplication
  / Division
  % Mpdulo

*/

console.log(10+20);   //Addition
console.log(30-40);   //Subtraction
console.log(4.5*56);  //Multiplication
console.log(134/3);   //Division
console.log(15%2);    //Modulo

/* ** Used to raise to the power of any number */

console.log(2**3); //2 to the power three or 2 * 2 * 2

/* Increment and Decrement Operator
  a++ -> Will return the value stored in a then increase it by 1
  ++a -> Will increment the value stored in a then return the output

  a-- -> Will return the value stored in a then decrement it by 1
  --a -> Will decrement the value stored in a then return the output

*/

let a = 10, b = 20;
console.log(a,b);

console.log(a++);
console.log(++a);

console.log(b--);
console.log(--b);

/*Comparison Operator

  > Greater than
  < Less than
  >= Greater than equal to
  <= Less than equal to
  != Not equal to
*/

let c = 10, d = 20, e = 30, f = 40, g = 50, h = "50";

console.log(c>d);
console.log(e<d);
console.log(a>=c);
console.log(d<=b);
console.log(e!=f);

/* == loose equality or truthy
   === strict equality 
*/

console.log(g==h); 
console.log(g===h);

/* Rules for == comparison 

  1. If either operand is string then other operand is converted to string
  2. If either operand is number then other operand is converted to nunmber
  3. If either operand is boolean, it will be converted to number (true = 1, false = 0)
  4. If one operand is object and other is primitive type then object will be converted 
     to primitive type before comparison
  5. If one operand is null or undefined the other must be null or undefined to return true
     otherwise it will always return false
*/

let val1 = 10, val2 = "10";
console.log('ex-1', val1==val2);  //output is true as the values are same after typecasting

let val3 = true , val4 = 'true';
console.log('ex-2', val3==val4);  //output is false because of rule 3

let val5, val6 = 100;
console.log('ex-3', val5==val6); //Output is false because of rule 5

let val7 = 0, val8 = 0;
console.log('ex-4', val7==val8);


/*Ternary Operator
 Syntax: <condition> ? <if true> : <if false>;
*/

let tval = 20, tval1 = 10;
console.log(tval > tval1 ? "Value 1 is greater" : "Value 2 is greater");

/* Logical Operators
   || OR
   && AND
   ! Not
   ?? null coalescing
*/

/* OR Operator*/
console.log(false||false);  //false
console.log(false||true);   //true
console.log(true||false);   //true
console.log(true||true);    //true

/* AND Operator*/
console.log(false&&false); //false
console.log(false&&true);  //false
console.log(true&&false);  //false
console.log(true&&true);   //true

/*Not Operator*/
console.log(!true); //Returns inverse value, here we get false as output
console.log(!false); //Returns inverse value, here we get true as output

/* ?? Null coalescing 
   If a value is null or undefined we assign a default value
*/
let mval = null, mval1;
console.log(mval, mval1);
console.log(mval ?? false, mval1 ?? true);

/*Truthy and Falsy
  In javascript if we use logical operator on non boolean values
  it returns the first true value

  Javascript will try to interpret a non boolean value as truthy or falsy
  Falsy values are
    - undefined
    - null
    - 0
    - ""
    - false
    - NaN

  anything that doesn't fall under falsy is considered truthy.
*/

let abc = false, pqr = "NaN";
console.log('truthy', abc || pqr); 

/* Here we get 1 because JS considers 1 as truthy 
   and returns the value without evaulating
   the third paramter
   JS evaluates the below expression from left to right

*/
console.log(false || 1 || 2); 

/* JS follows PEDMAS for calculation */
let cal1 = 5 + (5 * 4);
console.log("Calculation " , cal1);
