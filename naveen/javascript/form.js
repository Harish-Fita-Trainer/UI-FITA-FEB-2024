console.log("file loaded")

function OnSave() {
    var student_name = document.getElementById("student_name").value;
    var Father_name = document.getElementById("Father_name").value;
    var Mother_name = document.getElementById("Mother_name").value;
    var Email = document.getElementById("Email").value;
    var Address = document.getElementById("Address").value;
    var pwd = document.getElementById("password").value;
    var cpwd = document.getElementById("confirmpassword").value;
    console.log("password", pwd, cpwd);
    if (student_name === "") {
        document.getElementById("student_name_message").setAttribute("class", "failure")
        document.getElementById("student_name_message").innerText = "Please Enter the Name";
    }

    else if (Father_name === "") {
        document.getElementById("Father_name_message").setAttribute("class", "failure")
        document.getElementById("Father_name_message").innerText = "Please Enter the Name";
    }

    else if (Mother_name === "") {
        document.getElementById("Mother_name_message").setAttribute("class", "failure")
        document.getElementById("Mother_name_message").innerText = "Please Enter the Name";
    }

    else if (Address === "") {
        document.getElementById("Address_message").setAttribute("class", "failure")
        document.getElementById("Address_message").innerText = "Please Enter Your Address";
    }
    else if (Phone_number === "") {
        document.getElementById("phone_number_message").setAttribute("class", "failure")
        document.getElementById("phone_number_message").innerText = "Please Enter Your Number";
    }
    else if (Email === "") {
        document.getElementById("Email_message").setAttribute("class", "failure")
        document.getElementById("Email_message").innerText = "Please Enter Your Email";
    }
    else if (pwd === "" && cpwd === ""){
        document.getElementById("password_message").setAttribute("class", "failure")
        document.getElementById("password_message").innerText = "Please Enter the Password";
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