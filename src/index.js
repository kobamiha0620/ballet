import './style.scss';

$(function(){
    load_effect();
    $(window).scroll(function (){
        scroll_effect();
    });
});
 
//ふわっとロード
function load_effect(){
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    console.log(tt);
    console.log(hh);

    $('.load-fade').each(function(){
        var yy = $(this).offset().top;
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
    $('.load-fade2').each(function(){
        var yy = $(this).offset().top;
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
    $('.load-fade3').each(function(){
        var yy = $(this).offset().top;
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
    $('.load-up').each(function(){
        var yy = $(this).offset().top;
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
}
 
//ふわっとスクロール
function scroll_effect(){
    var tt = $(window).scrollTop();
    var hh = $(window).height();
    $('.scroll-fade').each(function(){
        var yy = $(this).offset().top+380;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
    $('.scroll-fade2').each(function(){
        var yy = $(this).offset().top+480;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
    $('.scroll-fade3').each(function(){
        var yy = $(this).offset().top+580;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
    $('.scroll-up').each(function(){
        var yy = $(this).offset().top+400;//効果発生開始タイミングを操作したい場合は数値を変更する
        if (tt > yy - hh){
            $(this).addClass('done');
        }
    });
}


const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
       let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 0;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }