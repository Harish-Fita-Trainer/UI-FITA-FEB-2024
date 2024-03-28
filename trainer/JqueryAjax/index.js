console.log("file loaded")



function OnDepartmentChange(event) {
    console.log("OnDepartmentChange", event.target.value);
}


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
                $('<td/>').text(element.body)
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


