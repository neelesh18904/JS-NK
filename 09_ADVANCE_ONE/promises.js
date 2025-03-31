//prmoises ko kaise bnate hai//
const promisesOne=new Promise(function(resolve,reject){
    //do an async task//
   //DB CALL,Cryptography,network//
   setTimeout(function(){
    console.log('aync task is completete');
    resolve()
   },1000)


})

//ab promises ko consume karna hai//
promisesOne.then(function(){
    console.log("promise consumed")
}) //.then()-->direct connection with resolve  .then() ke andr ek callback milta hai ek function jo ki koi v kaam kr skte hai 
//but promises consumed aya hi nhi it means jo resolved hai then() ye connect hua hi nhi kabhi//
//when resolve() pass .then() connect

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("asyn task 2")
        resolve()

    },1000)
}).then(function(){
    console.log("async 2 is resolved");
})

//3rd prmises//
const promiseThree=new Promise(function(resolve,reject){
    //network se data aya ho usko v pass krna hai//
    setTimeout(function(){
        resolve({username: "chai aur code",email:"neelesh18903@gmail.com"})


    },1000)

})
promiseThree.then(function(user){
    console.log(user);
})  //resolve ke andr jo parameter pass kroge wo mujhe mil jata hai aise//

//4th promises//
const promisesfour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"neelesh",email:"neeleshe18903@gmail.com"})
        }
        else{
            reject("ERROR SOMETHING WENT WRONG")
        }

    },2000)
}) //error based chekcing that ki ye resolved hoga ki rejectd hoga//

//jow this promises consumed//
promisesfour.then((user)=>{
    console.log(user);
    return user.username

}).then((username) => {
    console.log(username)

}).catch(function(error){
    console.log("error");
}).finally(()=>console.log("the promises is resolved or rejected"))  // .then() krke value le lunga agar error aya to .catch() value le lunga//


//promisesfive//

const promisesfive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject("ERROR:JS WENT WRONG")
        }
    },1000)
})

//2nd way to consumed promises .then() ke alawa//
//asyncawait syntax//
// ye thodi der wait krta hai kaam ke hone ka if done then aage badha jayega otherwise whi error//

async function consumepromisFive(){
    const response=await promisesfive
    console.log(response)
} //async error ayega to wo handel nhi kar skta//
consumepromisFive()


async function consumepromisFive(){
   try {
    const response=await promisesfive
    console.log(response)
    
   } catch (error) {
    console.log("error happend:")
    
   }
} //async error ayega to wo handel nhi kar skta//
consumepromisFive()

// async function  getalluser(){
//    try {
//     const response=await fetch("url") //data comes in string//
//     const data= await response.json()
//     console.log(data);
    
//    } catch (error) {
//     console.log("E:",error)
    
//    }

// }
// getalluser()

//100% working code response.json() bhi time leta hai convert karane me to isko v await response.json() krna pdega

//above functon in .then() .catch()//

fetch('https://api.github.com/users/neelesh18904').then((response)=>{
    return response.json()

}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("error")
})