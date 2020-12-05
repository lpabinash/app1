


function productdetail(Obj){
    var main=document.createElement('tr');
    main.id='userList-tableRow';

    var productId=document.createElement("td");
    productId.innerText=Obj.id
    productId.className="userList-secondaryText"
    main.appendChild(productId);

    var Productname=document.createElement('td');
    Productname.innerText=Obj.medicineName
    Productname.className="userList-primaryText"
    main.appendChild(Productname);

    var Productbrand=document.createElement('td');
    Productbrand.innerText=Obj.medicineBrand
    Productbrand.className="userList-secondaryText"
    main.appendChild(Productbrand);

    var Productexpiry=document.createElement('td');
    Productexpiry.innerText=Obj.expiryDate
    Productexpiry.className="userList-primaryText"
    main.appendChild(Productexpiry);

    var Productprice=document.createElement('td');
    Productprice.innerText=Obj.unitPrice
    Productprice.className="userList-secondaryText"
    main.appendChild(Productprice);

    var stock=document.createElement('td');
    stock.innerText=Obj.stock
    stock.className="userList-secondaryText"
    main.appendChild(stock);



return main;
}



var detPage=document.getElementById("prods")
var xhttp = new XMLHttpRequest();
xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', true);
xhttp.onreadystatechange = function() {
if(this.readyState === 4) {
var data = JSON.parse(this.responseText);
for(var i=0; i<data.length; i++) {
    console.log(data[i]);
    // if(data[i].id === localStorage.getItem("id"))
        detPage.appendChild(productdetail(data[i]));
}
}
}
xhttp.send();
var expired=document.getElementById("filter1");
var lowStock=document.getElementById("filter2")
var d = Date.parse(new Date());
// var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
lowStock.onclick=(e)=>{
    
    if(e.target.checked){
        var xhttp = new XMLHttpRequest();
        xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', true);
        xhttp.onreadystatechange = function() {
        if(this.readyState === 4) {
            detPage.innerHTML="";
        var data = JSON.parse(this.responseText);
        for(var i=0; i<data.length; i++) {
           
            if(data[i].stock > 100){
                console.log(data[i]);
                detPage.appendChild(productdetail(data[i]));
            }
            
}
}
}
xhttp.send();
    }else{
        var xhttp = new XMLHttpRequest();
        xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', true);
        xhttp.onreadystatechange = function() {
        if(this.readyState === 4) {
            detPage.innerHTML="";
        var data = JSON.parse(this.responseText);
        for(var i=0; i<data.length; i++) {
            console.log(data[i]);
    // if(data[i].id === localStorage.getItem("id"))
        detPage.appendChild(productdetail(data[i]));
}
}
}
xhttp.send();
    }
}
expired.onclick=(e)=>{
    
    if(e.target.checked){
        var xhttp = new XMLHttpRequest();
        xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', true);
        xhttp.onreadystatechange = function() {
        if(this.readyState === 4) {
            detPage.innerHTML="";
        var data = JSON.parse(this.responseText);
        for(var i=0; i<data.length; i++) {
           
            if(Date.parse(data[i].expiryDate) > d){
                console.log(data[i]);
                detPage.appendChild(productdetail(data[i]));
            }
            
}
}
}
xhttp.send();
    }
    else{
        var xhttp = new XMLHttpRequest();
        xhttp.open('Get', 'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', true);
        xhttp.onreadystatechange = function() {
        if(this.readyState === 4) {
            detPage.innerHTML="";
        var data = JSON.parse(this.responseText);
        for(var i=0; i<data.length; i++) {
            console.log(data[i]);
    // if(data[i].id === localStorage.getItem("id"))
        detPage.appendChild(productdetail(data[i]));
}
}
}
xhttp.send();
    }
}



// console.log(d.getDate()+"-"+months[d.getMonth()]+"-"+d.getFullYear())