console.log("file loaded")

function Onsubmit() {
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    console.log("password", password, confirmpassword);
    
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
}