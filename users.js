var data, searchedName;
function userDertails(obj) {

    var wrapper=document.createElement('tr');
    wrapper.className='userList-tableRow';

    var userId=document.createElement("td");
    userId.innerText=obj.id
    userId.className="userList-secondaryText"
    wrapper.appendChild(userId);

    var profilepic=document.createElement('td');
    var profilepicImg=document.createElement('img');
    profilepicImg.src=obj.profilePic
    profilepic.className="userList-primaryText"
    profilepic.appendChild(profilepicImg);
    wrapper.appendChild(profilepic);

    var username=document.createElement('td');
    username.innerText=obj.fullName
    username.className="userList-secondaryText"
    wrapper.appendChild(username);

    var dob=document.createElement('td');
    dob.innerText=obj.dob
    dob.className="userList-primaryText"
    wrapper.appendChild(dob);

    var gender=document.createElement('td');
    gender.innerText=obj.gender
    gender.className="userList-secondaryText"
    wrapper.appendChild(gender);

    var CityCountry=document.createElement('td');
    CityCountry.innerText=obj.currentCity + "," + obj.currentCountry
    CityCountry.className="userList-secondaryText"
    wrapper.appendChild(CityCountry);

    return wrapper;
}

$("a.topbar-menuItem").click(function(){
    $("a.topbar-menuItem.topbar-active").removeClass("topbar-active");
    $(this).addClass("topbar-active");
 });

var ordersPage = document.getElementById('ordersPage');
var productsPage = document.getElementById('productsPage');
var usersPage = document.getElementById('usersPage');

// ordersPage.onclick = function () {
//     ordersPage.classList.add("topbar-active");
//     productsPage.classList.remove("topbar-active");
//     usersPage.classList.remove("topbar-active");
// }
// productsPage.onclick = function () {
//     ordersPage.classList.remove("topbar-active");
//     productsPage.classList.add("topbar-active");
//     usersPage.classList.remove("topbar-active");
// }
// usersPage.onclick = function () {
//     // ordersPage.classList.remove("topbar-active");
//     // productsPage.classList.remove("topbar-active");
//     usersPage.topbar-active
//     usersPage.classList.addClass("topbar-active");
// }

var mainDiv = document.getElementById('users-tbody');

var formField = document.getElementById('myForm');
formField.onsubmit = function(e) {
    e.preventDefault();
    searchedName = e.target.search.value;
    console.log(searchedName);
    if(searchedName.length < 2) {
        alert("Please enter at least 2 characters");
    }
    else {
        mainDiv.innerHTML = "";
        for(var z = 0; z< data.length; z++) {
            if (data[z].fullName.toLowerCase().includes(searchedName)) {
                mainDiv.appendChild(userDertails(data[z]));
            }
        }
    }
}

var reset = document.getElementById('resetButton');
reset.onclick = function() {
    mainDiv.innerHTML = "";
    for(var r=0; r<data.length; r++) {
            mainDiv.appendChild(userDertails(data[r]));
    }
}

var xhttp = new XMLHttpRequest();
xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', true);
xhttp.onreadystatechange = function() {
    if(this.readyState === 4) {
        data = JSON.parse(this.responseText);
        for(var i=0; i<data.length; i++) {
            mainDiv.appendChild(userDertails(data[i]));
        }
    }
}
xhttp.send();