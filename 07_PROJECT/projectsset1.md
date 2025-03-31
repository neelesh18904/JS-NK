# Project related to DOM

# project link

# solution code

## PROJECT 1 :COLOUR SWITCHER

``` javascript
// button ko lena hai pahle//
//body ko select//
//button ko select through id or class bdiya ye rhega ki ek sath select taaki loop lga sku//

//buttone select karne hai saare buttone select karna hai to queryselectorall lo//

const buttons =document.querySelectorAll('.button')
const body=document.querySelector("body") //tag name direct

//jab bhi aap event click krte hai us event ko aap function me le skte hai and uske sath kuch activity kr skte hai//

//nodelist mili hai html collection nhi to iske sath foreach lga skta hu//

buttons.forEach(function(button){
  console.log(button);
  //har ek button pe event listerner lgayenge//
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target) //likhne se pta lg jata hai ki ye event a kaha se rha hai//
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }

  })
})


```

## Project 2:BMI CALCULATOR
```javascript

//form ko pura select krna pdega--form ko pura select bcoz iske andr hi submit button hai//
//yha pe click wla event nhi hai form hai submit wla event hai//
 //poora form a gya hai//
const form =document.querySelector('form')

//this usecase give me empty value//
// const height= parseInt(document.querySelector('#height').value) //

///form jab bhi submit hota hai ye to posttype se submit hota hai ya to gettype se submit hota hai lekin jb bhi submit hota hai to  url me server me chali jaati hai use hme rokna pdega hm server pe to bhej nhi rhe hai jo default function hai usko rok lo usko rokene ke liye event ke upar apko method milta hai/

form.addEventListener('submit',function(e){
  e.preventDefault()

  //value chahiye heigth and weight//
  //ab hr baar jb form ke andr event aaye to un value ko select kre//

 const height= parseInt(document.querySelector('#height').value) //value milti hai string me parseInt() string to int//
 const weight= parseInt(document.querySelector('#weight').value)
 const results=document.querySelector('#results') //parseInt ki not req ek elemtn hai//
 //check taaki fate na code//
 if(height==='' || height<0 ||isNaN(height)){
   results.innerHTML=`please give valid height ${height}`;
 }
//  results.innerHTML=`${height}`;
else if(weight==='' || weight<0 ||isNaN(weight)){
  results.innerHTML=`please give valid weight ${weight}`;
}
else{
  const bmi=(weight/((height*height)/10000)).toFixed(2);
  results.innerHTML=`<span>${bmi}</span>`;
  if(bmi<18.6){
    results.innerHTML=`<span> Under Weight:${bmi}</span>`;
  }
  else if(bmi>18.6 && bmi<24.9){
    results.innerHTML=`<span> Normal Weight:${bmi}</span>`;
  
  }
  else{
    results.innerHTML=`<span> Over Weight:${bmi}</span>`;
  }
}




});



```
## Project 3:DIGITAL CLOCK
```javascript

// ab time kaise display karaye time displaye karane ke liye kuch chahhiye clock ko le refernce and time display karao//

const clock=document.getElementById('clock')
//or//
// document.querySelector('#clock')

//clock display karani hai digital clock hai har second pe change honi chahiye//
//clock easy way me le skte hai//
// let date=new Date()
// console.log(date.toLocaleTimeString()); //ye console pe a gya and refersh update it//

//but i want that date har bar run ho and update hota rhe//

//method jo her moment pe run ho-->cron job work on server//

//SETINTERVAL METHOD-->javascript ke event control karta hai setinterval method method mujhe de dijiye and interval bta dijiye kitne interval baad mai isko continuously run krta jaunga//

setInterval ( function (){
  let date=new Date();
  // console.log(date.toLocaleTimeString()); mujhe console ke andr nhi chalani thi //
  //mujhe uska doc update krna tha//
  clock.innerHTML=date.toLocaleTimeString();

},1000)


```
## Project 5-Changing BG Color on STOP/START
```javascript

//random colour kaise generate karu//
//random colour value generate random hex values se//
const randomcolour=function(){
  const hex="0123456789ABCDEF" //0sestarttill9//
  let color='#'
  for(let i=0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)]

  }
  return color;
   
}
// console.log(randomcolour()) //0 to 16
//start stop elemnet//
let intervalid;
const startchangingcolor=function(){
  if(!intervalid){
    intervalid=setInterval(changeBG,1000);

  }

  function changeBG()
  {document.body.style.backgroundColor=randomcolour()} // but ye continuously nhi chal rha hai//

};
document.querySelector("#start").addEventListener('click',startchangingcolor)

const stopchangingcolor=function(){
  clearInterval(intervalid) 
  //scope problem so intervalid declared global
  intervalid=null;

}
document.querySelector("#stop").addEventListener('click',stopchangingcolor)



```
## Project 6-KEYBOARD CHECK
```javascript


const insert=document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
    <div class='color'>

    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key===" "?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div
  `

})


```
## PROJECT 6-