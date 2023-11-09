const startBtn = document.getElementById("start-echoing")
const headerElement = document.querySelector("#header-element")
const homeElement = document.querySelector(".home_screen")
const exploreBtnNav = document.querySelector(".explore")
const startBtnNav = document.querySelector(".start")
const homeBtnNav = document.querySelector(".home")
const exploreElementLogin = document.querySelector(".start_echoing_screen_login")
const exploreElementSignup = document.querySelector(".start_echoing_screen_signup")
const toSignUpBtn = document.getElementById("to-signup-btn")
const toLoginBtn = document.getElementById("to-login-btn")
const explore_echoes = document.querySelector('.explore_echoes')


startBtn.addEventListener("click",function(){
    console.log("start btn ")
    display_Explore_Screen_Login()
})
exploreBtnNav.addEventListener("click",function(){
    console.log("explorebtn")
    display_echos()

    
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
    explore_echoes.style.display='none'
}
function display_Explore_Screen_Login(){
    exploreElementSignup.style.display='none'
    headerElement.style.display='flex'
    homeElement.style.display='none'
    exploreElementLogin.style.display='flex'
    explore_echoes.style.display='none'

}
function display_home_screen(){
    exploreElementSignup.style.display='none'
    headerElement.style.display='none'
    homeElement.style.display='flex'
    exploreElementLogin.style.display='none'
    explore_echoes.style.display='none'


}
function display_echos(){
    
    //
 
   
      
    fetch('https://type.fit/api/quotes')
    .then(res => res.json())
    .then(data => {
        const htmlStrucute = data.map((e)=>{
            if  ((e.author).split(',')[0]==='type.fit'){ authorName='Unknown'}
            else{
                authorName=(e.author).split(',')[0]
            }
            return `
        <div class="echo">
            <h4>${authorName}</h4>
            <p class="content">${e.text}</p>
            <button class="like">
                <i class="fa-solid fa-heart" style="color: #4d331f;"></i>
            </button>
        </div>   
            `
        }).join('')
        explore_echoes.innerHTML=htmlStrucute

    })
    exploreElementSignup.style.display='none'
    headerElement.style.display='none'
    homeElement.style.display='none'
    exploreElementLogin.style.display='none'
    headerElement.style.display='flex'
    explore_echoes.style.display='flex'
    

}
