const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
	if (document.documentElement.scrollTop >= 100) {
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}
});

const homeSlider = new Swiper('.homeSlider', {
	loop: true,
	allowTouchMove: false,
	effect: 'fade',
});

const homeSlideBtn = document.querySelectorAll('.home-list__btn');

for (let i = 0; i < homeSlideBtn.length; i++) {
	const btn = homeSlideBtn[i];

	btn.addEventListener('click', () => {
		if (!btn.classList.contains('active')) {
			for (const btn2 of homeSlideBtn) {
				btn2.classList.remove('active');
			}

			btn.classList.add('active');
			homeSlider.slideTo(i + 1, 1000);
			// homeSlider2.slideTo(i + 1, 1000);
		}
	})
}

homeSlider.on('slideChange', function () {
	let currentSlide = homeSlider.activeIndex;
	const homeBg = document.querySelector('.home__bg');

	if (currentSlide == 1) {
		homeBg.style.background = "url('../img/home-bg-1.jpg') no-repeat center center / cover";
	} else if (currentSlide == 2) {
		homeBg.style.background = "url('../img/home-bg-2.jpg') no-repeat center center / cover";
	} else if (currentSlide == 3) {
		homeBg.style.background = "url('../img/home-bg-1.jpg') no-repeat center center / cover";
	} else if (currentSlide == 4) {
		homeBg.style.background = "url('../img/home-bg-2.jpg') no-repeat center center / cover";
	}
});