// Scroll Move
function scrollMove(t,h,m){
	"use strict";
	if(h==undefined) h=0;
	if(m!=undefined && jQuery(window).width()<993) h=m;
		var o = jQuery('html, body');
	if(navigator.userAgent.toLowerCase().match(/trident/i)){
		o = jQuery('html');
	}
	o.animate({
		scrollTop:jQuery(t).offset().top-h
	},500);
}

jQuery(function($){
	"use strict";
	var w = $(window);
	var $body = $('body');

// scroll
	w.scroll(function(){
		var sT = w.scrollTop();
		if(sT>0){
			$body.addClass('if_scroll');
		} else {
			$body.removeClass('if_scroll');
		}
	});
// GNB
	var gnb = $('#gnb');
	var gLi = gnb.find('>ul>li');
	function gnbToggle(){
		var t = $(this);
		var n = t.nextAll('ul');
		if(n.is(':hidden')){
			gnb.addClass('open');
			t.parent().parent().find('>li>ul').hide();
			n.slideDown(150);
		}
	}
	function gnbOut(){
		$(this).find('>ul').hide();
		gnb.removeClass('open');
	}
	gLi.find('>a').mouseover(gnbToggle).focus(gnbToggle);
	gLi.mouseleave(gnbOut);
	gnb.find('>li:last-child a:last').blur(function(){
		$(this).parents('ul').hide();
	});

// slider : http://bxslider.com/
	$('.card_bn>ul').bxSlider({
		controls:false
	});
	$('.view_lst>ul').bxSlider({
		pager:false,
		minSlides:3,
		maxSlides:3,
		slideWidth:235,
		slideMargin:48
	});

// ftNotice
	$('#ftNotice ul').bxSlider({
		pager:false,
		controls:false,
		mode:'vertical',
		auto:true,
		autoHover:true
	});
});