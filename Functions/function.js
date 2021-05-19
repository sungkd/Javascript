/* Syntax
    function <name>() 
    {
        statement1
        statement2
        ...
    }
*/

function getAverage(num1, num2) 
{
    var average = (num1 + num2) / 2;
    document.write('Average is ' + average);
}

function getSum(num1, num2)
{
    var sum = num1 + num2;
    document.write('<br>');
    document.write('Sum is ' + sum);
}

getAverage(100,40);
getSum(400,20);
