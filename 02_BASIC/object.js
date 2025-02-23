//object ko declare karne ke 2 way ek literal ki tarah and ek constructor ki tarah//
//through constructor//
Object.create
//concept of singleton//
//singleton ka matlab koi bhi constructor se aap banate hai to singleton object banta hai(it means yani ek hi object hai)
//jab bbhi hum literals ki tarah declare karte hai to singleton nhi banta hai//
//constructor se banega to hamesa singleton bnega//

//object literals// in this key and value both defined//
const mysymbol=Symbol("key1")
const  jsUser={
    name:"neelesh",
    "full name":"Neelesh Kumar",
    [mysymbol]:"mykey1",  // use square bracket//
    age:19,
    location:"lucknow",
    email:"neelesh18903@google.com",
    isLoggedin:false,
    lastLoginday:["Monday","Saturday"]
}
// // access using dot operator//
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);//yaha pe aap dot ke dwara not acces isliye dono method janna sahi hota hai//

// ///symbol declare//
// //interview ques--ek symbol lo object key me add kro and print karke dikha do//
// console.log(jsUser.mysymbol); // but iska datatype string hai hame symbole ki tarah use karna tha to ek tarila use sqare bracket-->[mysym]
// console.log(jsUser[mysymbol]); // is tarah sybol ko print karana hai//

// //value change//
// jsUser.email="shubham.com";

// //value change na kar paye koi//
// //freeze karo//
// Object.freeze(jsUser)
// jsUser.email="nk123@gmail.com"
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello js user");
}
console.log(jsUser.greeting);// function anonymus//
console.log(jsUser.greeting()); // a gya output

jsUser.greetingtwo=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());







