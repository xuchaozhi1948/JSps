jQuery(function($) {
    // 侧导航
    $('.cenav-box').find('li').on('mousemove',function () {
        $(this).find($('.cenav-xxklb')).removeClass("none").addClass("black");
    })
    $('.cenav-box').find('li').on('mouseout',function () {
        $(this).find($('.cenav-xxklb')).removeClass("black").addClass("none");
    })
    //购物车
    $('.gouwuche').find('div').on('mousemove',function () {
        $('.gouwu').css("height","100px");
    })
    $('.gouwuche').find('div').on('mouseout',function () {
        $('.gouwu').css("height","0px");
    })
    //导航下拉
    let arr5 = $(".xiala-kuan");
    let arr3 = $(".xiala-kuan").find('.nav-xiala');
    let arr4 = $('.nav-center').find('li');
    // console.log(arr4);
    $.each(arr4, function (index) {
        if(index!=7&&index!=8) {
            arr4.eq(index).on('mousemove', function () {
                arr5.css("height", "220px");
                arr3.eq(index).css("height", "220px");
                arr4.find("a").css("color","");
                arr4.find("a").eq(index).css("color","#ff6700");

            })
            arr4.eq(index).on('mouseout', function () {
                arr5.css("height", "0px");
                arr3.eq(index).css("height", "0px");
                // arr4.eq(index).find("a").css("color","");

            })
            arr3.eq(index).on('mousemove', function () {
                arr5.css("height", "220px");
                arr3.eq(index).css("height", "220px");

            })
            arr3.eq(index).on('mouseout', function () {
                arr5.css("height", "0px");
                arr3.eq(index).css("height", "0px");

            })
            arr3.on('mouseleave', function () {
                arr4.find("a").eq(index).css("color","");


            })

        }
    });
    // 家电栏目
    let arr1 = $(".shuliefy");
    let arr2 = $('.erjidh1').find('li');
    $.each(arr2, function (index) {
        arr2.eq(index).on('mousemove', function () {
            arr2.find("a").css("border-bottom","");
            arr2.find("a").eq(index).css("border-bottom","2px solid #ff6700");
            arr1.removeClass("black").addClass("none");
            arr1.eq(index).removeClass("none").addClass("black");
        })
    });
    //其余
    let aaa1 = $(".zndahezi:first").find(".zhineng");
    let aaa2 = $('.erjidh2:first').find('li');
    $.each(aaa2, function (index) {
        aaa2.eq(index).on('mousemove', function () {
            aaa2.find("a").css("border-bottom","");
            aaa2.find("a").eq(index).css("border-bottom","2px solid #ff6700");
            aaa1.removeClass("black").addClass("none");
            aaa1.eq(index).removeClass("none").addClass("black");
        })
    });
    let aaa3 = $(".zndahezi:eq(1)").find(".zhineng");
    let aaa4 = $('.erjidh2:eq(1)').find('li');
    $.each(aaa4, function (index) {
        aaa4.eq(index).on('mousemove', function () {
            aaa4.find("a").css("border-bottom","");
            aaa4.find("a").eq(index).css("border-bottom","2px solid #ff6700");
            aaa3.removeClass("black").addClass("none");
            aaa3.eq(index).removeClass("none").addClass("black");
        })
    });
    let aaa32 = $(".zndahezi:eq(2)").find(".zhineng");
    let aaa42 = $('.erjidh2:eq(2)').find('li');
    $.each(aaa42, function (index) {
        aaa42.eq(index).on('mousemove', function () {
            aaa42.find("a").css("border-bottom","");
            aaa42.find("a").eq(index).css("border-bottom","2px solid #ff6700");
            aaa32.removeClass("black").addClass("none");
            aaa32.eq(index).removeClass("none").addClass("black");
        })
    });
    let aaa33 = $(".zndahezi:eq(3)").find(".zhineng");
    let aaa43 = $('.erjidh2:eq(3)').find('li');
    $.each(aaa43, function (index) {
        aaa43.eq(index).on('mousemove', function () {
            aaa43.find("a").css("border-bottom","");
            aaa43.find("a").eq(index).css("border-bottom","2px solid #ff6700");
            aaa33.removeClass("black").addClass("none");
            aaa33.eq(index).removeClass("none").addClass("black");
        })
    });
    let aaa34 = $(".zndahezi:eq(4)").find(".zhineng");
    let aaa44 = $('.erjidh2:eq(4)').find('li');
    $.each(aaa44, function (index) {
        aaa44.eq(index).on('mousemove', function () {
            aaa44.find("a").css("border-bottom","");
            aaa44.find("a").eq(index).css("border-bottom","2px solid #ff6700");
            aaa34.removeClass("black").addClass("none");
            aaa34.eq(index).removeClass("none").addClass("black");
        })
    });

    //banner
    let boxs = $(".banner-box");
    let boxli= $(".banner-box>li");
    let dianli= $(".banner-dian>li");
    let ybs=$(".banner-you");
    let zbs=$(".banner-zuo");

    let t=setInterval(fn, 3000);
    boxs.on('mousemove',function () {
        clearInterval(t);
    });
    boxs.on('mouseout',function () {
        t=setInterval(fn, 3000);
    });
    let flag = true;
    let num=0;
    ybs.on('click',function () {
        if (flag) {
            fn();
            flag = false;
        }
    });
    zbs.on('click',function () {
        if (flag) {
            fn1();
            // flag = false;
        }
    });

    function fn(){
        num++;
        if (num==boxli.length) {
            num=0;
        }

        boxli.attr('id',"");
        dianli.css('background',"");
        flag = true;

        boxli.eq(num).attr('id',"xianshi");
        dianli.eq(num).css('background',"#f5f5f5");

    }

    function fn1(){
        flag = true;

        num--;
        if (num==-1) {
            num=dianli.length-1;
        }
        boxli.attr('id',"");
        dianli.css('background',"");

        boxli.eq(num).attr('id',"xianshi");
        dianli.eq(num).css('background',"#f5f5f5");

    }

    $.each(boxli,function (index) {
        dianli.eq(index).on('click',function(){
            boxli.eq(index).attr('id',"xianshi");
            dianli.eq(index).css('background',"#f5f5f5");
            boxli.eq(num).attr('id',"");
            dianli.eq(num).css('background',"");
            num=index;
        })
    })





        neirong($(".neirong-kuan:eq(0)"),$(".neirong-dian:eq(0)"),$(".nrbs-zuo:eq(0)"),$(".nrbs-you:eq(0)"));


        neirong($(".neirong-kuan:eq(1)"),$(".neirong-dian:eq(1)"),$(".nrbs-zuo:eq(1)"),$(".nrbs-you:eq(1)"));

        neirong($(".neirong-kuan:eq(2)"),$(".neirong-dian:eq(2)"),$(".nrbs-zuo:eq(2)"),$(".nrbs-you:eq(2)"));


        neirong($(".neirong-kuan:eq(3)"),$(".neirong-dian:eq(3)"),$(".nrbs-zuo:eq(3)"),$(".nrbs-you:eq(3)"));


    function neirong(a1,b1,c1,d1){
        let zBox=a1.find(".neirong-xbox");
        let zDian=b1.find("li");
        let xZbs=c1;
        let xYbs=d1;
        xYbs.on('click',function () {
            if (flag) {
                Zfu();
            }
        });
        xZbs.on('click',function () {
            if (flag) {
                Zfu1();
            }
        });

        let xz = xyg = 0;
        let flag =true;

        // let zT=setInterval(Zfu, 3000);

        function Zfu(){

            if (xyg==zBox.length-1) {
                return;
            }
            xyg++;
            zBox.eq(xyg).css("left","296px");

            zBox.eq(xz).animate({left:"-296"},200);
             $.each(zBox,function (index) {
                 zDian.eq(index).css("background", "#b0b0b0");
                 zDian.eq(index).css("border", "2px solid #ffffff");
             })

                zDian.eq(xyg).css("background", "#ffffff");
                 zDian.eq(xyg).css("border", "2px solid #ff7600");
                 flag = true;
                 zBox.eq(xyg).animate({left: "0"},200);
                 xz = xyg;
        }
        function Zfu1(){

            if (xyg == 0) {
                return;
            }
            xyg--;
            zBox.eq(xyg).css("left","-296px");

            zBox.eq(xz).animate({left:"296"},200)
            $.each(zBox,function (index) {
                zDian.eq(index).css("background", "#b0b0b0");
                zDian.eq(index).css("border", "2px solid #ffffff");
            })

            zDian.eq(xyg).css("background", "#ffffff");
                zDian.eq(xyg).css("border", "2px solid #ff7600");
                flag = true;
                zBox.eq(xyg).animate({left: "0"},200);
                xz = xyg;
        }


        $.each(zBox,function (index) {
            zDian.eq(index).on('click',function () {
                if (index == xz) {
                    return;
                }
                else if (index < xz) {
                    zBox.eq(xz).animate({left: "296"});
                    zBox.eq(index).animate({left: "0"});
                    $.each(zBox,function (inx) {
                        zDian.eq(inx).css("background","#b0b0b0");
                        zDian.eq(inx).css("border","2px solid #ffffff");
                    })
                    zDian.eq(index).css("background","#ffffff");
                    zDian.eq(index).css("border","2px solid #ff7600");
                }else if (index > xz) {
                zBox.eq(xz).animate({left:"-296"});
                zBox.eq(index).animate({left:"0"});
                    $.each(zBox,function (inx) {
                        zDian.eq(inx).css("background","#b0b0b0");
                        zDian.eq(inx).css("border","2px solid #ffffff");
                    })
                    zDian.eq(index).css("background","#ffffff");
                    zDian.eq(index).css("border","2px solid #ff7600");
                }
                xyg = xz = index;
                })
            })
        }


//获取按钮【0】【1】
    let btnL=$("button:first");
    let btnR=$("button:last");
    let kuaN=$(".gd-tuk");
    //获取图的数量
    let tusu=kuaN.find('li').length;

    let tukuan=kuaN.find('li').eq(0).outerWidth(true);







    //左边给disabled属性一个disabled属性值【禁用这个值】
    btnL.attr("disabled","disabled");
    let nums = 0;
    //点击
    btnR.on('click',function(){
        if (nums==1) {
            return;
        }
        nums++;

        kuaN.css('transform',`translateX(${-1240*nums}px)`);
        btnL.css('color',"#ff6700");
        btnR.css('color',"#808080");
        btnL.css('background',"");
        //删除左边的disabled属性【启用这个值】
        btnL.removeAttr("disabled");
        //右边给disabled属性一个disabled属性值【禁用这个值】
        btnR.attr("disabled","disabled");

    })

    btnL.on('click',function(){
        if (nums==0) {
            return;
        }
        nums--;

        kuaN.css('transform',`translateX(${-1240*nums}px)`);
        btnR.css('color',"#ff6700");
        btnL.css('color',"#808080");
        btnR.css('background',"");
        //删除右边的disabled属性【启用这个值】
        btnR.removeAttr("disabled");

    })




});























