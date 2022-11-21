$(document).ready(function () {
    animText();
    $("#estoc").on('click', animEstoc());
    $("#wellcome").click(function() {animText(); });
    $("#validate").click(function () {validate(); });
});

function animText(){
    $("#wellcome").animate({fontSize: '2em'}, "slow");
    $("#wellcome").animate({fontSize: '1em'}, "slow");
}

function animEstoc(){
    $("#estoc").click(function() {
        $("#estoc").animate({opacity: '0'}, "slow");
        $("#estoc").animate({opacity: '1'}, "fast");
    });    
}

function validate(){
    var name=$("#name").val();
    var reason=$("#reason").val();
    var date = $("#date").val();

    if(name==""){
        $("#name").css('border','2px solid #ff0000');
        alert("You want me to call you   ?");
        return;
    }
    if(reason==""){
        $("#reason").css('border','2px solid #ff0000');
        alert("You must have a reason.");
        return;
    }
    if(!(document.getElementById("dayly").checked) && 
    !(document.getElementById("weekly").checked)){
        alert("Choose dayly, weekly or both.");
        return;
    }

    if(!(document.getElementById("age-0-18").checked) && 
    !(document.getElementById("age-19-36").checked) && 
    !(document.getElementById("age-37+").checked)){
        alert("How old are you?");
        return;
    }

    if(date==""){
        $("#date").css('border','2px solid #ff0000');
        alert("Choose a date.");
        return;
    }

    alert("Successful registration!");
}