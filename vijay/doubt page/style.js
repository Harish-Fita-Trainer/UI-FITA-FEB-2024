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
function Onfirst_nameChange(event) {
    console.log("Onfirst_nameChange", event.target.value);
    if  (Name.length>="10") {
        document.getElementById("name").setAttribute("class", "success")
        document.getElementById("name").innerText = "Name found";
    }
    else  (  Name = null){
        document.getElementById("name").setAttribute("class", "failure")
        document.getElementById("name").innerText = "Name required";
    }

}

window.onload = function () {
    console.log("window onload")
    document.getElementById("submit_btn").addEventListener('click', Onsubmit);
    document.getElementById("first_name").addEventListener('change', Onfirst_nameChange);
}