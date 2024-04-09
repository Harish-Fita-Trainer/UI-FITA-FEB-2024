console.log("file loaded")

var Username = $("#user_name").val()
var userpassword = $("#user_passwaord").val()

JSON.stringify({
    Username,
    userpassword
})


$(".container #btn").off("click").on("click",function(){
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    
    username: 'kminchelle',
    password: '0lelplR',
    expiresInMins: 30, // optional, defaults to 60
  })
})

.then(res => {
    if(res === 'succuss'){
        console.log("it's working");
    }
    else{
        setTimeout(function(){
            window.location.href ="tableajax.html";
        },3000);
    }
})
});


function OnSuccess(list) {
    for (let index = 90; index < list.length; index++) {
        function removeData() {
            $("#row_" + DataObj.id).remove();
            if ($(".form-container #list tbody tr").length === 0) {
                $(".form-container #list tbody")
                    .append($('<tr/>')
                        .addClass("no-records-row")
                        .append($('<td/>')
                            .attr("colspan", 4)
                            .text("No records found")))
            }
        }
        const DataObj = list[index];

        $(".form-container #list tbody")
            .append($('<tr/>').attr("id", "row_" + DataObj.id)
                .append(
                    $('<td/>').text(DataObj.userId),
                    $('<td/>').text(DataObj.id),
                    $('<td/>').text(DataObj.title),
                    $('<td/>').append($('<button/>').attr('id','delete-btn').html('<i class="fa-solid fa-trash"></i> delete')
                        .on("click", removeData)),
                ))
    }
}


window.onload = function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts", success: OnSuccess
    });
}

function rowcount(){
    //var countrow = $("");
     countrow = $(".form-container #list tbody tr").length;
    ("#rowcount").text(rowcount)
}

$(".controls #refers").click(function(){
    window.location.reload()
});