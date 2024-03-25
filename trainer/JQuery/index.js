console.log("file loaded")

function OnSave() {
    var pwd = document.getElementById("password").value;
    var cpwd = document.getElementById("confirmpassword").value;
    console.log("password", pwd, cpwd);
    document.getElementById("password").style.display = 'none';
    document.getElementById("password").style.display = 'block';

    if (pwd === cpwd) {
        document.getElementById("message").setAttribute("class", "success")
        document.getElementById("message").innerText = "password matched";
    }
    else {
        document.getElementById("message").setAttribute("class", "failure")

        document.getElementById("message").innerText = "password not matched";
    }
}

function OnDepartmentChange(event) {
    console.log("OnDepartmentChange", event.target.value);
}


window.onload = function () {
    console.log("window onload")
    console.log("Is Jquery Loaded", $);

    $(".form-container .form-control #department")
        .off('change')
        .on('change', function (params) {
            console.log("testxadfsd", params)
        })
}


