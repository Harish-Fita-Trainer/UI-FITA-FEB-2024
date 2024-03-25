console.log("file loaded")

function OnSave() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var dpt = document.getElementById("department").value;
    var dpt = document.getElementById("department").value;

    

    const JsonObject = {
        "name": name,
        "age": age,
        "department": dpt
    }

    console.log("json", JsonObject);
}









function OnDepartmentChange(event) {
    console.log("OnDepartmentChange", event.target.value);
}


window.onload = function () {
    console.log("window onload")
    //document.getElementById("save_btn").addEventListener('click', OnSave);
    document.getElementById("department").addEventListener('change', OnDepartmentChange);

}


