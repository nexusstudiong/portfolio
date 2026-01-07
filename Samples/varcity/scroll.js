const scrollBar = document.querySelector('.scrollbar')

let yHeight = 0.8 * window.innerHeight;
let stick = false;

document.addEventListener('scroll', function() {
    let yPos = window.scrollY;

    let scrollthreshhold = 100;

    if (yPos >= scrollthreshhold && !stick) {
        window.scrollTo(0, yHeight);

        stick = true;
    } else if (yPos < scrollthreshhold) {
        stick = false
    }
});