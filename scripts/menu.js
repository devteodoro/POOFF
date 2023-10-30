
window.addEventListener("scroll", () => {
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 300);
});

window.addEventListener('resize', (e) => {
    let largura = window.innerWidth;
    let navbar = document.querySelector('.navbar');
    let menuMobileAberto = navbar.classList.contains("active");
    if(Number(largura) >= 900 && menuMobileAberto){
        document.querySelector('#menu-btn').classList.toggle('fa-times');
        document.querySelector('.navbar').classList.toggle('active');
    } 
}, true);

document.querySelector('#menu-btn').onclick = () => {
    document.querySelector('#menu-btn').classList.toggle('fa-times');
    document.querySelector('.navbar').classList.toggle('active');
}