/* Comparison Operators
  ==  Checks if the value is equal to something
  >   Greater than 
  <   Less than
  !=  Not equal to
  >=  Greater than or equal to
  <=  Less than or equal to
*/

//Equal to Operator
var val1 = 15; var val2 = 15;
if(val1 == val2) {
    document.write('Value is equal');
}
else {
    document.write('Value mismatch');
}

//Greater than Operator
var val3 = 25; var val4 = 15;
if(val3 > val4) {
    document.write('<br>');
    document.write('\n Value3 is greater');
}
else {
    document.write('<br>');
    document.write('\nValue4 is greater');
}

//Less than Operator
var val5 = 15; var val6 = 25;
if(val5 < val6) {
    document.write('<br>');
    document.write('\nValue5 is less');
}
else {
    document.write('<br>');
    document.write('\nValue6 is less');
}


//Greater than equal to Operator
var val7 = 15; var val8 = 15;
if(val7 >= val8) {
    document.write('<br>');
    document.write('\nValue7 is greater or equal');
}
else {
    document.write('<br>');
    document.write('\nValue 8 is greater or equal');
}


//Less than equal to Operator
var val9 = 15; var val10 = 15;
if(val9 <= val10) {
    document.write('<br>');
    document.write('\nValue9 is less or equal');
}
else {
    document.write('<br>');
    document.write('\nValue10 is less or equal');
}

//Not equal to
var val11 = 15; var val12 = 60;
if(val11 != val12) {
    document.write('<br>');
    document.write('\nValues are not equal');
}
else {
    document.write('<br>');
    document.write('\nValue is equal');
}


/* Logical Operators 
&& - Logical AND operator, returns true if both conditions is satisified
|| - Logical OR operator, returns true if any one condition is satisfied

Table for Logical AND                   Table for Logical OR
Value1   Value2    Output               Value1    Value2        Output  
false    false     false                false     false         false
false    true      false                false     true          true
true     false     false                true      false         true
true     true      true                 true      true          true

*/

//Logical AND
var age = 35;

if(age >= 18 && age <=35 ) {
    document.write('<br>');
    document.write('Working Age group');
}
else 
{
    document.write('<br>');
    document.write('Older Generation');
}

//Logical OR
var age1 = 60;
if(age1 == 55 || age1 <= 60 ) {
    document.write('<br>');
    document.write('Retired');
}
else
{
    document.write('<br>');
    document.write('About to Retire');    
}