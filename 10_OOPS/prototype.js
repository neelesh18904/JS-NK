// let myname="neelesh"
// console.log(myname.length); //7
// let name="neelesh     " //13
// console.log(myname.truelength);
// //user want this is my length space excluded//
// console.log(myname.trim().length);
//agr bhut saari hoti string to alag likhte hai mai chahta hu ki saari string ke sath bydeafult properties a jaye jiska naam true length//
//properties nhu method banana hai//

let myhero=["thor","spiderman"]
let heropower={
    thor:"hammer",
    spiderman:"sling",
    getspiderpower:function(){
        console.log(`spidy power is${this.spiderman}`)
    }

}
Object.prototype.hitesh=function(){
    console.log(`neelesh present`)
}
heropower.hitesh()
myhero.hitesh()

//ab  array me power inject ki to kya ye object ke pass jayega///
Array.prototype.hyhitesh=function(){
    console.log(`hey hitesh`)
}
myhero.hyhitesh()
// heropower.hyhitesh() //heropower ke pass hyhitesh ka acces nhi hai//
//object ko pwer dia to sbhi object se hote hue jaate hai to sbko milegi 

//INHERITANCE//
const user={
    username:"chai",
    email:"google.com"
}
const teacher={
    makevid:true
}
const teachingsupport={
    isavailable:false
}
const tasupport={
    makeass:'js ass',
    fulltime:true,
    //object kolink//
    __proto__:teachingsupport
    
}

teacher.__proto__=user //teacher bhi user ki saari properties access//
//prototypal inheritance yhi hai ki aap kaise-->kisi aur ki properties ko acccess kar skte ho//
//new approaches//
//modern syntax//

Object.setPrototypeOf(teachingsupport,teacher)

//teachingsupport ko ye acces diya ki ye saari teacher ki properties apne me inject kr de//

//now mthode pe aate hai//
let anotherusername="chaiaurcode    "
String.prototype.truelength=function(){
    console.log(`${this}`) //chai aur code//anotherusername ke andr refernce chaiaur code ka tha//
    // console.log(`${this.name}`)
    console.log(`true length is: ${this.trim().length}`)
}
anotherusername.truelength()
"neelesh".truelength() //jisne call kiya usk aref//