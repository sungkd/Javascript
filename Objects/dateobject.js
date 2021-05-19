var currentDate = new Date();

document.write('Current Date \n ' + currentDate);
document.write("<br>");

var pastDate = new Date(2019, 01, 05 , 20,20,20);   //(Year, Month(start from 0), Date, Hours, Mins, Sec)
var futureDate = new Date(2025,01,05, 10,11,12);  //(Year, Month(start from 0), Date,Hours, Mins, Sec)


document.write( 'Past Date \n ' + pastDate);
document.write("<br>");

document.write('Future Date \n ' + futureDate);
document.write("<br>");


var birthday = new Date(1995, 01, 05, 17,30,00 );
var birthday1 = new Date(1995, 01, 05, 17,30,00 );


//Get Month (0-11 0 = Jan, 1 = Feb, .... 11 = Dec)
document.write("<br>");
document.write('Birthday Month is \n ' + birthday.getMonth());

//Get Full Year (YYYY format)
document.write("<br>");
document.write('Birthday Year is \n ' + birthday.getFullYear());


//Get Date (0 - 31 )
document.write("<br>");
document.write('Birthday Date is \n ' + birthday.getDate());

//Get Day of the week (0-6  0= Sunday, 1=Monday ..... 6= Saturday)
document.write("<br>");
document.write('Birthday Day is \n ' + birthday.getDay());


//Get Hours (0 - 23)
document.write("<br>");
document.write('Birth time is \n ' + birthday.getHours());

//Get Time - returns value in milliseconds since 1st Jan 1970 till the specified date
document.write("<br>");
document.write('Milliseconds \n ' + birthday.getTime());


/*Milliseconds are usually used to compare 2 dates */
if(birthday == birthday1 ) 
{
    document.write('<br>');
    document.write('Birthdays are equal');
}
else
{
    document.write('<br>');
    document.write('Birthdays are not equal');

}


if(birthday.getTime() == birthday1.getTime()) 
{
    document.write('<br>');
    document.write('Birthdays are equal Millisecond');
}
else
{
    document.write('<br>');
    document.write('Birthdays are not equal Millisecond');

}