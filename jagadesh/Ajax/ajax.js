function OnSuccess(data){
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        console.log("data",element);
       $(".table #ajax tbody")
       .append($('<tr/>'))
       .append(
           $('<td/>').text(element.postId),
           $('<td/>').text(element.id),
           $('<td/>').text(element.name),
           $('<td/>').text(element.email),
           $('<td/>').text(element.body)

       )

        

        
    }
}
window.onload = function () {
   
    $.ajax({
        //url: "https://jsonplaceholder.typicode.com/photos", success: OnSuccess
      url: "https://jsonplaceholder.typicode.com/comments", success: OnSuccess
      // url: "https://dummyjson.com/products/search?q=Laptop", success: OnSuccess


    });

}
$("document").ready(function(){
    $("#primary").click(function () {

        $("tbody").toggle();
        
    })
}

)