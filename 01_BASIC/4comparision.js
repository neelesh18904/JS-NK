//BASIC CONVERSION NO PROBLEM BOTH SIDE NUMBER//
// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2!=1);
// console.log(2==1);


//problem when same data type ko compare nahi karte hai//
console.log("2">1);// it ture bcoz js automatically convert this 2 into number when this type conversion happend then it not give predictable result//
// so make sure that when compare make sure that datatype same ho//TS NOT ALLOW//

console.log(null>0);//false
console.log(null==0);//false //comparision and greater than less than ka work differnt when compare then js convert null to 0//
console.log(null>=0);//true//0>=0 that's why true//

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined>=0);

// ALL ABOVE CODE CONVERSION AVOID CREAT CONFUSION//

//===//value and datatype both checked//
console.log("2"==2);//true
console.log("2"===2);//false datatype diff not conversion bcoz triple equal//






