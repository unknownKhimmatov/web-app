const rotate1 = document.getElementById("rotate1")
const profil = document.getElementById("profil")

profil.addEventListener("click", ()=>{
  profil.classList.toggle("togle-profil")
  rotate1.classList.toggle("rotate-toggle1")
})


const page = document.getElementById("page")
const rotate2= document.getElementById("rotate2")
page.addEventListener("click", ()=>{
  page.classList.toggle("page-toggle")
  rotate2.classList.toggle("rotate2-toggle")
})

const Component = document.getElementById("Component")
const rotate3 = document.getElementById("rotate3")

Component.addEventListener('click' , ()=>{
  Component.classList.toggle("Component-toggle")
  rotate3.classList.toggle("rotate3-toggle")
})

const form = document.getElementById("form")
const rotate4 = document.getElementById("rotate4")

form.addEventListener("click", ()=>{
  form.classList.toggle("form-toggle")
  rotate4.classList.toggle("rotate-toggle4")
})

const maps = document.getElementById("maps")
const rotate5 = document.getElementById("rotate5")

maps.addEventListener("click",()=>{
  maps.classList.toggle("maps-toggle")
  rotate5.classList.toggle("rotate-toggle5")
})

// bgc active function 

var widgets = document.getElementById("widgets")
var charts = document.getElementById("charts")
var calendar = document.getElementById("calendar")
var dashboardMain = document.getElementById("dashboard")
var dashboard = document.getElementById("contenet-dashboard")

var bgc1= document.getElementById("bgc1")
var bgc2= document.getElementById("bgc2")
var bgc3= document.getElementById("bgc3")


dashboardMain.addEventListener('click', ()=>{
  dashboard.style.background=`#00acc1`
  bgc2.style.background=`none`
  bgc1.style.background=`none`
  bgc3.style.background=`none`
})

widgets.addEventListener("click", ()=>{
  dashboard.style.background=`none`
  bgc1.style.background=`#00acc1`
  bgc2.style.background=`none`
  bgc3.style.background=`none`
})

charts.addEventListener("click", ()=>{
  dashboard.style.background=`none`
  bgc3.style.background=`none`
  bgc1.style.background=`none`
  bgc2.style.background=`#00acc1`
})


calendar.addEventListener("click", ()=>{
  dashboard.style.background=`none`
  bgc2.style.background=`none`
  bgc1.style.background=`none`
  bgc3.style.background=`#00acc1`
})



// full main page 
var fullPage = document.getElementById("fullPage")
const saidbarButton =  document.getElementById("saidbar-button")
const toggleH3 = document.getElementById("toggle_fullPage")
const listIcone = document.getElementById("list-icone")
const nuqta = document.getElementById("nuqta")
const left = document.getElementById("left")

saidbarButton.addEventListener("click" , ()=>{
  fullPage.classList.toggle("toggle_fullPage")
  toggleH3.classList.toggle("toggleH3style")
  left.classList.toggle("left-toggle")

})



// responsive
var hamburger = document.getElementById("hamburger")
var saidbar = document.getElementById("saidbar")
var searchNav = document.getElementById("search-nav")
var searchInput = document.getElementById("search-input")

hamburger.addEventListener("click" , ()=>{
  saidbar.classList.toggle("saidbar-toggle")
  fullPage.style.filter=`brightness(30%)`
  console.log('navbar');
  searchNav.style.display=`block`
  hamburger.style.zIndex=`111111`
})


 

// setting section 

var setting = document.getElementById("setting")
var buttonSet = document.getElementById("buttonSet")

buttonSet.addEventListener("click", ()=>{
  setting.classList.toggle("setting_toggle")
})






// responsive for 1040px 
var fullPageREs1040 = document.getElementById("fullPage")
var listIconeREs = document.getElementById("list-icone")

listIconeREs.addEventListener("click" , ()=>{
  fullPageREs1040.classList.toggle("fullPageREs1040Toggle")
})






// focus 

var bgc_tim = document.getElementById("bgc_tim")

bgc_tim.addEventListener("click" , ()=>{
  bgc_tim.classList.toggle("toggle_tim")
})


var saidbarButtonMenu = document.getElementById("saidbar-button")

var isOpen= true

saidbarButtonMenu.addEventListener("click", ()=>{
  if(isOpen){
    saidbarButtonMenu.innerHTML= `<i id="list-icone" class="fa-solid fa-list list-icone"></i>`
    isOpen=false
  }
  else{
    saidbarButtonMenu.innerHTML=`<i id="nuqta" class="fa-solid fa-ellipsis-vertical nuqta"></i>`
    isOpen= true
  }
})