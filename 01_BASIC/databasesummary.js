// primitive dsta type-call by value
//7 types: String,Number,Boolean,null(empty ekdm khali not zero),undefined(value not defined variable and meamory space dedine),Symbol(kisi bhi value ko unique bananeke liye use symbol),BigInt.

// JS dynamically or staticalyy type languag ?--dynamically ye runtime me khud declare kis type k datatype hai//
// In Typescript--const score:number=100 yaha batana padta hai//

const score=100;
const scorevalue=1110.3
const isLoggedIn=false
const outsidetemp=null
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);// false;
const bignumber=45612879421n


//non primitive data type-reference type data type//
// Array,Objects,Functions

const heros=["shaktiman","naagraaj","dogo"]; // array square bracket and value give //
// curly braces ke andr object in key value pair//
let myobj={
    name:"Neelesh",
    age:22
}
const myfunction=function(){
    console.log("hello world");
}

// how kisi bhi value ka datatype pata kaie kare//
console.log(typeof myobj);

// NOTE//
//Number=>number
//String=>string
//Boolean=>boolean
//null=>object
//undefined=>undefined
//Symbol=>symbol
//BigInt=bigint

//all non PD
//Array=>objec
//Function=>function(object function)
//Object=>object