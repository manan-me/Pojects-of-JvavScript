const clock=document.getElementById("clock")

const date=document.getElementById("date");

setInterval(function(){
    let datee = new Date();
    clock.innerHTML = datee.toLocaleTimeString();
    date.innerHTML = datee.toLocaleDateString();
},1000)
