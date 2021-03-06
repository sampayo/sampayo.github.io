$(document).ready(function(){
	

	//=================================== Sticky nav ===================================//
	// $("nav").sticky({topSpacing:0});


 	//=================================== Nav Responsive ===================================//
    // $('#menu').tinyNav({
    //    active: 'selected'
    // });

    //=================================== IMAGE HOVER  =================================//

	$('.img-preview').each(function() {

	    $(this).hover(
	    function() {
	        $(this).stop().animate({ opacity: 1.0 }, 300);
	    },
	    function() {
	    	$(this).stop().animate({ opacity: 0 }, 300);
	     })
	});

	//=================================== Subtmit Form  =================================//

	$('#form').submit(function(event) {  
	  event.preventDefault();  
	  var url = $(this).attr('action');  
	  var datos = $(this).serialize();  
	  $.get(url, datos, function(resultado) {  
	    $('#result').html(resultado);  
	  });  
	});  

    //=================================== Accordion  =================================//
	
		$('.accordion-container').hide(); 
		$('.accordion-trigger:first').addClass('active').next().show();
		$('.accordion-trigger').click(function(){
			if( $(this).next().is(':hidden') ) { 
				$(this).parent().find('.accordion-trigger').removeClass('active').next().slideUp();
				$(this).toggleClass('active').next().slideDown();
			}
			return false;
		});


	//=================================== Ligbox  ===================================//
	
	$("a[class*=html_portfolio]").fancybox({		
        'autoScale'     	: true,
        'overlayOpacity'	:	0.7,
		'overlayColor'		:	'#000000',	
		'easingIn'      	: 'easeOutBack',
		'easingOut'     	: 'easeInBack',
		'speedIn' 			: '700',
		'centerOnScroll'	: true,
		'type'				: 'iframe'
	});

	$("a[class*=html_blog]").fancybox({
		'width'				: '65',
		'height'			: '110',		
        'autoScale'     	: true,
        'overlayOpacity'	:	0.7,
		'overlayColor'		:	'#000000',	
		'easingIn'      	: 'easeOutBack',
		'easingOut'     	: 'easeInBack',
		'speedIn' 			: '700',
		'centerOnScroll'	: true,
		'type'				: 'iframe'
	});

	    $("a[class*=fancybox]").fancybox({
		'overlayOpacity'	:	0.7,
		'overlayColor'		:	'#000000',
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'easingIn'      	: 'easeOutBack',
		'easingOut'     	: 'easeInBack',
		'speedIn' 			: '700',
		'centerOnScroll'	: true
	});
	
	$("a[class*='video_lightbox']").click(function(){
		var et_video_href = $(this).attr('href'),
			et_video_link;

		et_vimeo = et_video_href.match(/vimeo.com\/(.*)/i);
		if ( et_vimeo != null )	et_video_link = 'http://player.vimeo.com/video/' + et_vimeo[1];
		else {
			et_youtube = et_video_href.match(/watch\?v=([^&]*)/i);
			if ( et_youtube != null ) et_video_link = 'http://youtube.com/embed/' + et_youtube[1];
		}
		
		$.fancybox({
			'overlayOpacity'	:	0.7,
			'overlayColor'		:	'#000000',
			'autoScale'		: true,
			'transitionIn'	: 'elastic',
			'transitionOut'	: 'elastic',
			'easingIn'      : 'easeOutBack',
			'easingOut'     : 'easeInBack',
			'type'			: 'iframe',
			'centerOnScroll'	: true,
			'speedIn' 			: '700',
			'href'			: et_video_link
		});
		return false;
	});

	//=================================== Tooltips =====================================//

	if( $.fn.tooltip() ) {
		$('[class="tooltip_hover"]').tooltip();
	}

	//=================================== Scroll =====================================//
	
 	function scrollTo(target){
          var targetPosition = $(target).offset().top;
          $('html,body').animate({ scrollTop: targetPosition}, 'slow');
        }
        
});

	$(function() {
      $(".meter > span").each(function() {
        $(this)
          .data("origWidth", $(this).width())
          .width(0)
          .animate({
            width: $(this).data("origWidth")
          }, 1200);
      });
    });

