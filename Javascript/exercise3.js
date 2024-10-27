/* Take input as array and display only even numbers
   Take input as array and display only odd numbers
*/

/* Below for statement can be used as well 
   since input is an array
   for (let element of num) {
       console.log(element);
   }
*/

function dispEven(myArray){
    for (let i = 0; i < myArray.length; i++)
    {
        if (myArray[i] % 2 === 0)
            console.log(myArray[i]);
    }
}

function dispOdd(myArray){
    for (let i = 0; i < myArray.length; i++)
    {
        if (myArray[i] % 2 != 0)
            console.log(myArray[i]);
    }
}


myArray1 = [1,2,3,4,5,6,7,8,9,10];

dispEven(myArray1);
dispOdd(myArray1);