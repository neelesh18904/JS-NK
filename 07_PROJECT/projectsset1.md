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

## project 2-BMI CALULATOR
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