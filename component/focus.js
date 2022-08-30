var bell = document.getElementById("bell")
var massage = document.getElementById("massage")

bell.addEventListener("click", ()=>{
    massage.classList.toggle("massage-toggle")
    bell.classList.toggle("bell_toggle")
    eddProfil.classList.toggle("blogProfil")

})
 var eddProfil = document.getElementById("eddProfil")
 var user = document.getElementById("user")

 user.addEventListener("click", ()=> {
    eddProfil.classList.toggle("eddproToggle")
    massage.classList.toggle("blogMassage")
    user.classList.toggle("user_toggle")
 })



//  setting
var toggleColor = document.querySelectorAll(".toggle-color")

toggleColor.forEach((item)=>{
   item.addEventListener("click", ()=>{
    item.classList.toggle("color-set-toggle")
   })
})