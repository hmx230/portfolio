document.addEventListener('DOMContentLoaded', () => {

  fetch('libs/works.json')
    .then(res => {
      if (!res.ok) throw new Error('JSON読み込み失敗');
      return res.json();
    })
    .then(data => {

      createSlides('.swiper01', data.slide1);
      createSlides('.swiper02', data.slide2);

      new Swiper('.swiper01', sliderOption1);
      new Swiper('.swiper02', sliderOption2);

    })
    .catch(() => {
      alert('JSONファイルが読み込まれていません！');
    });

});

function createSlides(swiperSelector, items) {

  const wrapper = document.querySelector(`${swiperSelector} .swiper-wrapper`);

  if (!wrapper || !items) return;

  items.forEach(item => {

    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    slide.innerHTML = `
      <a href="${item.link}" target="_blank">
        <figure>
          <img src="images/site_img_${item.image}.webp" alt="${item.name}">
        </figure>
        <p>${item.name}</p>
      </a>
    `;

    wrapper.appendChild(slide);

  });

}

const sliderOption1 = {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 15,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    641: {
      slidesPerView: 1.75,
      spaceBetween: 15,
      centeredSlides: true,
    },
    769: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1261: {
      slidesPerView: 3.25,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1441: {
      slidesPerView: 4.5,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1921: {
      slidesPerView: 6.5,
      spaceBetween: 20,
      centeredSlides: false,
    }
  },
  /*
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  */
}

const sliderOption2 = {
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 15,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },
  breakpoints: {
    641: {
      slidesPerView: 1.75,
      spaceBetween: 15,
      centeredSlides: true,
    },
    769: {
      slidesPerView: 2.5,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1261: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1441: {
      slidesPerView: 4.5,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1921: {
      slidesPerView: 6.5,
      spaceBetween: 20,
      centeredSlides: false,
    }
  },
  /*
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  */
}