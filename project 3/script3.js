const clock=document.querySelector("#clock")
const date=document.querySelector("#date")


setInterval(()=>{
    const dat=new Date()

clock.innerHTML=dat.toLocaleTimeString()
date.innerHTML=dat.toLocaleDateString()
},1000)