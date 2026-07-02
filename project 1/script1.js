const buttons=document.querySelectorAll(".btn")
const body=document.querySelector("body")


buttons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        body.style.backgroundColor=e.target.id
    })
})