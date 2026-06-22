const buttons= document.querySelectorAll('.btn');
const body=document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
       switch(e.target.id){
        case 'red':
            body.style.backgroundColor='red';
             break;
        case 'green':
            body.style.backgroundColor='green';
             break;
        case 'blue':
            body.style.backgroundColor='blue';
             break;
        case 'grey':
            body.style.backgroundColor='grey';
             break;
       }

    })
})