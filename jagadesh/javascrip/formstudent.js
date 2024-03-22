function save()
{
  
    var name=document.getElementById("enter_name").value;
    var rollno=document.getElementById(s"tudent_id").value;
    var std=document.getElementById('std").value;
    var sec=document.getElementsByClassName("select-sec").value;
    var gender=document.getElementsByClassName("select-gen").value;
    var bloodgroup=document.getElementById("blod_group").value;
    var dob=getElementById("enter_dob").value;
    var age=getElementById("enter_age").value;
    var fathername=getElementById("mother_name").value;
    var mothername=getElementById("father_name").value;
    var phoneno=getElementById("phone_number").value;
    var email=getElementById("enter_email").value;
    var address=getElementById("enter_address").value;
    var profilephoto=getElementById("profile_c").value;

    if(name!=" " && name!="null")
    {
        document.getElementById("message").innerText="username must be entered";
    }

}  

window.onload = function () {
    document.getElementById("primary").addEventListener('click',save)
}