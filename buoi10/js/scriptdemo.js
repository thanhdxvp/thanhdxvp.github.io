var slideIndex = 1;
show(slideIndex);

function plusDivs(n) {
    show(slideIndex += n)
}

function show(n) {
    var i;
    var x = document.getElementsByClassName('mySlides');
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < x.length) {
        slideIndex = x.length
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none'
    }
    x[slideIndex - 1].style.display = 'block'

}