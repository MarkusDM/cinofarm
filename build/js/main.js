'use strict';

const rem = function (rem) {
	if ($(window).width() > 768) {
		return 0.005208335 * $(window).width() * rem;
	} else {
		return (100 / 390) * (0.1 * $(window).width()) * rem;
	}
};

const popularSwiper = new Swiper('.popular__swiper', {
	
	slidesPerView: 3,
    spaceBetween: rem(3),
	navigation: {
		prevEl: '.popular__prev',
		nextEl: '.popular__next',
	},
});


const newsSwiper = new Swiper('.news__swiper', {
	
	slidesPerView: 1,
 
	navigation: {
		prevEl: '.news__prev',
		nextEl: '.news__next',
	},
});

const educationSwiper = new Swiper('.education__swiper', {
	
	slidesPerView: 2,
    spaceBetween: rem(3),
	navigation: {
		prevEl: '.education__prev',
		nextEl: '.education__next',
	},
});

const literatureSwiper = new Swiper('.literature__swiper', {
	
	slidesPerView: 2,
    spaceBetween: rem(3),
	navigation: {
		prevEl: '.literature__prev',
		nextEl: '.literature__next',
	},
});


const partnersSwiper = new Swiper('.partners__swiper', {
	
	slidesPerView: 2,
    spaceBetween: rem(3),
	navigation: {
		prevEl: '.partners__prev',
		nextEl: '.partners__next',
	},
});


const projectsSwiper = new Swiper('.projects__swiper', {
	
	slidesPerView: 2,
    spaceBetween: rem(3),
	navigation: {
		prevEl: '.projects__prev',
		nextEl: '.projects__next',
	},
});