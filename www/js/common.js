// Scroll Move
function scrollMove(t,h,m){
	"use strict";
	if(h==undefined) h=0;
	if(m!=undefined && jQuery(window).width()<993) h=m;
	var o = jQuery('body');
	if(navigator.userAgent.toLowerCase().match(/trident/i)){
		o = jQuery('html');
	}
	o.animate({
		scrollTop:jQuery(t).offset().top-h
	},500);
}

// Menu Open
function menuOpen(){
	if($('body').hasClass('mk-opened-nav')){
		$('body').removeClass('mk-opened-nav');
		$('#mMn').slideUp(500);
	} else {
		$('body').addClass('mk-opened-nav');
		$('#mMn').slideDown(500);
	}
}

jQuery(function($){
	"use strict";
	var w = $(window);
	var $body = $('body');

// GNB
	var gnb = $('#gnb');
	var gLi = gnb.find('li');
	function gnbToggle(){
		var t = $(this);
		t.find('.caret').addClass('fa-flip-vertical');
		var n = t.nextAll('ul');
		if(n.is(':hidden') || n.length===0) {
			t.parent().parent().find('>li>ul').hide();
			n.slideDown(150);
		}
	}
	function gnbOut(){
		$(this).find('>ul').hide();
		$(this).find('.caret').removeClass('fa-flip-vertical');
	}
	gLi.find('>a').mouseover(gnbToggle).focus(gnbToggle);
	gLi.mouseleave(gnbOut);
	gnb.find('>li:last-child a:last').blur(function(){
		$(this).parents('ul').hide();
	});

	$('#mNav>ul>li>a').click(function(){
		$(this).find('.caret').toggleClass('fa-flip-vertical').end().next().slideToggle(150);
		return false;
	});
});