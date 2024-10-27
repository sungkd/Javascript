let m1 = [
    { id: 1, name: 'Sunny'},
    { id: 2, name: 'Bunny'},
    { id: 3, name: 'Funny'},
    { id: 4, name: 'Honey'},
];

//Callback function to sort array alphabetically
m1.sort( (a,b) => {
    const lowercasea  = a.name.toLocaleLowerCase();
    const lowercaseab = b.name.toLocaleLowerCase();

    if (lowercasea < lowercaseab) return -1;
    if (lowercasea < lowercaseab) return 1;
    return 0;
}); 

console.log(m1);

//Check if all the numbers in array are even

/*
  .every() -> Checks if every element in the array pass the test
              implemented in the function. 
              Returns true if every element passes the test else false

  .some() -> Checks if atleast one element in the array pass the test
             implemented in the function. 
             Returns true if any element satisfies the condition else false              
*/
const numbers = [2,4,6,8,10];

const areAllEven = numbers.every(number => number % 2 === 0 );
console.log(`areAllEven: ${areAllEven}`);

const divisbleByTwo = [7,11,13,10];

const isDivisible = divisbleByTwo.some(divisbleByTwo => divisbleByTwo % 2 === 0);
console.log(`has even number: ${isDivisible}`);

/* .filter() -> Checks the condition, if it's satified the value is added to new array */
const filterNumbers = [,2,4,5,7,10,15,20,40];

const newNumbers = filterNumbers.filter(filterNumbers => filterNumbers % 2 === 0);
console.log(`newNumbers: ${newNumbers}`);

const employee = [
    {id: 1, name: 'Bunny', role:'Developer'},
    {id: 2, name: 'Funny', role:'Developer'},
    {id: 3, name: 'Hunny', role:'CFO'},
    {id: 4, name: 'Sunny', role:'CEO'},
];

const Developer = employee.filter(employee => employee.role == 'Developer');
console.log(Developer);


/* .map() -> used to update data and store in new array */
const orgNumber = [2,11,22,33,44];

const sqrNumber = orgNumber.map(orgNumber => orgNumber * orgNumber);
console.log(`Squared numbers: ${sqrNumber}`);

const emp = [
    {id: 1, name: 'Bunny', role:'Developer'},
    {id: 2, name: 'Funny', role:'Developer'},
    {id: 3, name: 'Hunny', role:'CFO'},
    {id: 4, name: 'Sunny', role:'CEO'},
];

const updateEmp = emp.map(emp => ({
    ...emp,
    email: "abc@gmail.com"
}));

console.log(updateEmp);

/* .reduce() -> used to combine value of accumulator and currentvalue
                We can send three parameters, third parameter is initial value 
                of accumulator
*/

const snumber = [3,5,8,10,3.45,10];

const sumofNum = snumber.reduce((accumulator,currentValue) => {
    return accumulator + currentValue
},0);

console.log(`sumofNumber: ${sumofNum}`);