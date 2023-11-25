
var numberCard = 4;

validaLargura(window.innerWidth, false);

window.addEventListener('resize', (e) => {
  validaLargura(window.innerWidth, true);    
}, true);

function validaLargura(largura, resize) {
    let width = window.innerWidth;

    if(width <= 1200)
      numberCard = 3;

    if(width <= 768)
      numberCard = 2;

    if(width <= 520)
      numberCard = 1;

    return criarSlide(numberCard);
}

function criarSlide () {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: true, 
    navigation: true, 
    spaceBetween: 30,
    loop: true,
    slidesPerView: numberCard,
    responsive:true,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
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
}

function readCard (el) {
  var card = el.parentElement.parentElement;
  card.classList.toggle('active');

  if(card.classList.contains('active')) {
    el.innerText = "Read less";
  }else{
    el.innerText = "Read more";
  }
  var title = card.getElementsByClassName('title-card')[0].innerText;
  var text = card.getElementsByClassName('text-card')[0].innerText;          
}
