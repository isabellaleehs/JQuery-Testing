$(document).ready(function(){
    $('div').mouseenter(function(){
        $(this).fadeTo('fast', 1);
    });   
    $('div').mouseleave(function(){
        $(this).fadeTo('fast', 0.5);
    });
    $('button').click(function() {
        $('div').fadeOut('slow');
    });
});
