console.log("file loaded")



function OnDepartmentChange(event) {
    console.log("OnDepartmentChange", event.target.value);
}

function OnSuccess(list) {
    for (let index = 0; index < list.length; index++) {
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
                    $('<td/>').append($('<button/>').text("Delete")
                        .on("click", removeData)),
                ))
    }
}


window.onload = function () {
    console.log("window onload")
    console.log("Is Jquery Loaded", $);

    $(".form-container .form-control #department")
        .off('change')
        .on('change', function (params) {
            console.log("testxadfsd", params)
        })

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts", success: OnSuccess
    });
}


