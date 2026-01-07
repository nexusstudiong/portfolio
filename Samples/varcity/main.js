let scrollPosition = window.scrollY;

let nav1 = document.getElementById('logo');
let nav2 = document.getElementById('p');
let nav3 = document.getElementById('help');
let nav4 = document.getElementById('en');
let nav5 = document.getElementById('dnld');

let bigUp = document.getElementById('bigUp');
let bigUp2 = document.getElementById('bigUp2');

let span = document.getElementById('span1');
let span2 = document.getElementById('span2');
let span3 = document.getElementById('span3');
let span4 = document.getElementById('span4');
let cExp = document.getElementById('cExp');
let osBtn = document.getElementById('downloadDiv');
let mkp = document.getElementById('mkp');


if (scrollPosition < 1) {
    nav1.style.animationName = 'slideIn';
    nav2.style.animationName = 'slideIn';
    nav3.style.animationName = 'slideIn';
    nav4.style.animationName = 'slideIn';
    nav5.style.animationName = 'slideIn';

    bigUp.style.animationName = 'up';
    bigUp2.style.animationName = 'up2';
    
    span.style.animationName = 'cHead';
    span2.style.animationName = 'cHead';
    span3.style.animationName = 'cHead';
    span4.style.animationName = 'cHead';
    cExp.style.animationName = 'cHead';
    osBtn.style.animationName = 'cHead';
    mkp.style.animationName = 'cHead';

    console.log('animate!');
}
window.addEventListener('resize', function () {
    nav3.style.animationName = 'none';
    nav4.style.animationName = 'none';
    nav5.style.animationName = 'none';
});