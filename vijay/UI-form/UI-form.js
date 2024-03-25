console.log("file loaded")

function Onsubmit() {
    var Name = document.getElementById("Name").value;
    var Mobile No = document.getElementById("Mobile No").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    console.log("password", password, confirmpassword);
    
//--------Validation of Name------//  
if( Name === "")
{
    document.getElementById("Name_error").setAttribute("class", "failure")
    document.getElementById("Name_error").innerText = "Enter The name";
}
else{
    Name_error.innerHTML =""  
}
//--------Validation of Mobile No------//  
if( Mobile No === "")
{
    document.getElementById("Mobile_No_error").setAttribute("class", "failure")
    document.getElementById("Mobile_No_error").innerText = "Enter The Mobile No";
}
else{
    Mobile_No_error.innerHTML =""
}
//--------Validation of Name------//  
if( Name === "")
{
    document.getElementById("Name_error").setAttribute("class", "failure")
    document.getElementById("Name_error").innerText = "Enter The name";
}
else{
    Name_error.innerHTML =""  
}
//--------Validation of Name------//  
if( Name === "")
{
    document.getElementById("Name_error").setAttribute("class", "failure")
    document.getElementById("Name_error").innerText = "Enter The name";
}
else{
    Name_error.innerHTML =""  
}
//--------Validation of Name------//  
if( Name === "")
{
    document.getElementById("Name_error").setAttribute("class", "failure")
    document.getElementById("Name_error").innerText = "Enter The name";
}
else{
    Name_error.innerHTML =""  
}
//--------Validation of Name------//  
if( Name === "")
{
    document.getElementById("Name_error").setAttribute("class", "failure")
    document.getElementById("Name_error").innerText = "Enter The name";
}
else{
    Name_error.innerHTML =""  
}
//--------Validation of Name------//  
if( Name === "")
{
    document.getElementById("Name_error").setAttribute("class", "failure")
    document.getElementById("Name_error").innerText = "Enter The name";
}
else{
    Name_error.innerHTML =""  
}
//--------Validation of Name------//  
if( Name === "")
{
    document.getElementById("Name_error").setAttribute("class", "failure")
    document.getElementById("Name_error").innerText = "Enter The name";
}
else{
    Name_error.innerHTML =""  
}
//------validation of password------//
if (password === confirmpassword) {
    document.getElementById("message").setAttribute("class", "success")
    document.getElementById("message").innerText = "password matched";
}
else {
    document.getElementById("message").setAttribute("class", "failure")
    document.getElementById("message").innerText = "password not matched";
}
}

window.onload = function () {
    console.log("window onload")
    document.getElementById("submit_btn").addEventListener('click', Onsubmit);
    document.getElementById("first_name").addEventListener('change', Onfirst_nameChange);
}