$(function () {
    // ボタンクリック
    $(".resizer a").click(function() {
        //bosy要素にクラスがついていれば削除
        $("body").removeClass();

        // 選択したサイズボタンのテキスト内夜を取得
        let size = $(this).html();

        if (size == "S"){
            //
            $("body").addClass("fontSmall");
        }else if(size == "M") {
            $("body").addClass("fontMedium");
        } else {  // テキストが「L」の場合
      // body要素に.fontLargeを追加
      $("body").addClass("fontLarge");
    }

        return false;//リンクのデフォルト動作  
    });
});