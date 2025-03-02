//for loop //
for (let i= 0; i< 10;i++){
    const element = i;
    if(element==5){
        console.log("5 is best number")
        
    }
    console.log(element);
    
    
}

for (let i= 0; i<10;i++){
    // const element = array[i];
    console.log(`outervalue :${i}`);
    
    for (let j= 0; j<10;j++){
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        console.log(i+'*'+j+'='+ i*j);
        
        
        
    }
    
}
// let myarray=["A","B","C"]
// for (let index = 0; index < array.length; index++) {
//     const element = myarray[index];
    
// }

// break and continue//
for (let index = 0; index <20;index++){
    if(index==5){
        console.log("detected 5");
        break;
        
    }
    const element = array[index];
    
}
for (let index = 0; index <20;index++){
    if(index==5){
        console.log("detected 5");
        continue;
        
    }
    const element = array[index];
    
}