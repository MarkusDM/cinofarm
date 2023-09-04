'use strict';

const rem = function (rem) {
	if ($(window).width() > 768) {
		return 0.005208335 * $(window).width() * rem;
	} else {
		return (100 / 390) * (0.1 * $(window).width()) * rem;
	}
};

const popularSwiper = new Swiper('.popular__swiper', {
	
	slidesPerView: 1,
    spaceBetween: rem(3),
	speed: 500,
	navigation: {
		prevEl: '.popular__prev',
		nextEl: '.popular__next',
	},

	breakpoints: {
		769: {
			slidesPerView: 3,
		},
	},
});


const newsSwiper = new Swiper('.news__swiper', {
	
	slidesPerView: 1,
	speed: 500,
	breakpoints: {
		769: {
			slidesPerView: 1,
		},
	},
	navigation: {
		prevEl: '.news__prev',
		nextEl: '.news__next',
	},
});

const educationSwiper = new Swiper('.education__swiper', {
	
	slidesPerView: 1,
    spaceBetween: rem(3),
	speed: 500,
	breakpoints: {
		769: {
			slidesPerView: 2,
		},
	},
	navigation: {
		prevEl: '.education__prev',
		nextEl: '.education__next',
	},
});

const literatureSwiper = new Swiper('.literature__swiper', {
	
	slidesPerView: 1,
    spaceBetween: rem(3),
	speed: 500,
	navigation: {
		prevEl: '.literature__prev',
		nextEl: '.literature__next',
	},

	breakpoints: {
		769: {
			slidesPerView: 2,
		},
	},
});


const partnersSwiper = new Swiper('.partners__swiper', {
	
	slidesPerView: 1,
    spaceBetween: rem(3),
	speed: 500,
	navigation: {
		prevEl: '.partners__prev',
		nextEl: '.partners__next',
	},
	breakpoints: {
		769: {
			slidesPerView: 2,
		},
	},
});


const projectsSwiper = new Swiper('.projects__swiper', {
	
	slidesPerView: 1,
    spaceBetween: rem(3),
	speed: 500,
	navigation: {
		prevEl: '.projects__prev',
		nextEl: '.projects__next',
	},

	breakpoints: {
		769: {
			slidesPerView: 2,
		},
	},
});


window.addEventListener('wheel', function(e) {
	e.preventDefault();
	if (e.deltaY < 0) scrollToSection('first');
	else scrollToSection('second');
  });
  
  function scrollToSection(id) {
	document.getElementById(id).scrollIntoView({
	  behavior: 'smooth'
	});
  }