/function onsave(){
    var name = $(#"name_").val();
    var regno = $("#dob_").val();
   // document.getElementById("regno_").value;
    var department = $("#department1").val();
    //document.getElementById("department1").value;
    var dob = $("#dob_").val();
    //document.getElementById("").value;
    var age = $("#age_").val();
   // document.getElementById("age_").value;   
    var phonenumber= $("#phonenumber_").val();
    //document.getElementById("phonenumber_").value;
    var email= $("#email_").val();
    //document.getElementById("email_").value;
    var password = $("#password_").val();
    //document.getElementById("password_").value;
    var cpassword = $("#confirm_password").val();
    //document.getElementById("confirm_password").value;
    var profilephoto = $("#Profile_picture").val();
    //document.getElementById("Profile_picture").value;
 
   const JsonObject = {
     "name_":name,
     "regno_":regno,
     "department1":department,
     "dob_":dob,
     "age_":age,
     "phonenumber_":phonenumber,
     "email_":email,
     "password_":password,
     "confirm_password":cpassword,
     "profile_picture":profilephoto
 
 
 }
   console.log("json value is",JsonObject);
  
  if(regno.trim()=="")
  {
      $("#regmessage").text("please enter regno");
      //document.getElementById("regmessage").innerText="please enter regno";
  
  }
  else if(regno.length==6){
    $("#regmessage").text("");
   // document.getElementById("regmessage").innerText="";   
 
  }
  else{
     $("#regmessage").text("must enter  6 digits");
       //document.getElementById("regmessage").innerText="must enter  6 digits";   
  } 
 if(department==0)
 {
    $("#depmessage").text("please enter dep");
     //document.getElementById("depmessage").innerText="please enter dep";
 
 }
 else{
    $("#depmessage").text("");
     // document.getElementById("depmessage").innerText="";   
 }
   /*name vlidatation*/
  if(name.trim()=="")
  {   $("#nmessage").text("please enter name")
     // document.getElementById("nmessage").innerText="please enter name";
  }
  else if(name.length<=4)
  {
  {   $("#nmessage").text("name minlength must be 5");
       
      //document.getElementById("nmessage").innerText="name minlength must be 5";
  }
  else if(name.length>15 )
  {
  {   $("#nmessage").text("name maxlength must be 15");

      //document.getElementById("nmessage").innerText="name maxlength must be 15";
  }
  else
      {
  {   $("#nmessage").text("");

          
          //document.getElementById("nmessage").innerText=""; 
      }
      var emailregexp=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
 /*email validation*/
 
 if(email.trim()=="")
  {   $("#emessage").text("please enter email");
    
     //document.getElementById("emessage").innerText="please enter email";
 
 }
 else if((emailregexp.test(email)))
 {
  {   $("#emessage").text("");

     //document.getElementById("emessage").innerText="";
     
 }
 else
  {   $("#emessage").text("please enter valid email");
  {     
     //document.getElementById("emessage").innerText="please enter valid email";
 }
 if(dob.trim()=="")
 {
     $("#dobmessage").text("please enter dob");
     
     //document.getElementById("dobmessage").innerText="please enter dob date";    
 }
 else
  {   $("#dobmessage").text("");
  
    // document.getElementById("dobmessage").innerText="";    
 
 }
 if(age.trim()=="")
 {
    $("#agemessage").text("please enter age");

   //  document.getElementById("agemessage").innerText="please enter age";
    
 }
 else if(age>=17)
 {
    $("#agemessage").text("");

     //document.getElementById("agemessage").innerText="";
  
 }
 else {
    $("#agemessage").text("age 17 only elligible");

     //document.getElementById("agemessage").innerText="age 17 only elligible";
 
 }
 /*phone no validation*/
 phoneregex=/^[6-9]\d{9}$/
 if(phonenumber.trim() =="")
 {
    $("#pmessage").text("please enter phone No");

     //document.getElementById("pmessage").innerText="please enter phone no";
 
 }
 else if((phoneregex.test(phonenumber)))
 {
    $("#pmessage").text("");

     //document.getElementById("pmessage").innerText="";
 
 }
 else{
    $("#pmessage").text("please enter valid phone Numberd");

    // document.getElementById("pmessage").innerText="please enter valid phonenumber";
 
 }
 
 
 var passregx= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/>,.<|~-]).{8,}$/;
 if(password.trim()=="")
 {
    $("#pwdmessage").text("please enter password");
    
    // document.getElementById("pwdmessage").innerText="please enter password";
 
 }
 else if((passregx.test(password)))
 {
    $("#pwdmessage").text("");

     document.getElementById("pwdmessage").innerText="";
 
 }
 else
 {
    $("#pwdmessage").text("please enter valid password");
   
 //document.getElementById("pwdmessage").innerText="please enter valid password";
 }
 var cpassregx= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/>,.<|~-]).{8,}$/;
 if(cpassword.trim()=="")
 {
    $("#cpwdmessage").text("please re enter  password");
       
    // document.getElementById("cpwdmessage").innerText="please reenter password";
 
 }
 else if((cpassregx.test(cpassword)))
 {
    $("#cpwdmessage").text("");

    // document.getElementById("cpwdmessage").innerText="";
 
 }
 else
 {
    $("#cpwdmessage").text("please enter valid password");
    
 //document.getElementById("cpwdmessage").innerText="please enter valid password";
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
    $("#photomessage").text("please upload image");
    // document.getElementById("photomessage").innerText="please upload image";
 
 }
 else if((acceptext.exec(profilephoto))){
    $("#photomessage").text("");

     //document.getElementById("photomessage").innerText="";
 
 }
 else{
    $("#photomessage").text("upload orrect file format");
     //document.getElementById("photomessage").innerText="upload orrect file format";
 
 }
 
 }
 window.onload = function () {
 $("#submit").('click',)
 //document.getElementById("submit").addEventListener('click',onsave);
 }
 
 /*const menu = document.querySelector('.menu');
 const menulist = document.getElementById('b');
 menu.addEventListener('click',()=>{
    menulist.classList.toggle('showmenu')
 })*/
 
 
 *//