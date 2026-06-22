const form=document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const weight=parseInt(document.querySelector('#weight').value);
    const height=parseInt(document.querySelector('#height').value);
    const result=document.querySelector('#result');

    if(height == '' || height<0 || isNaN(height)){
        result.innerHTML='Please enter valid value height';
    } else if(weight == '' || weight<0 || isNaN(weight)){
        result.innerHTML='Please enter valid value weight ';
    } else {
        const bmi=weight / ((height/100) ** 2);
        if(bmi < 18.6){
            result.innerHTML=`Your BMI is: ${bmi.toFixed(2)} and you are underweight`;
        }
        else if(bmi >= 18.6 && bmi < 24.9){
        result.innerHTML=`Your BMI is: ${bmi.toFixed(2)} and you are in the normal range`;}
        else{
            result.innerHTML=`Your BMI is: ${bmi.toFixed(2)} and you are overweight`;
        }
    }


})