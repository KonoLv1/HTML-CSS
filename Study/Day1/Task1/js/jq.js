/*スライドショー*******************************************************************/

$(function(){

  var $width =1300;
  var $height =669;
  var $interval = 4000;
  var $fade_speed = 500;

  $("#slide ul li").css({
    "position":"relative",
    "overflow":"hidden",
    "width":$width,
    "height":$height
  });

  $("#slide ul li").hide().css({
    "position":"absolute",
    "top":0,"left":0
  });

  $("#slide ul li:first").addClass(
    "active"
  ).show();

  setInterval(function(){

    var $active = $("#slide ul li.active");
    var $next = $active.next("li").length?$active.next("li"):$("#slide ul li:first");

    $active.fadeOut($fade_speed).removeClass("active");
    $next.fadeIn($fade_speed).addClass("active");
  },$interval);
});

/*ヘッダー右一覧*******************************************************************/
$(function(){

  $('#nav1 li.menu')
  .on('mouseover', function(){
      $('div#migiheadar').stop(true).animate({
        'margin-top':'-10px'
      },300,'swing');
  })

  .on('mouseout', function(){
    $('div#migiheadar').stop(true).animate({
      'margin-top':'-50px'
    },300,'swing');
  });
});

/*ヘッダー左一覧*******************************************************************/

$(function(){

  $('#nav1 li.menutop')
  .on('mouseover', function(){
      $('div#hidariheader').stop(true).animate({
        'margin-top':'-10px'
      },300,'swing');
  })
  .on('mouseout', function(){
    $('div#hidariheader').stop(true).animate({
      'margin-top':'-50px'
    },300,'swing');
  });
});

/*二枚画像切り替わり（ヘッダー）*******************************************************************/

$(function(){

  $('#nav1 li')
  .on('mouseover', function(){
      var $btn = $(this).stop(true).animate({
      }, 300);
      $btn.find('img:first-child').stop(true).animate({
        opacity: 0,
      }, 300);
      $btn.find('img:nth-child(2)').stop(true).animate({
        opacity: 1,
      }, 300,'swing');
  })

  .on('mouseout', function(){
      var $btn = $(this).stop(true).animate({
      }, 300);
      $btn.find('img:first-child').stop(true).animate({
        opacity: 1
      }, 300,'swing');
  });
});

/*二枚画像切り替わり（一覧）*******************************************************************/

$(function(){
  $('div.boxE')

  .on('mouseover', function(){
      var $btn = $(this).stop(true).animate({
      }, 300);
      $btn.find('img:first-child').stop(true).animate({
        opacity: 0,
      }, 300);
      $btn.find('img:nth-child(2)').stop(true).animate({
        opacity: 1,
      }, 300,'swing');
  })

  .on('mouseout', function(){
      var $btn = $(this).stop(true).animate({
      }, 300);
      $btn.find('img:first-child').stop(true).animate({
        opacity: 1
      }, 300,'swing');
  });
});

/*モーダルを開く*******************************************************************/

$(function(){
    // 「.modal-open」をクリック
    $('.modal-open').click(function(){
        // オーバーレイ用の要素を追加
        $('body').append('<div class="modal-overlay"></div>');
        // オーバーレイをフェードイン
        $('.modal-overlay').fadeIn('slow');
        // モーダルコンテンツのIDを取得
        var modal = '#' + $(this).attr('data-target');
        // モーダルコンテンツの表示位置を設定
        modalResize();
         // モーダルコンテンツフェードイン
        $(modal).fadeIn('slow');
        $('.modal-overlay, .modal-close').off().click(function(){
            // モーダルコンテンツとオーバーレイをフェードアウト
            $(modal).fadeOut('slow');
            $('.modal-overlay').fadeOut('slow',function(){
                // オーバーレイを削除
                $('.modal-overlay').remove();
            });
        });
        // リサイズしたら表示位置を再取得
        $(window).on('resize', function(){
            modalResize();
        });
        // モーダルコンテンツの表示位置を設定する関数
        function modalResize(){
            // ウィンドウの横幅、高さを取得
            var w = $(window).width();
            var h = $(window).height();
            // モーダルコンテンツの表示位置を取得
            var x = (w - $(modal).outerWidth(true)) / 2;
            var y = (h - $(modal).outerHeight(true)) / 2;
            // モーダルコンテンツの表示位置を設定
            $(modal).css({'left': x + 'px','top': y + 'px'});
        }
    });
});

/*ボタン（上に戻る）*******************************************************************/

$(function() {
  $(".back a").click(function(event){
   event.preventDefault();

   var url = this.href;

   var parts = url.split("#");
   var target = parts[1];

   var target_offset = $("#"+target).offset();
   var target_top = target_offset.top;

   $('html, body').animate({scrollTop:target_top - 80}, 1000);
   });
 });

 $(function() {
    var topBtn = $('.back');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});
