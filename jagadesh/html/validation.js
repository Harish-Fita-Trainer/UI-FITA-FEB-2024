function onsave(){
   var name = document.getElementById("name_").value;
   var regno = document.getElementById("regno_").value;
   var department = document.getElementById("department1").value;
   var dob = document.getElementById("dob_").value;
   var age = document.getElementById("age_").value;   
   var phonenumber= document.getElementById("phonenumber_").value;
   var email= document.getElementById("email_").value;
   var password = document.getElementById("password_").value;
   var cpassword = document.getElementById("confirm_password").value;
   var profilephoto = document.getElementById("Profile_picture").value;


    
 console.log(name,regno,department,dob,age,phonenumber,email,password,cpassword,profilephoto);
 
 
    const menu = document.querySelector('.menu');
 const menulist = document.querySelector('nav ul');
 menu.addEventListener('click',()=>{
    menulist.classList.toggle('showmenu')
 })

 
 if(regno.trim()=="")
 {
     document.getElementById("regmessage").innerText="please enter regno";
 
 }
 else if(regno.length==6){
    document.getElementById("regmessage").innerText="";   

 }
 else{
      document.getElementById("regmessage").innerText="must enter  6 digits";   
 } 
if(department==0)
{
    document.getElementById("depmessage").innerText="please enter dep";

}
else{
     document.getElementById("depmessage").innerText="";   
}
  /*name vlidatation*/
 if(name.trim()=="")
 {
     document.getElementById("nmessage").innerText="please enter name";
 }
 else if(name.length<=4)
 {
     document.getElementById("nmessage").innerText="name minlength must be 5";
 }
 else if(name.length>15 )
 {
     document.getElementById("nmessage").innerText="name maxlength must be 15";
 }
 else
     {
         document.getElementById("nmessage").innerText=""; 
     }
     var emailregexp=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
/*email validation*/

if(email.trim()=="")
{
    document.getElementById("emessage").innerText="please enter email";

}
else if((emailregexp.test(email)))
{
    document.getElementById("emessage").innerText="";
    
}
else
{
    document.getElementById("emessage").innerText="please enter valid email";
}
if(dob.trim()=="")
{
    document.getElementById("dobmessage").innerText="please enter dob date";    
}
else
{
    document.getElementById("dobmessage").innerText="";    

}
if(age.trim()=="")
{
    document.getElementById("agemessage").innerText="please enter age";
   
}
else if(age>=17)
{
    document.getElementById("agemessage").innerText="";
 
}
else {
    document.getElementById("agemessage").innerText="age 17 only elligible";

}
/*phone no validation*/
phoneregex=/^[6-9]\d{9}$/
if(phonenumber.trim() =="")
{
    document.getElementById("pmessage").innerText="please enter phone no";

}
else if((phoneregex.test(phonenumber)))
{
    document.getElementById("pmessage").innerText="";

}
else{
    document.getElementById("pmessage").innerText="please enter valid phonenumber";

}


var passregx= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/>,.<|~-]).{8,}$/;
if(password.trim()=="")
{
    document.getElementById("pwdmessage").innerText="please enter password";

}
else if((passregx.test(password)))
{
    document.getElementById("pwdmessage").innerText="";

}
else
{
document.getElementById("pwdmessage").innerText="please enter valid password";
}
var cpassregx= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/>,.<|~-]).{8,}$/;
if(cpassword.trim()=="")
{
    document.getElementById("cpwdmessage").innerText="please reenter password";

}
else if((cpassregx.test(cpassword)))
{
    document.getElementById("cpwdmessage").innerText="";

}
else
{
document.getElementById("cpwdmessage").innerText="please enter valid password";
}
if(password==cpassword){
    console.log("");

}
else{
    alert('password doesnot match');
}
var acceptext = /(\.jpg|\.jpeg|\.png)$/i;
if(profilephoto.trim()=="")
{
    document.getElementById("photomessage").innerText="please upload image";

}
else if((acceptext.exec(profilephoto))){
    document.getElementById("photomessage").innerText="";

}
else{
    document.getElementById("photomessage").innerText="upload orrect file format";

}
}
window.onload = function () {
document.getElementById("submit").addEventListener('click',onsave);
}
