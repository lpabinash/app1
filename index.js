var username=document.getElementById("username")
var password=document.getElementById("password")
var submit= document.getElementById("submit")
var logout=document.getElementById("logout")
var data=localStorage.getItem('authorized')



submit.onclick=(e)=>{
    e.preventDefault()
    // console.log(username.innerText)
        if(username.innerText===password.innerText){
            localStorage.setItem("authorized","yes")
            window.alert("successful")
            window.location = "./OrderListingPage.html";
        }else{
            window.alert("failed")
            window.location="./index.html"
        }
    }
   



logout.onclick=(e)=>{
    e.preventDefault()
    localStorage.setItem("authorized","no")
}