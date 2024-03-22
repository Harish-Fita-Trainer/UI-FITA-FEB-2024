console.log("file loaded")

function OnSave() {
    var Name = document.getElementById("Name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var  pwd = document.getElementById("password").value;
    var cpwd = document.getElementById("confirmpassword").value;
    console.log("password", pwd, cpwd);

    if(Name === "")
    {
        document.getElementById("message").setAttribute("class", "failure")
        document.getElementById("message").innerText = "Please Fill name";
    }
    else if( email === "")
    {
        document.getElementById("message").setAttribute("class", "failure")
        document.getElementById("message").innerText = "Please Enter your email";

    }
    else if(phone === "")
    {
        document.getElementById("message").setAttribute("class", "failure")
        document.getElementById("message").innerText = "Please Enter your phone number";
    }

    else if (pwd === "" && cpwd === ""){
        document.getElementById("message").setAttribute("class", "failure")
        document.getElementById("message").innerText = "Please Enter the Password";
    }
    
    else if (pwd === cpwd){
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
    document.getElementById("save_btn").addEventListener('click', OnSave);
}