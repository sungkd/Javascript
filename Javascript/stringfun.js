//Useful string literals

let sent = "  A new string sentence   ";
console.log(typeof sent);

//check if string includes any value
let sent1 = sent.includes('new');
console.log('Includes ', sent1); //It will return true or false value.

//Check if string starts with particular letter
let sent2 = sent.startsWith('A'); //takes whitespace into consideration
console.log('Starts ' , sent2); //It will return true or false value.

//Check if string ends with particular letter
let sent3 = sent.endsWith('A'); //takes whitespace into consideration
console.log('Ends ' , sent3); //It will return true or false value.

//Replace value of string
let sent4 = sent.replace('new', 'short');
console.log('Replace ', sent4); //It will return updated sentence

/* Remove whitespaces from start and end
*  sent.trimStart() -> removes whitespace from start of the string
*  sent.trimEnd -> removes whitespace from end of the string
*  sent.trim() -> removes whitespace from start and end of the string 
*/
let sent5 = sent.trim();
console.log('Trim ', sent5);

//Split sentence and output it to an array
let splitsent = sent.split(' '); //Here ' ' is the delimeter
console.log('Split ', splitsent);

//Convert string to lower and upper case
let lowercase = sent.toLowerCase();
console.log('Lower Case', lowercase);

let uppercase = sent.toUpperCase();
console.log('Upper case', uppercase);

let fname = `Sunny`;
let lname = `Gaikwad`;

let fullname = fname + ' ' + lname;
console.log('fullname', fullname);

/*Since we have used backtick to store the values 
we can use another method to concatenate the string*/
let fullname1 = `${fname} ${lname}`;
console.log('fullname1',  fullname1);