/*JavaScript variables*/

//var keyword to declare variable
var newVariable;

var bool = true;     // this is boolean value
var bool1 = 'true';  // this is string


newVariable = 100; //value assigned to variable

document.write(newVariable);  //Display value on the website

//Display value in console
console.log(newVariable); 
console.log(newVariable++);
console.log(newVariable);
console.log(++newVariable);

/*or var newVariable = 100; */

/* Mathematical Operations
 var newvalue = 5;  = is assignment operator
 newvalue + 10;     + addition operator
 newvalue - 10;     + subtraction operator
 newvalue / 10;     + division operator
 newvalue * 10;     * multiplication operator

 newvalue + 'hello' => 5hello => Here + behaves a concatenate operator 

 newvalue * 'hello' => Nan (Not a number) because we're trying to multiple a number and string
*/

/* Shorthand operators
var newval = 100;

newval = newval + 50;  => Regular operation
newval += 50;  => shorthand addition
newval -= 50;  => shorthand subtraction
newval /= 50;  => shorthand division
newval *= 50;  => shorthand multiplication

newval++; => Adds 1
newval--; => Subtracts 1

++newval; => Adds 1
--newval; => Subtracts 1

If ++ or -- is in prefix then the operation will be performed first before printing the value
Example: 
    newval = 10; 
    ++newval;
    newval => output will be 11

Whereas if ++ or -- is in suffix then the old value will be printed then operation will be performed
Example:
    newval = 10;
    newval++;
    newval; => output will be 10
    newval; => output will be 11

*/

