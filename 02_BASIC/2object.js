//object ko declare karne ke 2 way ek literal ki tarah and ek constructor ki tarah//
//through constructor//
Object.create
//concept of singleton//
//singleton ka matlab koi bhi constructor se aap banate hai to singleton object banta hai(it means yani ek hi object hai)
//jab bbhi hum literals ki tarah declare karte hai to singleton nhi banta hai//
//constructor se banega to hamesa singleton bnega//

// object literals// in this key and value both defined//
// const mysymbol=Symbol("key1")
// const  jsUser={
//     name:"neelesh",
//     "full name":"Neelesh Kumar",
//     [mysymbol]:"mykey1",  // use square bracket//
//     age:19, 
//     location:"lucknow",
//     email:"neelesh18903@google.com",
//     isLoggedin:false,
//     lastLoginday:["Monday","Saturday"]
// }
// // access using dot operator//
// console.log(jsUser.email);// jab dot ke dwara to string lena no req//
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);//yaha pe aap dot ke dwara not acces isliye dono method janna sahi hota hai//

// ///symbol declare//
// //interview ques--ek symbol lo object key me add kro and print karke dikha do//
// console.log(jsUser.mysymbol); // but iska datatype string hai hame symbole ki tarah use karna tha to ek tarila use sqare bracket-->[mysym]
// console.log(jsUser[mysymbol]); // is tarah sybol ko print karana hai//

// //value change//
// jsUser.email="shubham.com";

// // //value change na kar paye koi//
// // //freeze karo//
// Object.freeze(jsUser)
// jsUser.email="nk123@gmail.com"
// console.log(jsUser);

// jsUser.greeting=function(){
//     console.log("hello js user");
// }
// console.log(jsUser.greeting);// function anonymus//function not execute only refer//
// console.log(jsUser.greeting()); // a gya output

// jsUser.greetingtwo=function(){
//     console.log(`hello js user,${this.name}`); // same object ko reference//use this keyword//
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());



//object2//

//how object declare through singletoon and constructor//

// const tinderusers=new Object() // ye ek singleton object hai//
// const tinderuser={} // non singleton object//
// tinderuser.id="abs"
// tinderuser.name="sam"
// tinderuser.isLoggedin=false

// console.log(tinderuser);
// const regulareuse={
//     email:"neelesh18903@gmail.com",
//     fullname:{
//         userfullname:{
//             fname:"hitesh",
//             lname:"kumar"
//         }
//     }
// }
// console.log(regulareuse.fullname.userfullname.fname);

// how object combine// through assign
// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj3={5:"e",6:"f"}
// // const obj3={obj1,obj2}
// // console.log(obj3);// same array wali problem hame aise nhi merge karna hai//
// // const obj3=Object.assign(obj1,obj2); // ek aur way optinal parameter//
// // const obj4=Object.assign({},obj1,obj2,obj3) // jitni value hogi sb combine ho jayegi// ek target ek source//
// // console.log(obj4);

// const obj4={...obj1,...obj2,...obj3}//spread//
// console.log(obj4);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));//in sab ka datatypr array hai//
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser)); //har ek key value pair ko array bana dia jata hai//
// //value not exist so ask//
// console.log(tinderuser.hasOwnProperty('isLoggedin'));


//destructuring//
const course={
    coursename:"hindi",
    price:"999",
    cinstructor:"hites"
}
//course.cinstructor//
const {cinstructor:ins}=course
// console.log(cinstructor);
console.log(ins); //object destructure//

const nav=({company})=>{ // curly bracket k syntax --destructuring//

}
nav(company="nk")

//API CONCEPT//
//APNA KAAM KISI DUSRE PE DAAL DO// MENU CARD//IS AN API//
//VALUE AATI HAI BACKENED SE UN VALUE KO KAISE LIKHTE HAI--API//
//PAHHLE KE TIME ME VALUE ATI THI XML STRUCTURE MEWO COMPLEX//
//AB VALUE AATI HAI JSON FORMAT ME //
//object hi json hai but object ka koi name nhi hai//
// {
//    name:"nk",
//    cname:"hindi",
//    price:"free"
// }
// {
//    " name":"nk",
//     "cname":"hindi",
//     "price":"free"
//  } 

 //key value both are sting in JSON//
//actully jab json se api call hoti hai to milta kya hai//
//some api get in array format//
// [
//    {},
//    {},
//    {}
// ]
















