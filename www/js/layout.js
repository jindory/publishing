// ie check
var _ua = navigator.userAgent.toLowerCase();
if(_ua.match(/trident\/(\d.\d)/i)){
   var ieCheck = _ua.match(/trident\/(\d.\d)/i)[1];
}
var ie8Check = _ua.match(/msie [7]/i) || _ua.match(/msie [8]/i);
var ie9Check = _ua.match(/msie [9]/i);
var ie10Check = _ua.match(/msie [10]/i);
var ie11Check = ieCheck=="7.0";

// Scroll Move
function scrollMove(t,h){
	"use strict";
	if(h==undefined) h=0;
	var o = jQuery('body');
	if(navigator.userAgent.toLowerCase().match(/trident/i)){
		o = jQuery('html');
	}
	o.animate({
		scrollTop:jQuery(t).offset().top-h
	},500);
}


// Menu Open
function menuOpen(o){
	jQuery('#wrap').append('<button type="button" id="sidebar_tg" onclick="menuClose();"><b class="sr-only">Close</b></button>');
	var a = -jQuery(window).scrollTop();
	jQuery('body').addClass('nav_open');
	jQuery('#wrap').css('top',a);
	setTimeout(function(){
		jQuery('#'+o).show(0,function(){
			jQuery('body').addClass('snb_open');
		});
	},60);
}

// Menu Close
function menuClose(){
	jQuery('body').removeClass('snb_open');
	jQuery('#sidebar_tg').remove();
	setTimeout(function(){
		jQuery('body').removeClass('nav_open');
		jQuery(window).scrollTop(-jQuery('#wrap').position().top);
		jQuery('#wrap').removeAttr('style');
		jQuery('.side_nav').hide();
	},510);
}


jQuery(function($){
	"use strict";
	var w = $(window);
	var $body = $('body');

// bootstrap
	$('[data-toggle="tooltip"]').tooltip();

// scroll
	w.scroll(function(){
		if(w.width()<993){
			return;
		}
		if(w.scrollTop()>105){
			$body.addClass('if_scroll');
		} else {
			$body.removeClass('if_scroll');
		}
	});

// Menu Open
$('#mTg').click(function(){
	if($('body').hasClass('nav_open')){
		menuClose();
	} else {
		menuOpen('snb');
	}
	return false;
});

// GNB
	var gnb = $('#gnb');
	gnb.find('a').hover(function(){
		$(this).parent().siblings().find('.xe-widget-wrapper').hide();
		$(this).next('div').show();
	})
	.focus(function(){
		$(this).parent().siblings().find('.xe-widget-wrapper').hide();
		$(this).next('div').show();
	});
	gnb.mouseleave(function(){
		$(this).find('.xe-widget-wrapper').hide();
	});

// sns
	$('div.to_sns a').click(function(){
		var t = $(this);
		var type = t.data('type');
		var p = t.parent();
		var href = p.data('url');
		var permanentUrl = p.data('permanenturl');
		var title = p.data('title');
		var img = $('article.article img:first').attr('src');
		var loc = '';
		if(!type){
			return;
		} else if(type==="facebook"){
			loc = '//www.facebook.com/sharer/sharer.php?u='+href+'&t='+title;
		} else if(type==="twitter"){
			loc = '//twitter.com/home?status='+encodeURIComponent(title)+' '+href;
		} else if(type==="google"){
			loc = '//plus.google.com/share?url='+href;
		} else if(type==="pinterest"){
			if(!img){
				alert('No Image!');
				return false;
			}
			loc = '//www.pinterest.com/pin/create/button/?url='+href+'&media='+img+'&description='+encodeURIComponent(title);
		} else if(type==="kakaostory"){
			loc = 'https://story.kakao.com/share?url='+encodeURIComponent(href);
		} else if(type==="band"){
			loc = 'http://www.band.us/plugin/share?body='+encodeURIComponent(title)+'%0A'+encodeURIComponent(href);
		} else if(type==="kakao"){
			if(img){
				Kakao.Link.sendTalkLink({
					label:title,
					image:{
						src:img,
						width: '300',
						height: '200'
					},
					webLink:{
						text:permanentUrl,
						url:href
					}
				});
			} else {
				Kakao.Link.sendTalkLink({
					label:title,
					webLink:{
						text:permanentUrl,
						url:href
					}
				});
			}
			return false;
		}
		window.open(loc);
		return false;
	});

// ie8 bg
	if(ie8Check){
		$('.sect').each(function(){
			var img = String($(this).css('background-image')).split('.kr/')[1].split('"')[0];
			$(this).prepend('<div class="bg_full"><img src="'+img+'"></div>').css('background-image','');
		});
	}
});