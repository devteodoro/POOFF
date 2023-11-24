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