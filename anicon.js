$(function(){
    var transitionEnd = function() {
         var el = document.createElement("div");
         var transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd',
               'MozTransition' : 'transitionend',
               'OTransition' : 'oTransitionEnd otransitionend',
               'transition' : 'transitionend'
         };
        for(var name in transEndEventNames){
             if(el.style[name] !== undefined){
                   return {
                         end : transEndEventNames[name]
                   };
             }
        }
    };
    var handler1 = function() {
        $('.icon-burger').removeClass('active').removeClass('normal');
    };
    $('.icon-burger').click(function(){
        if ($(this).hasClass('active')) {
            var $that = $(this);
            $that.addClass('normal');
            $that[0].addEventListener(transitionEnd().end, handler1);
        } else {
            var $that = $(this);
            $that[0].removeEventListener(transitionEnd().end, handler1);
            $that.addClass('active');
        }
    });
    $('.icon-burger-close').click(function(){
        $(this).toggleClass('active');
    });
    var handler2 = function() {
        $('.icon-burger-circle').removeClass('active').removeClass('normal');
    };
    $('.icon-burger-circle').click(function(){
        if ($(this).hasClass('active')) {
            var $that = $(this);
            $that.addClass('normal');
            $('.icon-burger-circle .icon-burger-circle-close .line-3')[0].addEventListener(transitionEnd().end, handler2);
        } else {
            var $that = $(this);
            $('.icon-burger-circle .icon-burger-circle-close .line-3')[0].removeEventListener(transitionEnd().end, handler2);
            $that.addClass('active');
        }
    });
    var handler3 = function() {
        $('.icon-pause-stop-play').removeClass('play').removeClass('stop').removeClass('pause');
    };
    $('.icon-pause-stop-play').click(function(){
        if ($(this).hasClass('play')) {
            var $that = $(this);
            $(this).addClass('pause');
            $that[0].addEventListener(transitionEnd().end, handler3);
        } else if ($(this).hasClass('stop')){
            $(this).addClass('play');
        } else {
            var $that = $(this);
            $that[0].removeEventListener(transitionEnd().end, handler3);
            $that.addClass('stop');
        }
    });

    var handler4 = function() {
        $('.icon-close-plus-confirm').removeClass('confirm').removeClass('plus').removeClass('close');
    };
    $('.icon-close-plus-confirm').click(function(){
        if ($(this).hasClass('confirm')) {
            var $that = $(this);
            $(this).addClass('close');
            $that.find('.radius-line-1')[0].addEventListener(transitionEnd().end, handler4);
        } else if ($(this).hasClass('plus')){
            $(this).addClass('confirm');
        } else {
            var $that = $(this);
            $that.find('.radius-line-1')[0].removeEventListener(transitionEnd().end, handler4);
            $that.addClass('plus');
        }
    });

    $('.icon-circle-confirm').click(function(){
        $(this).toggleClass('confirm');
    });
});