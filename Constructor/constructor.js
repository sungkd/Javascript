var myCar = 
{
    maxSpeed: 100,
    driver: 'Sunny',
    status: 'driving'
};

class Car {
    constructor(maxSpeed, driver) {
        this.maxSpeed = maxSpeed;
        this.driver = driver;
        this.status = 'Not driving';
    }
}

var myCar1 = new Car(150,'Buuny');

document.write(myCar1.maxSpeed);
document.write(myCar1.driver);
document.write(myCar1.status);