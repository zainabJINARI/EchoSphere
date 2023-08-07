const startBtn = document.getElementById("start-echoing")
const headerElement = document.querySelector(".header-element")
const homeElement = document.querySelector(".home_screen")
const exploreBtnNav = document.querySelector(".explore")
const startBtnNav = document.querySelector(".start")
const homeBtnNav = document.querySelector(".home")
const exploreElementLogin = document.querySelector(".start_echoing_screen_login")
const exploreElementSignup = document.querySelector(".start_echoing_screen_signup")
const toSignUpBtn = document.getElementById("to-signup-btn")
const toLoginBtn = document.getElementById("to-login-btn")
startBtn.addEventListener("click",function(){
    console.log("start btn ")
    display_Explore_Screen_Login()
})
exploreBtnNav.addEventListener("click",function(){
    console.log("explorebtn")
    
})
startBtnNav.addEventListener("click",function(){
    display_Explore_Screen_Login()
})
homeBtnNav.addEventListener("click",function(){
    console.log("home page ")
    display_home_screen()
})
toSignUpBtn.addEventListener("click",function(){
    display_Explore_Screen_SignUp()
})
toLoginBtn.addEventListener("click",function(){
    display_Explore_Screen_Login()
})


function display_Explore_Screen_SignUp(){
    headerElement.style.display='flex'
    homeElement.style.display='none'
    exploreElementLogin.style.display='none'
    exploreElementSignup.style.display='flex'
}
function display_Explore_Screen_Login(){
    exploreElementSignup.style.display='none'
    headerElement.style.display='flex'
    homeElement.style.display='none'
    exploreElementLogin.style.display='flex'
}
function display_home_screen(){
    exploreElementSignup.style.display='none'
    headerElement.style.display='none'
    homeElement.style.display='flex'
    exploreElementLogin.style.display='none'

}
