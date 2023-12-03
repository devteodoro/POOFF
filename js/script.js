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

    // Remover os caracteres não numéricos usando a expressão regular /\D/g e limitar a 11 dígitos.
    var limparValor = celular.value.replace(/\D/g, "").substring(0, 11);

    // Dividir a string em um array de caracteres individuais.
    var numerosArray = limparValor.split("");

    // Criar a variável para receber o número formatado
    var numeroFormatado = "";

    // Acessa o IF quando a quantidade de números é maior do que zero
    if (numerosArray.length > 0) {
        // Formatar o DD e concatenar o valor
        // slice - extraie uma parte do array
        // join - unir os elementos do array em uma única string
        numeroFormatado += `(${numerosArray.slice(0, 2).join("")})`;
    }

    // Acessa o IF quando a quantidade de números é maior do que dois
    if (numerosArray.length > 2) {
        // Formatar o número do telefone e concatenar o valor
        // slice - extraie uma parte do array
        // join - unir os elementos do array em uma única string
        numeroFormatado += ` ${numerosArray.slice(2, 7).join("")}`;
    }

    // Acessa o IF quando a quantidade de números é maior do que sete
    if (numerosArray.length > 7) {
        // Formatar o número do telefone e concatenar o valor
        // slice - extraie uma parte do array
        // join - unir os elementos do array em uma única string
        numeroFormatado += `-${numerosArray.slice(7, 11).join("")}`;
    }

    // Enviar para o campo o número formatado
    celular.value = numeroFormatado;
});

