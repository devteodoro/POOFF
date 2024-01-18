//toggle icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })

            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate')
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Máscara telefone 
var celular = document.getElementById('telephone');

celular.addEventListener("input", () => {

    var limparValor = celular.value.replace(/\D/g, "").substring(0, 11);

    var numerosArray = limparValor.split("");

    var numeroFormatado = "";

    if (numerosArray.length > 0) {
        numeroFormatado += `(${numerosArray.slice(0, 2).join("")})`;
    }

    if (numerosArray.length > 2) {
        numeroFormatado += ` ${numerosArray.slice(2, 7).join("")}`;
    }

    if (numerosArray.length > 7) {
        numeroFormatado += `-${numerosArray.slice(7, 11).join("")}`;
    }

    celular.value = numeroFormatado;
});

// MODAL CARD
const modal = document.querySelector('dialog');

function modalOpen(el) {
    let card = el.parentElement.parentElement;
    let pathImage = card.querySelector('img').src;
    pathImage = `.${pathImage.substring(pathImage.indexOf("/img"))}`;
    let titleCard = card.querySelector('.title-card').innerText;
    let textCard = card.querySelector('.text-card').innerText;

    modal.querySelector('img').src = pathImage;
    modal.querySelector('.title-card').innerText = titleCard;
    modal.querySelector('.text-card').innerText = textCard;
    modal.showModal();
}

function modalClose() {
    modal.close();
}

function toHire(el, plano) {
    let wp = document.getElementById('lk_wp');
    let base = "https://web.whatsapp.com/send?phone=5521993068832&text=";
    let msg = "Olá, gostaria de contratar o plano " + plano;
    wp.setAttribute('href', base + msg);
    wp.click();
}
