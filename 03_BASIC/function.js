// console.log("N");
// console.log("E");
// console.log("E");
// console.log("L");
// console.log("E");
// console.log("S");
// console.log("H");

//function definition//
function saymyname(){
console.log("N");
console.log("E");
console.log("E");
console.log("L");
console.log("E");
console.log("S");
console.log("H");
}

//function refernce//
//saymyname-->function reference//
//saymyname()-->function execution//
// saymyname()  //javascript ke andr type dene ki no requirement//

// function addtwonumber(number1,number2){ //function ke definition banate hai to jo aap input lete hai called parameter//
//      console.log(number1+number2);
// }

addtwonumber(5,2) //7
addtwonumber(5,'4') // 54
addtwonumber(3,'a') //3a
addtwonumber(3,null) //3 //function ko jab aap call karate hai tab jo value pass usko bolte hai argument//
//in js variable ke ande bhi store//
// const result=addtwonumber(3,5)
// console.log("result:",result); // result ke andr value undefined kaise gayi// 

function addtwonumber(number1,number2){ //function ke definition banate hai to jo aap input lete hai called parameter//
    // let result=(number1+number2);
    // return result;
    return number1+number2
}
const result=addtwonumber(3,5)
console.log("result:",result);

function loginusermessage(username="nk"){
    if(username===undefined){ // username=undefined hai wo bydefault false manta hai// if(!username)
        console.log("please enter a username");
        return 
        
    }
    return `${username} just logged in` // if this line not executed never to return keyword pahle laga do//
}
console.log(loginusermessage("Neelesh"));
console.log(loginusermessage(""));//just logged in//
console.log(loginusermessage());//value not passed jab pass nhi karte to aati hai --undefined just logged in//
console.log(loginusermessage("shubham"));


/// function-2//
//shopping cart user add--pata nahi hota hai kitna item ane wale hai//
//kab pata na ho ki kitne argument ane wale hai //

// function calculateprice(num1){
//     return num1

// }
function calculateprice(...num1){
    return num1

}
console.log(calculateprice(200,400,500)) // only 200 value print ho rhi hai//1st item comes but not other isko solve krne ke liye rest operator
//rest operator OR spread operator ... // apne aap arrat ke andr add//
function calc(val1,val2,...num1){
    return num1
}
console.log(calc(200,400,500,100)); //200 tke val1,400 take val2

const user={
    username:"neelesh",
    price: 199
}
function handelobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handelobject(user)
//direct object pass//
handelobject({
    username:"shubhamkumar",
    price:900
})
//how array pass///
const mynewarray=[200,400,100,600]
function returnsecvalue(getarray){
    return getarray[1];
}
console.log(returnsecvalue(mynewarray));
console.log(returnsecvalue([200,600,1000]));
