
window.addEventListener("scroll", () => {
    let header = document.querySelector('#header');
    header.classList.toggle('rolagem', window.scrollY > 300);
});

document.querySelector('#menu-btn').onclick = () => {
    document.querySelector('#menu-btn').classList.toggle('fa-times');
    document.querySelector('.navbar').classList.toggle('active');
}