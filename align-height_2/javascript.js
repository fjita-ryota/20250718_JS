$(function(){
    //高さの最大値を代入する端の変数ｈ
    let h =0;

    //それぞれの要素の高さを調べる
    $("main div").each(function (){
        // それぞれの高さを調べる
        if($(this).height() > h) {
            h=$(this).height();
        }
    });

    //
    $("main div").css("height" , h + "px");
});