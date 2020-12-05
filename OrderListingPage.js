var tableBody= document.getElementById('tableBody');
var count = document.getElementById('count')
var checkBox = document.getElementById("myCheck");
var myCheckNew = document.getElementById("myCheckNew");
var myCheck2 = document.getElementById('myCheck2');
var myCheck3 = document.getElementById('myCheck3');
checkBox.onclick=(e)=>{
    if(e.target.checked){
        var xhttp = new XMLHttpRequest();
        xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', true);
        xhttp.onreadystatechange = function() {
        if(this.readyState === 4) {
            tableBody.innerHTML="";
        var data = JSON.parse(this.responseText);
        let len=0
        for(var i=0; i<data.length; i++) {
           
            if(data[i].orderStatus==="Packed"){
                console.log(data[i]);
                ++len
                document.getElementById("count").innerText="Count:"+len
                tableBody.appendChild(generateOrders(data[i]));
            }
            
}
}
}
xhttp.send();
    }
    else{
        var xhttp = new XMLHttpRequest();
        xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', true);
        xhttp.onreadystatechange = function() {
        if(this.readyState === 4) {
            tableBody.innerHTML="";
        var data = JSON.parse(this.responseText);
        let len=0
        for(var i=0; i<data.length; i++) {
            console.log(data[i]);
            ++len
    // if(data[i].id === localStorage.getItem("id"))
    document.getElementById("count").innerText="Count:"+len
        tableBody.appendChild(generateOrders(data[i]));
}
}
}
xhttp.send();
    }
}
myCheckNew.onclick=(e)=>{
    if(e.target.checked){
        var xhttp = new XMLHttpRequest();
        xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', true);
        xhttp.onreadystatechange = function() {
        if(this.readyState === 4) {
            tableBody.innerHTML="";
        var data = JSON.parse(this.responseText);
        let len=0
        for(var i=0; i<data.length; i++) {
           
            if(data[i].orderStatus==="New"){
                console.log(data[i]);
                ++len
                document.getElementById("count").innerText="Count:"+len
                tableBody.appendChild(generateOrders(data[i]));
            }
            
}
}
}
xhttp.send();
    }
    else{
        var xhttp = new XMLHttpRequest();
        xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', true);
        xhttp.onreadystatechange = function() {
        if(this.readyState === 4) {
            tableBody.innerHTML="";
        var data = JSON.parse(this.responseText);
        let len=0
        for(var i=0; i<data.length; i++) {
            console.log(data[i]);
            ++len
    // if(data[i].id === localStorage.getItem("id"))
    document.getElementById("count").innerText="Count:"+len
        tableBody.appendChild(generateOrders(data[i]));
}
}
}
xhttp.send();
    }
}
myCheck2.onclick=(e)=>{
    if(e.target.checked){
        var xhttp = new XMLHttpRequest();
        xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', true);
        xhttp.onreadystatechange = function() {
        if(this.readyState === 4) {
            tableBody.innerHTML="";
        var data = JSON.parse(this.responseText);
        let len=0
        for(var i=0; i<data.length; i++) {
           
            if(data[i].orderStatus==="InTransit"){
                console.log(data[i]);
                ++len
                document.getElementById("count").innerText="Count:"+len
                tableBody.appendChild(generateOrders(data[i]));
            }
            
}
}
}
xhttp.send();
    }
    else{
        var xhttp = new XMLHttpRequest();
        xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', true);
        xhttp.onreadystatechange = function() {
        if(this.readyState === 4) {
            tableBody.innerHTML="";
        var data = JSON.parse(this.responseText);
        let len=0
        for(var i=0; i<data.length; i++) {
            console.log(data[i]);
            ++len
    // if(data[i].id === localStorage.getItem("id"))
    document.getElementById("count").innerText="Count:"+len
        tableBody.appendChild(generateOrders(data[i]));
}
}
}
xhttp.send();
    }
}
myCheck3.onclick=(e)=>{
    if(e.target.checked){
        var xhttp = new XMLHttpRequest();
        xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', true);
        xhttp.onreadystatechange = function() {
        if(this.readyState === 4) {
            tableBody.innerHTML="";
        var data = JSON.parse(this.responseText);
        let len=0
        for(var i=0; i<data.length; i++) {
           
            if(data[i].orderStatus==="Delivered"){
                console.log(data[i]);
                ++len
                document.getElementById("count").innerText="Count:"+len
                tableBody.appendChild(generateOrders(data[i]));
            }
            
}
}
}
xhttp.send();
    }
    else{
        var xhttp = new XMLHttpRequest();
        xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', true);
        xhttp.onreadystatechange = function() {
        if(this.readyState === 4) {
            tableBody.innerHTML="";
        var data = JSON.parse(this.responseText);
        let len=0
        for(var i=0; i<data.length; i++) {
            console.log(data[i]);
            ++len
    // if(data[i].id === localStorage.getItem("id"))
    document.getElementById("count").innerText="Count:"+len
        tableBody.appendChild(generateOrders(data[i]));
}
}
}
xhttp.send();
    }
}
function generateOrders(Obj){
    var main=document.createElement('tr');
    main.id='userList-tableRow';

    var Id=document.createElement("td");
    Id.innerText=Obj.id
    Id.className="userList-secondaryText"
    main.appendChild(Id);

    var Customer=document.createElement('td');
    Customer.innerText=Obj.customerName
    Customer.className="userList-primaryText"
    main.appendChild(Customer);

    var Date=document.createElement('td');
    Date.innerText=Obj.orderDate
    Date.className="userList-secondaryText"
    main.appendChild(Date);

    var Amount=document.createElement('td');
    Amount.innerText=Obj.amount
    Amount.className="userList-primaryText"
    main.appendChild(Amount);

    var Status=document.createElement('td');
    Status.innerText=Obj.orderStatus
    Status.className="userList-secondaryText"
    main.appendChild(Status);


    return main;

}

var xhttp= new XMLHttpRequest();
var apiEndpoint="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders";
xhttp.open('GET',apiEndpoint, true );
xhttp.onreadystatechange= function(){
    if(this.readyState===4){
        console.log(JSON.parse(this.responseText));
        var responseArray  =JSON.parse(this.responseText);
        for (var i=0; i<responseArray.length; i++){
                tableBody.appendChild(generateOrders(responseArray[i]));
                count.innerHTML = 'Count : ' + responseArray.length;
        }
    }
}
xhttp.send();