// ye sara sb kuch ES6 ke baad//

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptpasswod(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }

};
const chai=new user("chai","chai@gmail.com","123")
console.log(chai.encryptpasswod());
console.log(chai.changeusername());

//BEHIND THE SCENE//

