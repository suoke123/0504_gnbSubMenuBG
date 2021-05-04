$(function(){

    $("#mainMenu>li").mouseover(function(){

        $(".subMenu").stop().slideDown(400);
        $("#bgArea>#subMenuBG").stop().slideDown(400);

    });

    $("#mainMenu>li").mouseout(function(){

        $(".subMenu").stop().slideUp(400);
        $("#bgArea>#subMenuBG").stop().slideUp(400);

    });

});
