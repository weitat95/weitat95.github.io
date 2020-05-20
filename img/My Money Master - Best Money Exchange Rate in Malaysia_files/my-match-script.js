		$(document).ready(function() {
		    $(".service-section-field").mouseenter(function() {
				var service_wrap2_height=$(".service-wrap2").height();
		        /*var service_sec_height=$(".service-section-field").innerHeight();
		        $(this).find(".service-hover, .service-wrap1").css({"height":service_sec_height});*/
		        $(this).find(".service-wrap1").addClass("service-hover-content-wrap");	
			    $(this).find(".service-wrap1").css({"height":service_wrap2_height});
		        $(this).find(".service-wrap2").addClass("service-hover-content-inner");
				
				
				
				
		        $(this).find(".service-hover").fadeIn();


		    });

		    $(".service-section-field").mouseleave(function() {
				 $(this).find(".service-wrap1").css({"height":"100%"});
		        $(this).find(".service-wrap1").removeClass("service-hover-content-wrap");
		        $(this).find(".service-wrap2").removeClass("service-hover-content-inner");
		        $(this).find(".service-hover").fadeOut();

		    });

		    /** scroll**/
		    (function($) {
		        $(function() {
		            $("#scroller").simplyScroll({
		                auto: true,
		                manualMode: 'loop',
		                autoMode: 'loop',
		                auto: true,
						frameRate:60

		            });

		        });
		    })(jQuery);

		    /** scroll end**/


		    /** animate  **/
		    jQuery(function($) {

		        // Function which adds the 'animated' class to any '.animatable' in view
		        var doAnimations = function() {

		            // Calc current offset and get all animatables
		            var offset = $(window).scrollTop() + $(window).height(),
		                $animatables = $('.animatable');

		            // Unbind scroll handler if we have no animatables
		            if ($animatables.size() == 0) {
		                $(window).off('scroll', doAnimations);
		            }

		            // Check all animatables and animate them if necessary
		            $animatables.each(function(i) {
		                var $animatable = $(this);
		                if (($animatable.offset().top + $animatable.height() - 20) < offset) {
		                    $animatable.removeClass('animatable').addClass('animated');
		                }
		            });

		        };

		        // Hook doAnimations on scroll, and trigger a scroll
		        $(window).on('scroll', doAnimations);
		        $(window).trigger('scroll');

		    });
		    /** animate  **/


		    /** map hover section **/
		    $(".map-section").mouseenter(function() {
		        $(this).find(".large-map-section").fadeIn();

		    });
		    $(".map-section").mouseleave(function() {
		        $(this).find(".large-map-section").fadeOut();

		    });

		    /** map hover section **/
		/** slide text effects **/
		 /* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
(function( $ ) {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
	
})(jQuery);
$('.carousel').carousel({
  interval: 1000 * 10
});
		/** slide text effects end**/


		});
		
		$(window).load(function(){
		$(".jvectormap-zoomin").html('<img alt="zoom-icon" src="http://www.mymoneymaster.com.my/images/zoom-in.png">');
		$(".jvectormap-zoomout").html('<img alt="zoom-icon" src="http://www.mymoneymaster.com.my/images/zoom-out.png">');	
		});
		
		