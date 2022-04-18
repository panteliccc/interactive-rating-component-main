$(document).ready(function(){
    var ind = false ;
    var value;
    $(".rank").click(function(){
        ind = true;
        value = $(this).val();
        $(this).css("background","LightGrey")
    });
    $('.submit').click(function(){
        if(ind) {
            $('.card1').css("display","block");
            $('.card0').css("display","none");
            $('.num').text(value);
        }
    });
});