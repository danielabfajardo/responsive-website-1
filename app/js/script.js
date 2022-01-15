const btnHamburger = document.querySelector("#btn-hamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener('click', function() {
    if(header.classList.contains('open')) {
        body.classList.remove('no-scroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        })
    } else { //open hamburger menu
        body.classList.add('no-scroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        })
    }
})