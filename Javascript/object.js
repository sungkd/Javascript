/* Reference data type 
   1. Object
*/


/*Object datatype allows us to store more than one datatype*/

let myObject = {
    name: 'Sunny Gaikwad',
    age: 29,
    Gender: "Male"    
};

console.log(myObject);

/*Typeof Operator is used to return datatype of the operand

Operand can be a variable or value

For null typeof returns Object but its not Object
Its due to early days os JS and kept the same for
backwards compatability
*/

console.log(typeof(myObject));

// Access and Re-assign values in an object

console.log(myObject); //To get entire data
console.log(myObject.age); //To get value of specific property of object
console.log(myObject['name']);  //To get value of specific property of object

myObject.age = 30; //Re-assign value of age
myObject['name'] = 'Sunny G'; //Re-assign value of age 

console.log(myObject.age);
console.log(myObject.name); 

let tempValue = "name";
console.log(myObject[tempValue]); //To get value of specific property of object

//Add key value pair to existing object
console.log(myObject);
myObject.address = "Mumbai"; //Use Dot Notation
console.log(myObject);

myObject['newfield'] = 'Bracket Notation'; //Bracket Notation
console.log(myObject);

Object.assign(myObject,{newfield1: "Object Assign Method"}); //Object Assign Method
console.log(myObject);

//Object Define Property Method
Object.defineProperty(myObject, "newfield2", {
    value:"Ojbect Define Property Method",
    writeable: true
});
console.log(myObject);

//Object.entries() & Object.fromEntries()

const myObject1 = Object.entries(myObject); //Converts Object to array
myObject1.push(['newfiled3','Add new value to array']); //Add new value to array
myObject = Object.fromEntries(myObject1); //Convert array back to object.
console.log(myObject);

//Remove key value pair 

delete myObject.newfiled3 //Delete Keyword
console.log("delte" , myObject);

//Use destructor and rest method - Not working ???
console.log("beforedelete ", myObject);
const { newfield1, ...rest } = myObject;
console.log("delete-1", myObject);

//Object.entries() & Object.fromEntries()

const myObject2 = Object.fromEntries(
    Object.entries(myObject).filter(([key]) => key !== "newfield1"));
console.log(myObject2);

//Omit Method - Not working??

//myObject2 = _.omit(myObject2, 'newfield');
console.log(myObject2);


const myObject3  = {
    name:'Sunny',
    age:30,
    Wt:100
};

//access records from object
for (const keys in myObject3){
    console.log('for-in', myObject3[keys]);
}

/*Object is a method in JS and keys is it's property similar to array.length
*/
const key = Object.keys(myObject3); 
console.log('object-key', key); //Outputs keys in an array

const value = Object.values(myObject3);
console.log('object-val',value); //Outputs values in an array

const entries = Object.entries(myObject3);
console.log('object-entry',entries); //Outputs key-value pair in array

/* Below code snippet creates two objects with same reference
   If we change value in one object, value in other object 
   will be changed */

let a = { value: 20};
let b = a;

b.value = 30;
console.log('object-a',a);
console.log('object-b',b);

/*To overcome above issue we clone the second object using Object.assign method*/
let c = {value: 20};
let d = {};

Object.assign(d,c); //This will clone object c to d but both will be independent

d.value = 40;

console.log('object-c',c);
console.log('object-d',d);
