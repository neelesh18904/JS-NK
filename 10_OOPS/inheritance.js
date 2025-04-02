class user{
    constructor(username){
        this.username=username;
    }
    logme(){
        console.log(`username is ${this.username}`)
    }

};

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;

    }
    addcourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
const chai=new Teacher("chai","chai@gmail.com","123")
chai.addcourse();
const masalachai=new user("masala")
// masalachai.addcourse() // access nhi hai addcourse ka iske pass//
masalachai.logme()


console.log(chai===masalachai) //ek nhi hai false hai//
console.log(chai===Teacher) // false//
// ye instance hai hai exact not equal//
console.log(chai instanceof Teacher);
console.log(chai instanceof user);