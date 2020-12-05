var username=document.getElementById("username")
var password=document.getElementById("password")
var submit= document.getElementById("submit")



submit.onclick=(e)=>{
    e.preventDefault()
    if(username.innerText===password.innerText){
        localStorage.setItem("authorized","yes")
        window.location = "./OrderListingPage.html";
    }else{
        localStorage.setItem("authorized","No")
    }
}