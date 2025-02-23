//DATES//
// let mydates=new Date()
// console.log(mydates);
// console.log(mydates.toString());
// console.log(mydates.toLocaleString());
// console.log(mydates.toDateString());
// console.log(mydates.toLocaleDateString());
// console.log(mydates.toLocaleTimeString());
// console.log(typeof mydates);

// //specific date declare//
// let mycreateddate=new Date(2023,1,23)
//  let mycreateddate=new Date(2023,0,23,5,3)
// console.log(mycreateddate.toString()); // Month 0 se start hote hai in JS// Mon Jan 23
// // console.log(mycreateddate.toLocaleString()); // 1/23/2023 type//

// specifically MM DD karna ho format///
// // let mycreateddate=new Date("2023-00-24")
let mycreateddate=new Date("02-24-2025")
// console.log(mycreateddate.toDateString());

// exact timestamp//
//quizzes,poles//
// let myTimeStamp=Date.now()
// console.log(myTimeStamp); // long digit in miliseocnd//
// console.log(mycreateddate.getTime());
// console.log(Math.floor(Date.now()/1000)); //convertinto second// use floor to avoid decimal//

let newdate=new Date()
// console.log(newdate);
// console.log(newdate.getDay());

newdate.toLocaleString('default',{
    weekday:"long"
})
console.log(newdate);














