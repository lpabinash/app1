var tableBody= document.getElementById('tableBody');
var count = document.getElementById('count')
var checkBox = document.getElementById("myCheck");
var myCheckNew = document.getElementById("myCheckNew");
var myCheck2 = document.getElementById('myCheck2');
var myCheck3 = document.getElementById('myCheck3');
myCheck2.addEventListener('click',()=>{
    generateFilterData('InTransit');

});
myCheck3.addEventListener('click',()=>{
    generateFilterData('Delivered');

})
myCheckNew.addEventListener('click',()=>{
    generateFilterData('New');

})
checkBox.onclick=()=>{
    generateFilterData('Packed');
}

function generateFilterData(filter){
    var xhttp= new XMLHttpRequest();
    var apiEndpoint="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders";
    xhttp.open('GET',apiEndpoint, true );
    xhttp.onreadystatechange= function(){
        if(this.readyState===4){
            tableBody.innerHTML="";
            console.log(JSON.parse(this.responseText));
            var responseArray  =JSON.parse(this.responseText);
            for (var i=0; i<responseArray.length; i++){
                if(responseArray[i].orderStatus === filter){
                    console.log(tableBody.appendChild(generateOrders(responseArray[i])));
                    count.innerHTML = 'Count : ' + responseArray.length;
                }
            }
        }
    }
    xhttp.send()
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