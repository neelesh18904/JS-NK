//scope ki baat start from let,const,var//
//block level scope global scope//

// let a=10
// const b=20
// var c=30
// var c=300--300 no print//
let a=100
if(true){
let a=10
const b=20
var c=30
console.log("inner",a);

}
console.log(a); // a is block space//
// console.log(b); // b is blokc space
console.log(c); //it is not blocked space//
//scope ke andr value nahi jani chahiye//

//nested scpe//
function one(){
    const username="neelesh"
    function two(){
        const website="yt"
        console.log(username);
        
    }
    // console.log(website); // isko not acces bada wala not acces chota wala ye to andr tha// ye yehi per error de diya to two() never executed
    // two() // when not call it is not executed//
    //in nested function child wala access parent function//
}
// one()

if(true){
    const username="nk"
    if(username=="nk")
    {
        const website="youtube"
        // console.log(username + website);
        
    }
    // console.log(website); not access
    
}
// console.log(username); idar username k scope nahi hai//

////==========INTRESTING CONCEPT=================/////////
console.log(addone(5)) // function declaration se pahle//
function addone(num){
    return num+1

}
// addone(5) //here only return not print//
addtwo(5) // // yah pe kiyta to yaha error aya//
const addtwo=function(nums){ // idr function declare ke sath variable me hold bhi kia hai//
    return num+2

}
// addtwo(5)
//consept comes hoisting function kaise declare and exexcution//

