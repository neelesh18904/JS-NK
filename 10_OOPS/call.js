function setusername(username){
    this.usernmae=username  
    console.log("called");
}
function createuser(username,email,password){
    // setusername(username)
    // setusername.call(username) 
    setusername.call(this,username) //this ki kahani context pass krne ki//
    //refernece hold krke rkhna hai isliye .call use//

    this.email=email
    this.password=password
}
const chai=new createuser("chai","google.com","123")
console.log(chai); //email nd passowrd comees///username not print//
//no method call nhi to usernam milta//
//js me explictly method hote hai so that function ko call kr ske//
//.call
