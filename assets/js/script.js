$(function () {
    var count = $("#slide li").length;
    var current = 1;
    var next = 2;
    var interval = 3000;
    var duration = 500;
    var timer;

    $("#slide li:not(:first-child)").hide();
    timer = setInterval(slideTimer, interval);
    function slideTimer() {
        $("#slide li:nth-child(" + current + ")").fadeOut(duration);
        $("#slide li:nth-child(" + next + ")").fadeIn(duration);
        current = next;
        next = ++next;
        if(next > count){
            next = 1;
        }
        $("#button li a").removeClass("target");
        $("#button li:nth-child(" + current + ") a").addClass("target");
    }

    $(".hmb_btn").click(function(){
        $(".sp_nav").slideToggle(200);
    });

    $(".totop a").click(function(){
        $("html,body").animate({scrollTop:0},500);
        return false;
    });


});

$(function(){
    $(".alert").hide();
    $(".submit").click(function(){
        var sendFlag = true;
        if(!$("#name").val()){
            $("#nameSection .alert").show();
            sendFlag = false;
        }else{
            $("#nameSection .alert").hide();
        }

        if(!$("#kana").val()){
            $("#kanaSection .alert").show();
            sendFlag = false;
        }else{
            $("#kanaSection .alert").hide();
        }

        if($("select").val() == "none"){
            $("#timeSection .alert").show();
            sendFlag = false;
        }else{
            $("#timeSection .alert").hide();
        }

        if($("select").val() == "none"){
            $("#peopleSection .alert").show();
            sendFlag = false;
        }else{
            $("#peopleSection .alert").hide();
        }

        var radioChk = $('input[name="radio"]:checked').length;
        if (radioChk == 0) {
            $("#sheetSection .alert").show()
            sendFlag = false;
        } else {
            $("#sheetSection .alert").hide();
        }
        
        if(!$("#email").val()){
            $("#mailSection .alert").show();
            sendFlag = false;
        }else{
            $("#mailSection .alert").hide();
        }

        if(!$("#tel").val()){
            $("#telSection .alert").show();
            sendFlag = false;
        }else{
            $("#telSection .alert").hide();
        }

        if (sendFlag == false) {
            return false;
        }
    });
});

