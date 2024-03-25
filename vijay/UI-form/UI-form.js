console.log("file loaded")

function Onsubmit() {
    var Name = document.getElementById("name").value;
    var Mobile = document.getElementById("Mobile").value;
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    console.log("password", password, confirmpassword);
    
//--------Validation of Name------//  
if( Name == "")
{
    document.getElementById("Name_error").setAttribute("class", "failure")
    document.getElementById("Name_error").innerText = "Enter The name";
}
else{
    document.getElementById("Name_error").innerText = "";
}
//--------Validation of Mobile No------//  
if( Mobile  == "")
{
    document.getElementById("Mobile_No_error").setAttribute("class", "failure")
    document.getElementById("Mobile_No_error").innerText = "Enter The Mobile No";
}
else{
    document.getElementById("Mobile_No_error").innerText = "";
}
//-----Validation of Email-id----//
if( emailid == "")
{
    document.getElementById("email_id_error").setAttribute("class", "failure")
    document.getElementById("email_id_error").innerText = "Enter The  Email-id";
}
else{
    document.getElementById("email_id_error").innerText = "";
}
//------validation of password------//
if (password === confirmpassword) {
    document.getElementById("message").setAttribute("class","success")
    document.getElementById("message").innerText = "password matched";
}
else {
    document.getElementById("message").setAttribute("class","failure")
    document.getElementById("message").innerText = "password not matched";
}
}

window.onload = function () {
    console.log("window onload")
    document.getElementById("submit_btn").addEventListener('click', Onsubmit);
}