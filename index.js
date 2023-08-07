const startBtn = document.getElementById("start-echoing")
const headerElement = document.querySelector(".header-element")
const homeElement = document.querySelector(".home_screen")
const exploreBtnNav = document.querySelector(".explore")
const startBtnNav = document.querySelector(".start")
const homeBtnNav = document.querySelector(".home")
const exploreElement = document.querySelector(".start_echoing_screen")
startBtn.addEventListener("click",function(){
    console.log("start btn ")
    display_Explore_Screen()
})
exploreBtnNav.addEventListener("click",function(){
    console.log("explorebtn")
    
})
startBtnNav.addEventListener("click",function(){
    display_Explore_Screen()
})
homeBtnNav.addEventListener("click",function(){
    console.log("home page ")
    display_home_screen()
})
function display_Explore_Screen(){
    headerElement.style.display='flex'
    homeElement.style.display='none'
    exploreElement.style.display='flex'
}
function display_home_screen(){
    headerElement.style.display='none'
    homeElement.style.display='flex'
    exploreElement.style.display='none'

}
