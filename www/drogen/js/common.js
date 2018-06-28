function scrollMove(t,h){
	"use strict";
	if(h===undefined){
		h=0;
	}
	var o = $('body,html');
	o.animate({
		scrollTop:$(t).offset().top-h
	},500);
}

jQuery(function($){
	"use strict";
	var w = $(window);
	var $body = $('body');
	
// scroll
	w.scroll(function(){
		if(w.scrollTop()>70){
			$body.addClass('if_scroll');
		} else {
			$body.removeClass('if_scroll');
		}
	});
});



jQuery(function($){
	"use strict";
	var w = $(window);
	var $body = $('body');
	var wrap = $('#wrap');
	var subSnb = $('#subSnb');
    
// Parallax
	var bgRatioDefault = 20/15;
	var tD = 100;
	var wW = w.width();
	var hGap = 70;
});

jQuery(function($){
	"use strict";
	var w = $(window);
	var $body = $('body');
	var wrap = $('#wrap');

/* Parallax */
	var bgRatioDefault = 19/15;
	if(w.width()<769){
		var tD = 0;
		var hGap = 40;
	} else {
		var tD = 200;
		var hGap = 90;
	}

// scroll
	var id = 'px1';
	function scrollSection(){
		wrap.find('div.px_sect').each(function(){
			var t = $(this);
			var tT = t.offset().top;
			var tH = t.innerHeight();
			var sT = w.scrollTop();
			var wH = w.height();
			if(t.attr('data-delay')){
				tD = t.attr('data-delay');
			}
			// intro animation
			if(tT-wH<sT-tD && tT+tH>sT){
				t.find('.animated').removeClass('ani_stop');
			} else {
				t.find('.animated').addClass('ani_stop');
			}
		});
	}
	w.on("scroll",function(){
		scrollSection();
	});
	scrollSection();
});

