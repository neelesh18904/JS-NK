// // OBJECT LITERALS-LITERALLY EK OBJECT BANANA//
// // Object Literal is collection of method and properties//
// const user={
//     username:"neelesh",
//     logincount:8,
//     signedIn:true,
    
//     getUserDetail:function(){
//     //    console.log(`USERNAME: ${username}`) // in this use pata hi nhi hai kaun se username ki baat kar rhe ho//
//        console.log(`USERNAME: ${this.username}`)
//        console.log(this) //cureent contect jitn akuch meamory me hoga wo dega//
//        // console.log("got user details from DB");
//     }



// }

// const user2={
//     username:"neelesh",
//     logincount:8,
//     signedIn:true,
    
//     getUserDetail:function(){
//     //    console.log(`USERNAME: ${username}`) // in this use pata hi nhi hai kaun se username ki baat kar rhe ho//
//        console.log(`USERNAME: ${this.username}`)
//        console.log(this) //cureent contect jitn akuch meamory me hoga wo dega//
//        // console.log("got user details from DB");
//     }



// }
//hr baar repeeat krna not possible//usko rokne ke liye constructor function aate hai//


// console.log(user.username )
// console.log(user.getUserDetail())
// console.log(this)-->/ global context(not functional context) me print karau to output is--{}
//by default when browser me run hota hai to globalcontext me bhut saari chize rkhi hai--window


// const promiseone=new Promise() // new keyword is constructor function ye allow ki ek hi object literal se multiple instances bana sko//naya context banane ke kaam aata hai jise hm constructor function bolte hai//

function users(username,logincount,isLoggedIn){
    this.username=username
    //left wli value hmara variable hai right side pass krke de rhe ho//
    //or myussername=username//
    this.logincount=logincount;
    this.isLoggedIn=isLoggedIn;

    //method//
    this.greeting=function(){
        console.log(`we;come ${this.username}`)
    }
    return this //object passon ye ab poori vALUE KO ACCESs kr skta hai//

}
// const userone=users("neelesh",12,true)
// const usertwo=users("chai aur code",11,false)
// console.log(userone) //usertwo kbhi print hi nhik iya but usertwo value overwrite kr di saari ki saari//

//isliye baar baar new keyword use
//constructor fucntion har baar ek nyi instances deta hai//
//nayi copy deta hai//

//use newkeyword to avoid this//

const userone= new users("neelesh",12,true)
const usertwo=new users("chai aur code",11,false)
// console.log(userone)
console.log(userone.constructor) //it means [Function :users]-->
//constructor properties kuch nhi refernece hoti hai khud ke baare me is user ke baare me//
// console.log(usertwo)

//constructor function har baar naya instances deta hai//
//return this na krta tbbhi value milti//impliciltly define hota hai//

//jaise new keyword use krte hai to sbse pahle emptyobject create hota hai--jisko instance bola jata hai
// step 1-new object create hota hai//
// step 2-constructor function call hota hai new keyword ke karan(argument pack and given)
// step 3-this keyword me jo bhi argument wgyra likhe hai inject ho jata hai//
// step 4-apko mil jata hai function ke andr//

