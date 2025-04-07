const slides = document.querySelectorAll(".slides img");
let slideindex = 0;
let slideid = null;

document.addEventListener("DOMContentLoaded ", asd())

function asd() {
    if (slides.length > 0) {
        slides[slideindex].classList.add("displayslide");
        intervalid = setInterval(nextbutton , 5000);
    }
}
function showslide(index) {
    if (index >= slides.length) {
        slideindex = 0;
    }
    else if (index < 0) {
        slideindex = slides.length -1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displayslide")
    });
    slides[slideindex].classList.add("displayslide")
}
function backbutton() {
    clearInterval(intervalid)
    slideindex--;
    showslide(slideindex);
    intervalid = setInterval(nextbutton , 5000);
}
function nextbutton() {
    slideindex++;
    showslide(slideindex);
}