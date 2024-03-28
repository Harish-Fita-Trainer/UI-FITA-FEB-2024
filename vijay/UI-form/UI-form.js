console.log("file loaded")

function Onsubmit() {
    var Name = document.getElementById("Name").value;
    var Mobile = document.getElementById("Mobile").value;
    var emailid = document.getElementById("emailid").value;
    var  dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value; 
    var department = document.getElementById("department").value;                                  
    var password = document.getElementById("password").value;
    var confirmpassword = document.getElementById("confirmpassword").value;
    var Agree = document.getElementById("Agree").value;
    console.log("password", password, confirmpassword);
    
//--------Validation of Name------//  
if( Name == "")
{
    document.getElementById("Name_error").setAttribute("class", "failure")
    document.getElementById("Name_error").innerText = "Enter The name";
}
else if( Name == [1-9])
{
    document.getElementById("Name_error").innerText = "Please enter the valid Name";
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
//--------Validation of Dob------//  
if(  dob == "")
{
    document.getElementById("dob_error").setAttribute("class", "failure")
    document.getElementById("dob_error").innerText = "Enter The DOB";
}
else{
    document.getElementById("dob_error").innerText = "";
}
//--------Validation of gender------//  
if(  gender ==0)
{
    document.getElementById("gender_error").setAttribute("class", "failure")
    document.getElementById("gender_error").innerText = "Enter The Gender";
}
else{
    document.getElementById("gender_error").innerText = "";
}
//--------Validation of department------//  
if( department ==0)
{
    document.getElementById("department_error").setAttribute("class", "failure")
    document.getElementById("department_error").innerText = "Select The Department";
}
else{
    document.getElementById("department_error").innerText = "";
}
//--------Validation of password------//  
if( password == "")
{
    document.getElementById("password_error").setAttribute("class", "failure")
    document.getElementById("password_error").innerText = "Enter The password";
}
else{
    document.getElementById("password_error").innerText = "";
}
//--------Validation of confirm-password------//  
if( confirmpassword == "")
{
    document.getElementById("confirmpassword_error").setAttribute("class", "failure")
    document.getElementById("confirmpassword_error").innerText = "Enter The Confirm-password";
}
else{
    document.getElementById("confirmpassword_error").innerText = "";
}
//------validation of  final-password------//
if (password === confirmpassword) {
    document.getElementById("message").setAttribute("class","success")
    document.getElementById("message").innerText = "password matched";
}
else {
    document.getElementById("message").setAttribute("class","failure")
    document.getElementById("message").innerText = "password not matched";
}
//--------Validation of agree------//  
if( Agree == "")
{
    document.getElementById("Agree").setAttribute("class", "failure")
    document.getElementById("Agree").innerText = "confirm  The Agree";
}
else{
    document.getElementById("Agree").innerText = "";
}


const JsonObject = {
    "Name": Name,
    "Mobile": Mobile,
    "emailid": emailid,
    "dob": dob,
    "gender": gender,
    "department": department,
    "password": password,
    "confirmpassword": confirmpassword,
}

console.log("json", JsonObject);
}

window.onload = function () {
    console.log("window onload")
    document.getElementById("submit_btn").addEventListener('click', Onsubmit);
}