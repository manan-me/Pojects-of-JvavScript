const height=document.querySelector("#height")
const weight=document.querySelector("#weight")

const result=document.querySelector("#result")
const weight_guide=document.querySelector("#weight-guide")

const calculate=document.querySelector("#calcbtn")

calculate.addEventListener("click",(e)=>{
    e.preventDefault()
if(height.value <=0){
    result.textContent="Enter a valid height" 
    return;   
}
else if(weight.value <=0 ){
    result.textContent="Enter a valid weight "
    return;   
            
        }

 const bmi = (weight.value * 10000) / (height.value * height.value);
    result.textContent = bmi.toFixed(2);

    if(bmi < 18.6){
            weight_guide.innerHTML="you are under weight , Abay kuch khaya pya karo"
    }
    else if(bmi > 24.9){
            weight_guide.innerHTML="you are over weight , Abay thora kam khaya pya karo"
    }
    else{
        weight_guide.innerHTML="Your weight is perfect , GYM wagera kya karo"
    }
    

})



