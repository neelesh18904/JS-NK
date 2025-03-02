//IIFE//
//syntax-->(function definition)(executioncall)
//basic 
// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()

//iife matlab--jo fucntion immediately executed ho jaye and global scope ke pollution se problem hoti hai kai baar
//so jo global scope ke variable hai ukse pollution ko hatane ke liye IIFE used
(function chai(){
    console.log(`DB CONNECTED`);
    
})();

(()=>{
    console.log(`db connected two`);
    
})();

//named iife name hai function chai()//
(function aurcode(){
    console.log(`db connected twice`);
    
})();
// for IIFE end use semicolon//;use 
//1st code end use semicolon

//simple iife// parameter is tarah pass
((name)=>{
    console.log(`db connected two ${name}`);
    
})('shubham'); // parameter

//2 iife written use semicolon//
