//choosing portfolio filter
$(document).ready(function(){
    
$("#people").click(function(){
        $(".people").show();
        $(".places").hide();
        $(".digital").hide();
});

$("#places").click(function(){
        $(".places").show();
        $(".people").hide();
        $(".digital").hide();
});

$("#digital").click(function(){
        $(".digital").show();
        $(".people").hide();
        $(".places").hide();
});
});

