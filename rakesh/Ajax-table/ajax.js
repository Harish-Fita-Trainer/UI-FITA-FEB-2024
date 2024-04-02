$(document).ready(function(){
    $("#agree").off("click").on('click',function () {
        var agree = $('#agree').prop('checked');

        if(!agree){
            $(".form-container #list").show();
            
        }
        else {
            $(".form-container #list").hide();

        }
    }); 

});

function OnSuccess(Data) {
    for (let index = 0; index < Data.length; index++) {
        const element = Data[index];
        console.log("data", element);
        $(".form-container #list tbody")
            .append($('<tr/>')
                .append(
                    $('<td/>').text(element.userId),
                    $('<td/>').text(element.id),
                    $('<td/>').text(element.title),
                    //$('<td/>').text(element.content)
                ))
    }
}

$.ajax({
    url: "https://jsonplaceholder.typicode.com/albums", success: OnSuccess
});

