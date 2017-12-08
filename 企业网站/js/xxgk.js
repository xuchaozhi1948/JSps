$(function(){
$('.fhsy').click(function () {
    location.href="index.html";
});

let arr=$('.ejnav-box').find('a');
let arr2=$('.num');
console.log(arr2)
    $.each(arr,function (index) {
        arr.eq(index).click(function(){
            arr.css("border-bottom","");
            arr.eq(index).css("border-bottom","4px solid #dbb866");
            arr2.removeClass("xss").addClass("xsl");
            arr2.eq(index).removeClass("xsl").addClass("xss");
        })
    })

    var url = window.location.search;
    var request = new Object();
    if(url.indexOf("?")!=-1){  <!--判断是否存在，如果返回-1，则表明不存在-->
        var str = url.substr(1);   <!--从第1个字符开始截取-->
        var strs = str.split("&");<!--表示以“&’”为分隔符进行分隔，返回的是一个数组-->
        for(var i=0;i<strs.length;i++){
            request[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
        }
    }
    if(request["name"]==0){
        arr.css("border-bottom","");
        arr.eq(0).css("border-bottom","4px solid #dbb866");
        arr2.removeClass("xss").addClass("xsl");
        arr2.eq(0).removeClass("xsl").addClass("xss");
    }
    if(request["name"]==1){
        arr.css("border-bottom","");
        arr.eq(1).css("border-bottom","4px solid #dbb866");
        arr2.removeClass("xss").addClass("xsl");
        arr2.eq(1).removeClass("xsl").addClass("xss");
    }
    if(request["name"]==2){
        arr.css("border-bottom","");
        arr.eq(2).css("border-bottom","4px solid #dbb866");
        arr2.removeClass("xss").addClass("xsl");
        arr2.eq(2).removeClass("xsl").addClass("xss");
    }
    if(request["name"]==3){
        arr.css("border-bottom","");
        arr.eq(3).css("border-bottom","4px solid #dbb866");
        arr2.removeClass("xss").addClass("xsl");
        arr2.eq(3).removeClass("xsl").addClass("xss");
    }

console.log(request["name"])

});