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
        document.getElementById("Name_error").innerText= ""
    }
//------------validation of Email-------//
    if( email === "")
    {
        document.getElementById("email_error").setAttribute("class", "failure")
        document.getElementById("email_error").innerText = "Enter the Email";
    }
    else{
        document.getElementById("email_error").innerText= ""
        
    }
//------------phone number validation------------//
    if(phone.length <=10)
    {
        document.getElementById("phone_error").setAttribute("class", "failure")
        document.getElementById("phone_error").innerText = "phone number require min 10 char";
    }
    else{
        document.getElementById("phone_error").innerText= ""
        
    }
   // if(phone)
//--------------password validation-----------------//
    if (pwd === ""){
        document.getElementById("password_error").setAttribute("class", "failure")
        document.getElementById("password_error").innerText = "Enter the Password";
    }
    else{
        document.getElementById("password_error").innerText= ""
        
    }
//-----------------confirmpassword validation---------//    
    if (cpwd === ""){
        document.getElementById("confirmpassword_error").setAttribute("class", "failure")
        document.getElementById("confirmpassword_error").innerText = "Enter Confirmpassword";
    }
    else {
        document.getElementById("confirmpassword_error").innerText= ""
        
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