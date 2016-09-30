//Pop-up
$(document).ready(function(){
			$(".social-buttons #vk").hover(function(){
				$(this).next("em").animate({opacity: "show", top: "-60"}, "slow");
			}, function() {
				$(this).next("em").animate({opacity: "hide", top: "-80"}, "fast");
			});
		});

$(document).ready(function(){
			$(".social-buttons #fb").hover(function(){
				$(this).next("em").animate({opacity: "show", top: "-60"}, "slow");
			}, function() {
				$(this).next("em").animate({opacity: "hide", top: "-80"}, "fast");
			});
		});

$(document).ready(function(){
			$(".social-buttons #twit").hover(function(){
				$(this).next("em").animate({opacity: "show", top: "-60"}, "slow");
			}, function() {
				$(this).next("em").animate({opacity: "hide", top: "-80"}, "fast");
			});
		});

//Menu-dropdown
/*$(document).ready(function(){
			$(".menu-link").click(function(){
				$(".dropdown-menu").slideToggle("fast");
				$(this).toggleClass("active");
			});
		});*/

$(document).ready(function(){
 $(".menu-link").click(function(){
  $(".dropdown-menu").slideToggle("slow");
  $(this).toggleClass("open");
 });
});
//Menu-dropdown
//$(document).ready(function(){
//			$(".menu-link").click(function(){
//				$(".dropdown-menu").animate({opacity: "show", top: "100%"}, "slow");
//				$(this).addClass("active");
//				return false;
//			});
//			$(".menu-link").click(function(){
//				$(".dropdown-menu").animate({opacity: "hide", top: "-100%"}, "slow");
//				$(this).removeClass("active");
//				return false;
//			});
//		});



//jR3DCarouselCustomSlide
$(document).ready(function(){
	var slides = [	{src: 'img/portfolio-item-1.jpg'}, 
					{src: 'img/portfolio-item-2.jpg'}, 
					{src: 'img/portfolio-item-3.jpg'}, 
					{src: 'img/portfolio-item-4.jpg'},
					{src: 'img/portfolio-item-5.jpg'}, 
					{src: 'img/portfolio-item-6.jpg'}, 
					{src: 'img/portfolio-item-7.jpg'}, 
					{src: 'img/portfolio-item-8.jpg'}]
	var jR3DCarousel;
	var carouselProps =  {
			 		  width: 600, 				/* largest allowed width */
					  height: 400, 				/* largest allowed height */
					  slideLayout : 'fill',     /* "contain" (fit according to aspect ratio), "fill" (stretches object to fill) and "cover" (overflows box but maintains ratio) */
					  animation: 'slide3D', 		/* slide | scroll | fade | zoomInSlide | zoomInScroll */
					  animationCurve: 'ease',
					  animationDuration: 700,
					  animationInterval: 1000,
					  //slideClass: 'jR3DCarouselCustomSlide',
					  autoplay: true,
					  onSlideShow: show,		/* callback when Slide show event occurs */
					  navigation: 'circles',	/* circles | squares */
					  slides: slides 			/* array of images source or gets slides by 'slide' class */
						  
				}
	function setUp(){
 		jR3DCarousel = $('.jR3DCarouselGallery').jR3DCarousel(carouselProps);

		$('.settings').html('<pre>$(".jR3DCarouselGallery").jR3DCarousel('+JSON.stringify(carouselProps, null, 4)+')</pre>');		
		
	}
	function show(slide){
		console.log("Slide shown: ", slide.find('img').attr('src'))
	}
	$('.carousel-props input').change(function(){
		if(isNaN(this.value))
			carouselProps[this.name] = this.value || null; 
		else
			carouselProps[this.name] = Number(this.value) || null; 
		
		for(var i = 0; i < 999; i++)
	     clearInterval(i);
		$('.jR3DCarouselGallery').empty();
		setUp();
		jR3DCarousel.showNextSlide();
	})
	
	$('[name=slides]').change(function(){
		carouselProps[this.name] = getSlides(this.value); 
		for (var i = 0; i < 999; i++)
	     clearInterval(i);
		$('.jR3DCarouselGallery').empty();
		setUp();
		jR3DCarousel.showNextSlide();		
	});
	
	function getSlides(no){
		slides = [];
		for ( var i = 0; i < no; i++) {
			slides.push({src: 'https://unsplash.it/'+Math.floor(1366-Math.random()*200)+'/'+Math.floor(768+Math.random()*200)})
		}
		return slides;
	}
	
	//carouselProps.slides = getSlides(7);
	setUp()

  })