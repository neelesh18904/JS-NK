//if stattement//

//if(condition){} condition should be true//
//comparision..<,>,<=,>=,==,!=,===(type bhi check),!==

// const temp=41
// const isuserloogedin=true
// if(temp<50){
//     console.log("less than 50");
    
// }
// else{
//     console.log("temp greater than 50");
    
// }
// console.log("done");

// if(isuserloogedin){

// }
// if(2==="2"){
//     console.log("heelo neelesh");
    
// }

// const score=200
// if(score>100){ 
//     const power="fly" // when use var=power bahar wala bhi chal jayega// iska scope completely global//
//     console.log(`userpower:${power}`);
    
// }
// console.log(`userpower:${power}`); // here power is not defined//

//shorthand notation//

const balance=1000
if(balance>500) console.log("test");// implicit scope//

// if(balance>500) console.log("test"),console.log("test2");// implicit scope// is tarah nahi karna hai//

//nested loop//
// if(balance<500){

// }
// else if(balance<750){

// }
// else if(balance<950){

// }
// else if(balance<1050){

// }
// else{

// }

const userloggedin=true
const debitcard=true
const loggedinfromgoogle=false
const loggedinfromemail=true
if(userloggedin && debitcard){
    console.log("allow buy course");
    
}
if(loggedinfromemail||loggedinfromgoogle){
    console.log("loggedin");
    
}



