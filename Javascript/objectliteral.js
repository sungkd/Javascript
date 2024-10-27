/* The function within the object is called as method*/
const dog = {
    name: "Sunny",
    breed: "Golden Retriever",
    age: 5,
    weight: 30,
    eat: function() {
        console.log("Chomp!!!");
    },
    bark(){
        console.log("Woof!!");
    }
}

/*Use function to return an object*/

function getDog (name,breed,age,weight) {
    return {
        name:name,
        breed:breed,
        age:age,
        weight:weight,
        eat(){
            console.log("Chomp!!");
        },
        bark(){
            console.log("Woof!!");
        }
    }
}

console.log(getDog("Gaikwad","Lab",4,12));


function Dog(name,breed,age,weight){
    // this = {};  this is internally assigned to object literal

    /* Constructor function is called 
       1. It create empty JS object 
       2. Sets a memory to points this keyword at empty object
       3. Returns this keyword 
    */

    //Add properties
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weight = weight;
    this.eat = function () {
        console.log("Chomp!!");
    }
    this.bark = function() {
        console.log("Woof!!");
    }

    //returns this keyword
}

const myDog = new Dog('Moti','Indie',7,15); //Instantiate constructor
console.log(myDog);