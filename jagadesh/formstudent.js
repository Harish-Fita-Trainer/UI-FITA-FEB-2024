function save()
{
  
    var name=document.getElementById("enter_name").value;
    var rollno=document.getElementById("student_id").value;
    var standard=document.getElementById("stdm").value;
    var sec=document.getElementsByClassName("align").value;
    var gender=document.getElementsByClassName("align").value;
    var bloodgroup=document.getElementById("blod_group").value;
    var dob=document.getElementById("enter_dob").value;
    var age=document.getElementById("enter_age").value;
    var fathername=document.getElementById("mother_name").value;
    var mothername=document.getElementById("father_name").value;
    var phoneno=document.getElementById("phone_number").value;
    var email=document.getElementById("enter_email").value;
    var address=document.getElementById("enter_address").value;
    var profilephoto=document.getElementById("profile_c").value;
    console.log ("Name",name);
    console.log("rollno",rollno);
    console.log("Std",std);
    console.log("Sec",sec);
    console.log("Gender",gender);
    console.log("bloodgroup",bloodgroup);
    console.log("dob",dob)
    console.log("age",age);
    console.log("fathername",fathername);
    console.log("mothername",mothername);
    console.log("phone no",phoneno);
    console.log("Email",email);
    console.log("address",address);
    console.log("profile pic",profilephoto);
    
    if(name =="")
    {
        document.getElementById("message").innerText="please enter name";
    }
    else if(name.length<=4)
    {
        document.getElementById("message").innerText="name minlength must be 5";
    }
    else if(name.length>15 )
    {
        document.getElementById("message").innerText="name maxlength must be 15";
    }
    else
        {
            document.getElementById("message").innerText=""; 
        }
        if(rollno =="")
        {
            document.getElementById("rollmessage").innerText="please enter rollno";
        }
        else if(rollno.length<=4)
        {
            document.getElementById("rollmessage").innerText="rollno minlength must be 5";
        }
        else
        {
            document.getElementById("rollmessage").innerText=""; 
        }
        if(standard =="")
        {
            document.getElementById("stdm").innerText="please enter standard";
        }
        else
        {
            document.getElementById("stdm").innerText=""; 
         }
        }
         function standard(event) {
         console.log("standard", event.target.value);
                             }
           function addressentry(event) {
        console.log("addressentry", event.target.value);
                             }

window.onload = function () {
    console.log("welcome");
    document.getElementById("primary").addEventListener('click',save);
    document.getElementById("stdm").addEventListener('change', standard);
    document.getElementById("enter_address").addEventListener('keyup', addressentry);

 }