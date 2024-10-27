/* Return Fizzbuzz if number is divisble by 3 & 5
   Return Fizz if number is divisble by 3
   Return Buzz if number is divisble by 5
   Return original number if number is not divisble by 3 and 5
*/

function retBuzz(num) {
    if ((num % 3) === 0 && (num % 5) === 0)
        return "Fizzbuzz";
    else if ((num % 3) === 0)
        return "Fizz";
    else
       return (num % 5) === 0 ? "Buzz" : num;
}

console.log(retBuzz(23));