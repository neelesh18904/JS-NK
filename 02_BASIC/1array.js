//ARRAY//
//array wriiten in square bracket//

// JS collection of multiple item in sigle variable//
//JS array are resizable,mix of different datatype//
// acces through index concole.log(myArr[0])//
//zero based indexing//
//JS array copy operation create SHALLOW COPIES// 
//SHALLOW copy--same reference point original array me bhi change//
//DEEP copy--do not share the same reference//

//array declaration//

// let myArr=[ 0,1,2,3,4,5,"Neelesh",true] //element(number,string,boolean)
// let myarr=[ 0,1,2,3,4,5] 
// const myheros=["shaktimaan","naagraj"]
// // const myarr2=new Array(1,2,3,4)
// // console.log(myarr2[1]);

// //array method//
// // myarr.push(6)
// // myarr.push(7)
// // myarr.pop() // last element remove
// // myarr.unshift(9)// ye array ke startung me add ho jayenge and hm log ko ek ek shift karna pdega// time consuming if more value
// // myarr.shift() //age se delete karega-shift
// // console.log(myarr.includes(9)); // ye btateyega  ki value hai ki nahi
// // console.log(myarr.indexOf(1));


// // console.log(myarr);

// // const newarr=myarr.join() 
// // console.log(newarr); //0,1,2,3,4,5 change in to string with comma seperated//
// // console.log(typeof newarr);

// // console.log(myarr); //[0,1,2,3,4,5]

// //SLICE//
// console.log("A",myarr);
// const myn1=myarr.slice(1,3)
// console.log(myn1);

// console.log("B",myarr);

// //SPLICE// IN SPLICE LAST RANGE INCLUDE// but it not full ans when use slice same array hoga but when use splice method then jo portion tha nikal gaya hai//
// const myn2=myarr.splice(1,3) 
// console.log(myn2);
// console.log("C",myarr);

//SPLICE ORIGINAL ARRAY MANIPULATES//

const marvelhero=["A","B","C"]
const superhero=["a","b","c"]

//PUSH METHOD//
// marvelhero.push(superhero)
// console.log(marvelhero); // problem array ke andar array a gaya--array koi bhi data le leta hai usne to array ko bhi as a data le lia
// console.log(marvelhero[3][1]);

//CONCAT METHOD//
const allheros=marvelhero.concat(superhero)
// console.log(allheros); //PUSH exisiting array pe push   concat return in new array//

//another method--SPREAD METHOD//
const all_heros=[...marvelhero,...superhero] // ab sb spred by using ... ab wo array nahi raha usek ek ek element indivisual ho gaye hai//
// console.log(all_heros);// yaha kitni bhi value de sakte hai//

// const anotherarray=[1,2,3,[4,5,6,7],8,[9,10,[11,12]]]
// const realanotherarray=anotherarray.flat(Infinity) //sabhi array ko sath me koi depth ki jrurat nahi//
// console.log(realanotherarray);

//DATA SCRAPPING DATA SELECT FROM WEBPAGE TO WO DIFF FORMAT ME ATA HAI -STRING,OBJECT//

console.log(Array.isArray("NEELESH")); // no it is not array 
//then how to convert into array//
//vale given to array use Array.from()///

console.log(Array.from("NEELESH"));
//INTRESTING//
console.log(Array.from({name:"NEELESH"})); //it confused give mepty array apko bolna padega kiska array bnau key ka or value ka

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));















