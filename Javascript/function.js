/* Function Syntax

   function definition
   function <func name> (){
     statement ....;
    
   }

   function call
   <function name>();

*/

function dispHi() {
    console.log("hello world!!");
}

dispHi();

function addVar (value1 ,value2) {
  console.log(value1 + value2);
}

addVar(10,"40");

function multValue(num1,num2){
  return num1 * num2;
}

console.log(multValue(4.5,3.142));

//If we don't specify a return value the function will return an undefined value
function multValue1(num1,num2){
  const abc1 = num1 * num2;
}

console.log(multValue1(4.5,3.142));