console.log("file loaded")

function OnSave() {
    var Name = document.getElementById("Name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var  pwd = document.getElementById("password").value;
    var cpwd = document.getElementById("confirmpassword").value;
    console.log("password", pwd, cpwd);


//--------Validation of Name------//  
    if(Name === "")
    {
        document.getElementById("Name_error").setAttribute("class", "failure", "failure ")
        document.getElementById("Name_error").innerText = "Enter The name";
    }
    else{
        Name_error.innerHTML =""
    }
//------------validation of Email-------//
    if( email === "")
    {
        document.getElementById("email_error").setAttribute("class", "failure")
        document.getElementById("email_error").innerText = "Enter the Email";
    }
    else{
        email_error.innerHTML =""
    }
//------------phone number validation------------//
    if(phone === "")
    {
        document.getElementById("phone_error").setAttribute("class", "failure")
        document.getElementById("phone_error").innerText = "Enter your Number";
    }
    else{
        phone_error.innerHTML = ""
    }
//--------------password validation-----------------//
    if (pwd === ""){
        document.getElementById("password_error").setAttribute("class", "failure")
        document.getElementById("password_error").innerText = "Enter the Password";
    }
    else{
        password_error.innerHTML = ""
    }
//-----------------confirmpassword validation---------//    
    if (cpwd === ""){
        document.getElementById("confirmpassword_error").setAttribute("class", "failure")
        document.getElementById("confirmpassword_error").innerText = "Enter Confirmpassword";
    }
    else {
        confirmpassword_error.innerHTML = ""
    }

    if (pwd === cpwd) {
        document.getElementById("message").setAttribute("class", "success")
       // document.getElementById("message").innerText = "password matched";
    
    }
    else {
        document.getElementById("message").setAttribute("class", "failure")
        alert("Password Not match")

        //document.getElementById("message").innerText = "password not matched";
    }
}



window.onload = function () {
    console.log("window onload")
    document.getElementById("save_btn").addEventListener('click', OnSave);
}