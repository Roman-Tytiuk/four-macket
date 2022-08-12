$(document).ready(function(){
	$('.slider').slick({
		dots:true,
		arrows: false,
		infinite: true,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:9000
	});
});

$(document).ready(function(){
		$('#mobile-slider').slick({
			dots: true,
			arrows: false,
			infinite: true,
			slidesToShow: 1,
			autoplay:true,
			speed: 1000,
			autoplaySpeed: 9000,
			mobileFirst: true,
			responsive: [
				{
					breakpoint: 768,
					settings: 'unslick'
				}
				]
		});
});


$(document).ready(function(){
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
