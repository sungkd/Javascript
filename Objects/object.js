console.log(this);

var myArray = new Array();
myArray[0] = 100;
myArray[1] = 200;

var myCar = new Object(); //Declared an object

//Defining properties in the object
myCar.maxSpeed = 50;
myCar.driver = 'Sunny';
myCar.status = function() { document.write('is driving'); };

//Another way of defining an object
var myCar2 = 
{
  maxSpeed: 100, driver: 'Sunny1' , status: function() { document.write(this.driver + ' is driving \n'); }
};

document.write(myCar.maxSpeed);
document.write("<br>");
document.write(myCar.driver);
document.write("<br>");
document.write(myCar.status() );

document.write("<br>");
document.write("<br>");

document.write(myCar2.maxSpeed);
document.write("<br>");
document.write(myCar2.driver);
document.write("<br>");
document.write(myCar2.status() );
