const user={
    username:"neelesh",
    price:999,
    welcomemessage:function(){
        console.log(`${this.username},welcome to website`); //current context ko refer//
        // console.log(this);
        
    }



}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage() // value hardcore nhi ki this maine kaha tha ki jo bhi current context us current context ke andr jo username ki value hai usko print karo//

// console.log(this);
// function chai(){
//     let username="shubham"
//     console.log(this.username);
    
// }
// chai()

///function declare arrow function//

//not work--undefined
// const chai=function(){
//     let username="shubham"
//     console.log(this.username);

// }
// chai()

const chai= ()=>{
    let username="shubham"
    console.log(this.username); // undefined
    console.log(this); // {}
    
    
}
chai()

//arrow function//
//basic syntax--> const addtwo=()=>{}
// const addtwo=(num1,num2)=>{
//     return num1+num2

// }
// addtwo(3,4) //not print
// console.log(addtwo(3,4));

//implicit return -braces parenthesis remove --arrowfunction another way 
// const addtwo=(num1,num2)=> num1+num2

// curly braces me rep return keyword likhna padega//
const addthree=(num1,num2,num3)=>(num1+num2+num3)
console.log(addthree(3,4,5));
//implicit return when return keyword use//
//explicit return when return keyword return//

const addtwo=(num1,num2)=>({username:"neelesh"}) // parenthisesis lagaoge tbhi value ayegi when only curlybraces not come value//
console.log(addtwo(3,4));

const myarray=[2,4,5,6,7]
myarray.forEach(function(){})

myarray.forEach(()=>{})
   


