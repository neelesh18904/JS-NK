# Project related to DOM

# project link

# solution code

## project 1

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