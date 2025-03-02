//truthy falsy value concept//

//falsy value
//false,0.-0,BigInt,0n,"",null,undefined,NaN

//truthyvalue//
//true,1,"0",'false'(string ke andr hai)," ",[],{},function(){},
const useremail=[]
if(useremail){
    console.log("get");
    
}
else{
    console.log("not get");
    
}

if(useremail.length===0){
    console.log("array is empty");
    
}
//object aa gaya to kaise check ki ye empty hai ki nahi//
const emptyobj={}
// Object.keys(emptyobj)==return an array ...length is property so not use length()....
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
    
}

//NULLISH COALESCING OPERATOR(??):null,undefined keywork ke upar dekhna hai//
let val1;
val1=5??10
console.log(val1) //5//

val1=null??10 //null ke basis pe define
console.log(val1)

val1=undefined??15 //15
console.log(val1)

val1=null??20??10 //firstvalue wahi assign//
console.log(val1)

//ternaryoperator//
//condition?true:false;
const iceteap=100
iceteap>=80?console.log("lessthan80"):console.log("greater than 80")
