/* For Loop Syntax
  for(initializaion; condition; operation) 
  {
    statement1
    statement2
    ...

  }
*/

var age = 50;

//this can also be written as 
// for(var age = 50; age >=45; age--) { }

for (age; age >= 45; age-- )  
{

  if(age == 48) 
  {
    continue; //Keyword used to skip all the statements written after this code.
  }

  if(age == 46) 
  {
      break; //Keyword used to come out of the loop
  }

  document.write('<br>');  
  document.write('Eligible for vaccination');

}

document.write('<br>');  
document.write('Vaccination Halted');

