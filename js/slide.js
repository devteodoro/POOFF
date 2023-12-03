var swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: true,
  navigation: true,
  spaceBetween: 30,
  loop: true,
  slidesPerView: 'auto',
  responsive: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1500: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 1,
    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


function readCard(el) {
  var card = el.parentElement.parentElement;
  card.classList.toggle('active');

  if (card.classList.contains('active')) {
    // swiper.autoplay.stop();
    el.innerText = "Leia menos";
  } else {
    // swiper.autoplay.start()
    el.innerText = "Leia mais";
  }
  // var title = card.getElementsByClassName('title-card')[0].innerText;
  // var text = card.getElementsByClassName('text-card')[0].innerText;
}
