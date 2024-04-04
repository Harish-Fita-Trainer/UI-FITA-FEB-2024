$(document).ready(function(){
    $("#Hide").off("click").on('click',function () {
        var Hide = $('#Hide').prop('checked');

        if(!Hide){
            $(".form-container #Table").show();
            
        }
        else {
            $(".form-container #Table").hide();

        }
    }); 

});

function OnSuccess(Data) {
    for (let index = 0; index < Data.length; index++) {
        const element = Data[index];
        console.log("data", element);
        $(".form-container #Table tbody")
            .append($('<tr/>')
                .append(
                    $('<td/>').text(element.id),
                    $('<td/>').text(element.name),
                    $('<td/>').text(element.email),
                    $('<td/>').text(element.body),
                    //$('<td/>').text(element.content)
                ))
    }
}

$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts/1/comments", success: OnSuccess
});

