$(document).ready(function (){
    $.get("/api/burritos", function(data){
        listBurritos(data);
    });
});


$("#submit").on('click', function (e){
    e.preventDefault();
    let text = $('#burrito').val().trim();
    $('#burrito').text("");
    $.post("/api/add", {"text":text}, function (data){
        console.log(data);
        listBurritos(data);
    }).then(function(){
        location.reload();
    });
});

function updateBurrito(id){
    $.ajax({
        type: "PUT",
        url: "/api/update",
        data: {"id": id},
        success: listBurritos,
        dataType: 'json'
      });
}

function deleteBurrito(){

}

function listBurritos(burritoArr){
    $('#eaten').empty();
    $('#uneaten').empty();
    burritoArr.forEach(element => {
        if(element.eaten){
            console.log(`${element.id} ${element.text} eaten`);
            let button = `<li data-id="${element.id}" class="list-group-item d-flex justify-content-between align-items-center">
                ${element.text}
                <span class="badge badge-primary badge-pill" data-id="${element.id}">X</span>
            </li>`;
            $('#eaten').append(button);
        }
        else{
            console.log(`${element.id} ${element.text} not eaten`);
            let button = `<li class="list-group-item d-flex justify-content-between align-items-center">
                ${element.text}
                <button class="btn btn-success" onclick="updateBurrito(${element.id})">Devour It</button>
            </li>`;
            $('#uneaten').append(button);
        }   
    });
}