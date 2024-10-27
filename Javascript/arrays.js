/* Arrays are similar to object and value is stored as list*/

let myArray = ["123","Sunny","Male",41300, 1.45,true];

console.log(myArray);

console.log(myArray.length);
console.log(myArray[4]);

//Add values to Array
myArray.push(10,4.5,false);
console.log(myArray.length);

console.log(myArray.unshift(12,45)) //Adds value to start of array
console.log(myArray.push('end','of')); //Adds value to end of array

//Remove value from Array
myArray.pop() //Removes last element from Array
myArray.shift() //Remove first element from Array

console.log(myArray);

//If we us pop() in an empty array it returns undefined value
let myArray1 = [];
console.log(myArray1.pop());

//Shift()
let myArray2 = [1,23,4,67,false];
console.log(myArray2.shift()); //Removes and Returns first element of an Array
console.log(myArray2); 

//Concat used to merge two or more arrays
let myArray3 = [1,2,3,4];
let myArray4 = [5,6,7,8];

console.log(myArray3.concat(myArray4));

//Slice() and splice()
console.log(myArray4);

//console.log(myArray4.slice(2)); //Removes all the elements till index 2

console.log(myArray4.slice(0,2)); //Removes all the elements after index 2

let myArray5 = [5,6,7,8];
console.log(myArray5.splice(2,0,'sunny')); //Remove 0 element before index 2 and insert sunny
console.log(myArray5);

console.log(myArray5.splice(2,0,'G',"Gaikwad")); //Remove 0 element before index 2 and insert G & Gaikwad
console.log(myArray5);

console.log(myArray5.splice(0,0,false)); //Remove 0 element at index 0 and insert false
console.log(myArray5);

console.log(myArray5.splice(myArray5.length,0,true)); //Remove 0 element at last index and insert true
console.log(myArray5);

console.log(myArray5.splice(3,1)); //Remove 1 element at 3rd index
console.log(myArray5);

console.log(myArray5.splice(1,3)); //Remove 3 elements from 1st index
console.log(myArray5);

console.log(myArray5.splice(3,1,100)); //Remove 1 element at 3rd index and insert 100
console.log(myArray5);

console.log(myArray5.splice(-2,1)); //Remove 1 element starting from -2 index
console.log(myArray5);

console.log(myArray5.splice(1)); //Remove all the elements starting from index 1
console.log(myArray5);

let myArray6 = [1,2,3,4,5,6,6];
/*
  Returns index of value, counts from left to right
  If not value found it returns -1
  in case of multiple occurance it returns index of first occurance
*/
console.log('Index of 4', myArray6.indexOf(4)); 
console.log('Index of 11' , myArray6.indexOf(11)); 
console.log('Index of 7', myArray6.indexOf(6)); 