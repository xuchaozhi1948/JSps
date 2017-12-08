$(function(){
$('.fhsy').click(function () {
    location.href="index.html";
});

let arr=$('.ejnav-box').find('a');
// let arr2=$('.num');
    $.each(arr,function (index) {
        arr.eq(index).click(function(){
            let indexs=index;
            let url = "xwzx.html?name="+indexs;

            window.location = url ;

            // location.href="dtjs.html"+$(this);
            arr.css("border-bottom","");
            arr.eq(index).css("border-bottom","4px solid #dbb866");
            // arr2.removeClass("xss").addClass("xsl");
            // arr2.eq(index).removeClass("xsl").addClass("xss");
        })
    })





});