  
function OnSuccess(data){
    var products=data;
    for (let index = 0; index < data.users.length; index++) {
        const element = data.users[index];
        console.log("data",element);
       $(".table #ajax tbody")
       .append($('<tr/>'))
       .append(
           $('<td/>').text(element.id),
           $('<td/>').text(element.firstName),
           $('<td/>').text(element.lastName),
           $('<td/>').text(element.maidenName),
           $('<td/>').text(element.age),
           $('<td/>').text(element.gender),
           $('<td/>').text(element.email),
           $('<td/>').text(element.phone),
           $('<td/>').text(element.username),
           $('<td/>').text(element.password),
           $('<td/>').text(element.birthDate),
           $('<td/>').text(element.bloodGroup)

       )
      
}

    
}
window.onload = function () {
   
    $.ajax({
        //url: "https://jsonplaceholder.typicode.com/photos", success: OnSuccess
    //  url: "https://jsonplaceholder.typicode.com/comments", success: OnSuccess
      url: "https://dummyjson.com/users", success: OnSuccess


    });

    document.getElementById("save").addEventListener('click',function (){
        var enteredpwd=document.getElementById("pwd").value;
      console.log("password is",enteredpwd);
       }
    )

}
$("document").ready(function(){
    $("#primary").click(function () {

        $("tbody").toggle();
        
    })
}
)
