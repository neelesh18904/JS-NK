 function mulby5(num){
    return num*5

 }
 mulby5(5);
 //but ye na kru ye kru to//
 mulby5.power=2 //declare to function kia hai ye dot acces to object ke sath lgta hai to kya function bhi ek object hai haa ji//
 console.log(mulby5(5))
 console.log(mulby5.power);
 console.log(mulby5.prototype);
 //actully me ye jo prototype hota hai ye kuch method nhi uske sath sath kuch internal properties bhi deta hai

function createuser(username,score){
    this.username=username
    this.score=score
}
createuser.prototype.increment=function(){
    this.score++ // jisne bhi bulaya hai waha jao//
}
createuser.prototype.printme=function(){
    console.log(`scoreis${this.score}`);
}
// const chai=createuser("chai",25)
// const tea=createuser("tea",250)
//ye code nhi chl rha hai fucntion se value transfer kari to btaya nhi additonal properties aayi hai//
//ye btane ka saara kaam new keyword krta hai//

const chai=new createuser("chai",25)
const tea= new createuser("tea",250)

//myarray.prototype.map()//
chai.printme()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
