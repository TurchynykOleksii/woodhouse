$(function () {

	// Custom JS
	const swiper = new Swiper('.hero__slider .swiper', {
		centeredSlides: false,
		loop: false,
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '<span class="' + currentClass + '"></span> ' +
					'|' +
					' <span class="' + totalClass + '"></span>';
			},
			formatFractionCurrent: function (number) {
				return '0' + number;
			},
			formatFractionTotal: function (number) {
				return '0' + number;
			},
		},
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		scrollbarHide: true,
		slidesPerView: 'auto',
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

	});
	const regex = /\//g;
	const sliderPagination = document.querySelector('.swiper-pagination').textContent
	const replaceText = sliderPagination.replace(regex, '|')
	sliderPagination.textContent = replaceText
	console.log(replaceText)
});
