// forof loop//
//array specific rule//

const arr=[1,2,3,4]
//kis object pe aap loop lagana chah rahe hai//

for (const num of arr ) {
    console.log(num);   
}

// string pe forof loop apply//

const greeting="hello world"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
    
}

//MAPS// //map is object// hold key value pair//remember original insertion order of the key//no duplicate value unique value
const map=new Map()
map.set('IN',"INDIA")
map.set('AM',"AMERICA")
map.set('FR',"FRANCE")
console.log(map);

//kaise loop lagate hai map pe//
for (const key of map) {
    console.log(key); // if key take  ek ek value saari sath a jayengi
}
for (const [key,value] of map) {
    console.log(key,'->',value); // if key take  ek ek value saari sath a jayengi

}

//object ke upar forof loop//
const myobject={
    'game1' : 'NFS',
    'game2' : 'spiderman'

}
// for (const [key,value] of myobject) {

//     console.log(key,'->',value); //it tell my object is not iterable//
// }

//object ko iterate karne ke dusre tarike hote hai//
const object={
    js:"javascript",
    rb:"ruby",
    cpp:"c++"
}
//object pe forof kaam nahi kar rha tha forin loop//
for (const key in object) {
    console.log(key); //keys to saari a gayi//
    console.log(object[key]);
    
}
for (const key in object) {
    console.log(`${key} for shortcut is for${object[key]}`);
    
   
}

const prog=["cpp","java","cbasic"]
for (const key in prog) {
    console.log(key); // 0,1,2 forof me seedhe value aati hai but in forin me key aati hai//
    console.log(prog[key]);
}

const mapp=new Map()
mapp.set('IN',"INDIA")
mapp.set('AM',"AMERICA")
mapp.set('FR',"FRANCE")
for (const key in mapp) {
    console.log(key); //reason nahi chala bcoz map is not iterable//
    
}


//object pe forin loop direct//
//array pe forof loop//

///// FOR EACH LOOP///
const coding=["js","ruby","java","cpp"]
// coding.forEach(  function (item){

// })  //kyuki callback function kaha gaya hai to function ka name nhi hota hata do kyuki ye function array ke andr chal rha hai to value ko as a parameter ke tarah leke ayega//
// coding.forEach( function (items){
//     console.log(items);
    
// })

//arrow fucntion//
// coding.forEach((val)=>{
//     console.log(val);
    

// })  //forEach(greeting=()=>{}) naam uda do and equal to//

// 
// function printme(items){
//     console.log(items);
    
// }
// coding.forEach(printme)



// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })

// ["","",""]....[{},{},{}]..//
//array ke andr object//

const mycoding=[
    {
        langaugename:"javascript",
        langaugefile:"js"

    },
    {
        langaugename:"java",
        langaugefile:"java"

    },
    {
        langaugename:"python",
        langaugefile:"py"

    }
]
mycoding.forEach((item)=>{
    console.log(item.langaugename);
    
})
//aray ke andr bject hai le liya access//




