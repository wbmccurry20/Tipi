$(document).ready(function() {
        	$("#slider").bxSlider({
			  auto: true, //slides auto change
			  minSlides: 1, //one image only for current display
			  maxSlides: 1,
			  slideWidth: 500, //500px image width
			  slideMargin: 10,
			  speed: 450, //4.5s transition speed
			  captions: true,
			  adaptiveHeight: true, //images resize to handle images with differing sizes
			  startSlide:1 // slide index (base 0) set to 1
			});
    	});