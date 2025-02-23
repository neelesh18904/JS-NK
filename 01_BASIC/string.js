// const name="neelesh" // string declare 1//
const gamename=new String('shubham-sh') //decalre 2// behind the scene both object invoked//
// const repocount=50
// // console.log(name  + repocount + "vallue"); not use in this way//

// ///Use backticks//
// console.log(`hello my name is ${name} and my repocount is ${repocount}`); // string interpolation//

// console.log(gamename[0]);
// console.log(gamename.__proto__);
// console.log(gamename.length);
// console.log(gamename.toLocaleLowerCase());
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2)); // kis index pe kaun sa char hai// number pass//
// console.log(gamename.indexOf('u')); //kaun se char kis index pe hai//

// const newstring=gamename.substring(0,4) // not negative value//
// console.log(newstring);
// const anotherstring=gamename.slice(-13,3) // peche se bhi start// 
// console.log(anotherstring);


// trim method remove starting and end space//
const newStringOne="    NEELESH   "  //last ke and starting ke space nahi chahiye///
console.log(newStringOne);
console.log(newStringOne.trim());

// REPLACE//
const url="https://neelesh.com/neelesh%20kumar"
console.log(url.replace('%20','-'))

console.log(url.includes('neeelsh')) // koi chiz hai ki nahi//

// spilt based on conditon//

console.log(gamename.split('-')); // convert into array 2 string seperated by commas//




















