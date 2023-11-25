// $("#icon-menu").on("click",function(){
//     $(".nav-menu").removeClass("close-menu");
// })

// $(".icon-close").on("click", function(){
//     $(".nav-menu").addClass("close-menu");
// })

$(".toggle-menu").on("click",function(){
    $(".nav-menu").toggleClass("close-menu");
    $("#overlayout").toggleClass("close-menu");
    $("#overlayout").toggleClass("overlay")
})

$("summary").on("click", function(){
    var arrowSrc = $(this).find("img").attr('src');
    if(arrowSrc ==="./images/icon-arrow-down.svg"){
        $(this).find("img").attr('src',"./images/icon-arrow-up.svg");
    }else{
        $(this).find("img").attr('src',"./images/icon-arrow-down.svg");
    }
})