;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#colorlib-offcanvas, .js-colorlib-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="colorlib-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle colorlib-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#colorlib-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#colorlib-offcanvas').append(clone2);

		$('#colorlib-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#colorlib-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-colorlib-nav-toggle').removeClass('active');
				
	    	}
		});
	};

	var burgerMenu = function() {

		$('body').on('click', '.js-colorlib-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};
	

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".colorlib-loader").fadeOut("slow");
	};


	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};


	var counterWayPoint = function() {
		if ($('#colorlib-counter').length > 0 ) {
			$('#colorlib-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Owl Carousel
	var owlCrouselFeatureSlide = function() {
		var owl = $('.owl-carousel');
		// var owl = $('.owl-carousel');
		owl.owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items:2,
			loop:true,
			margin:10,
			autoplay:true,
			autoplayTimeout:2000,
			autoplayHoverPause:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:4
				}
			}
		});

		// owl.owlCarousel({
		// 	animateOut: 'fadeOut',
		//    animateIn: 'fadeIn',
		// 	autoplay: true,
		// 	items: 1,
		//    loop: true,
		//    margin: 0,
		//    responsiveClass: true,
		//    nav: false,
		//    dots: true,
		//    autoplayHoverPause: true,
		//    smartSpeed: 500,
		//    navText: [
		//       "<i class='icon-arrow-left3 owl-direction'></i>",
		//       "<i class='icon-arrow-right3 owl-direction'></i>"
	    //  	]
		// });

	};

	var bgVideo = function() {
		$('.player').mb_YTPlayer();
	};

	var clickListener = function(){
		$('#transfer').click(function(){
			$('#transfer').addClass("active");
			$('#exchange').removeClass("active");
			$('.content_1').addClass("active");
			$('.content_2').removeClass("active");
		});
		$('#exchange').click(function(){
			$('#exchange').addClass("active");
			$('#transfer').removeClass("active");
			$('.content_2').addClass("active");
			$('.content_1').removeClass("active");
		});
	};

	var smoothGoTo = function(){
		$('.smooth-goto').on('click', function() {  
			$('html, body').animate({scrollTop: $(this.hash).offset().top +parseInt($(this).attr('offset'))}, 500);
			return false;
		});
		$('.smooth-goto2').on('')
	}
	var reviewFill = function(){
		var customer_reviews = [
			{'name': 'Hayden Z',
			 'days': '4 years ago',
			 'like':'55','dislike':'1',
			 'text':'Very easy to use'},
	
			 {'name': 'Jocelin O',
			 'days': '3 years ago',
			 'like':'110','dislike':'2',
			 'text':"I was amazed at the service of CC Exchange. It's all good This is simply unbelievable!"},
	
			 {'name': 'Dove A',
			 'days': '3 years ago',
			 'like':'53','dislike':'10',
			 'text':"Needless to say we are extremely satisfied with the results. Thanks CC Exchange! Just what I was looking for."},
	
			 {'name': 'John Lee',
			 'days': '2 years ago',
			 'like':'41','dislike':'6',
			 'text':'I love NorthBlock Exchange. Recommended.'},
	
			 {'name': 'Mona J',
			 'days': '2 years ago',
			 'like':'77','dislike':'2',
			 'text':'I would like to personally thank you for your outstanding service. Thank you so much for your help.'},
	
			 {'name': 'Stephanie Tan',
			 'days': '2 years ago',
			 'like':'12','dislike':'1',
			 'text':'Thanks North Block for making my life easier.'},
	
			 {'name': 'Laurence',
			 'days': '1 years ago',
			 'like':'5','dislike':'0',
			 'text':'Would recommend North Block to my friends.'},
	
			 {'name': 'Yap KC',
			 'days': '3 months ago',
			 'like':'10','dislike':'1',
			 'text':'Highly Recommended!!'}
		];

		$.each(customer_reviews, function(i, item) {
			var example = $('#review-block').clone();
			example.find('#review-author').text(item.name);
			example.find('#review-time').text(item.days);
			example.find('#review-message').text(item.text);
			$('#review-wrapper').append(example);
		});
	}

	var tableFill = function(){
		var currency_table = [
			{'name': 'Singapore Dollar',
			 'abbv': 'SGD',
			 'credit': '0.3310',
			 'cash':'0.3310',
			 'buy':'3.0603',
			 'sell':'3.0657',
			 'link':'https://www.countryflags.io/sg/flat/64.png'},

			 {'name': 'United Arab Emirates Dirham',
			 'abbv': 'AED',
			 'credit': '0.8600',
			 'cash':'0.8600',
			 'buy' :'116.1417',
			 'sell': '116.3114',
			 'link':'https://www.countryflags.io/ae/flat/64.png'},
			 {'name': 'Chinese Yuan',
			 'abbv': 'CNY',
			 'credit': '1.6610',
			 'cash':'1.6610',
			 'buy': '0.6013',
			 'sell':'0.6025',
			 'link':'https://www.countryflags.io/cn/flat/64.png'},
			 {'name': 'United States Dollar',
			 'abbv': 'USD',
			 'credit': '0.2333',
			 'cash':'0.2333',
			 'buy': '4.42660',
			 'sell': '4.2720',
			 'link':'https://www.countryflags.io/us/flat/64.png'},
			 {'name': 'Malaysian Ringgit',
			 'abbv': 'MYR',
			 'credit': '1.0000',
			 'cash':'1.0000',
			 'buy': '1.0000',
			 'sell': '1.0000',
			 'link':'https://www.countryflags.io/my/flat/64.png'},
			 {'name': 'Vietnamese dong',
			 'abbv': 'VND',
			 'cash': '5,450.8300',
			 'credit': '5,450.8300',
			 'buy':'0.0183',
			 'sell':'0.0184',
			 'link': 'https://www.countryflags.io/vn/flat/64.png'},
			 {'name': 'Myanmar Kyat',
			 'abbv': 'MMK',
			 'cash': '328.5510',
			 'credit': '328.5510',
			 'buy':'0.3049',
			 'sell':'0.3054',
			 'link': 'https://www.countryflags.io/mm/flat/64.png'},
			 {'name': 'New Taiwan Dollar',
			 'abbv': 'TWD',
			 'cash': '6.9700',
			 'credit': '6.9700',
			 'link': 'https://www.countryflags.io/tw/flat/64.png',
			 'buy':'14.3126',
			 'sell': '14.3471'},
			 

		]
		$.each(currency_table, function(i, item){
			var example = $('#curr-table-wrapper1').clone();

			example.find('#abbv-name').text(item.abbv);
			example.find('#full-name').text(item.name);
			example.find('#credit-acc').text(item.credit);
			example.find('#cash-pick').text(item.cash);
			example.find('#url').attr('src',item.link);
			$('#table1').append(example);

			example = $('#curr-table-wrapper2').clone();
			example.find('#abbv-name').text(item.abbv);
			example.find('#full-name').text(item.name);
			example.find('#buy').text(item.buy);
			example.find('#sell').text(item.sell);
			example.find('#url').attr('src',item.link);
			$('#table2').append(example);

		});
		$('#curr-table-wrapper1').remove();
		$('#curr-table-wrapper2').remove();
	}
	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		parallax();
		counter();
		counterWayPoint();
		tableFill();
		reviewFill();
		owlCrouselFeatureSlide();
		bgVideo();
		clickListener();
		smoothGoTo();
	});


}());