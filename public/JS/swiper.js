var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 4,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
	  320: {
	  slidesPerView: 1,
	  spaceBetween: 50,
  slidesPerGroup: 1,
	},

	680: {
	  slidesPerView: 2,
	  spaceBetween: 40,
  slidesPerGroup: 4,
	},
	920: {
	  slidesPerView: 3,
	  spaceBetween: 40,
	},
	1240: {
	  slidesPerView: 4,
	  spaceBetween: 50,
	},
  }
  })