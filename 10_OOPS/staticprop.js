class user{
    constructor(username){
        this.username=username;

    }
    logme(){
        console.log(`username: ${this.username}`);
    }
    static createId(){
        return `123`
    }

};
const hitesh=new user ("hitesh")
console.log(hitesh.createId()) // kai baar bhut saari sitution hogi ki jaha pe is method ka access har use object ko nhi dena chahte hai jo is class se instance hua hai//use static

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
};
const iphone=new Teacher("iphone","123@gmail.com")
iphone.createId() // ye hone nhi dega statsic lgaye ho//