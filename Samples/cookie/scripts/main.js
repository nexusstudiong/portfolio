let bgCircle = document.getElementById('circleBg');
let bgCircle2 = document.getElementById('circleBg2');
let f0 = document.getElementById('f0');
let f1 = document.getElementById('f1');
let f2 = document.getElementById('f2');
let cook1 = document.getElementById('cook1');
let cook2 = document.getElementById('cook2');
let cook3 = document.getElementById('cook3');
let plate = document.getElementById('plate');
let nav = document.getElementById('nav');
let best = document.getElementById('best');
let sell = document.getElementById('selling');
let exp1 = document.getElementById('exp1');
let exp2 = document.getElementById('exp2');
let exp3 = document.getElementById('exp3');
let arr1 = document.getElementById('arr1');
let arr2 = document.getElementById('arr2');
let arr3 = document.getElementById('arr3');
let navA1 = document.getElementById('navA1');
let navA2 = document.getElementById('navA2');
let navA3 = document.getElementById('navA3');
let navA4 = document.getElementById('navA4');
let navB1 = document.getElementById('navB1');
let navB2 = document.getElementById('navB2');
let logo = document.getElementById('logo');

let scrollY = 0;
let vh = 0;

document.addEventListener('scroll', function() {

    scrollY = window.scrollY;
    vh = window.innerHeight;
    
    if (scrollY < (vh * 1.5)) {
        bgCircle2.style.left = "200%";
    }
    if (scrollY >= vh && scrollY < (vh * 1.5)) {
        cook1.style.transform =  "translateX(-100%) translateY(10%) rotateZ(120deg)";
        cook2.style.transform =  "translateX(-50%) translateY(-70%) rotateZ(120deg)";
        cook3.style.transform =  "translateX(0%) translateY(10%) rotateZ(120deg)";
        plate.style.transform =  "translateX(-50%) translateY(-35%)";
        cook2.style.width =  "250px";
        nav.style.transform =  "translateY(30%)";
        sell.style.transform =  "translateY(120px) translateX(-50%)";
        exp1.style.top = "50%";
        exp1.style.opacity = "1";
        exp2.style.top = "50%";
        exp2.style.opacity = "1";
        exp3.style.top = "50%";
        exp3.style.opacity = "1";
        arr1.style.top = "50%";
        arr1.style.opacity = "1";
        arr2.style.top = "50%";
        arr2.style.opacity = "1";
        arr3.style.top = "50%";
        arr3.style.opacity = "1";
        if (window.innerWidth > 800) {
            cook2.style.width =  "250px";
            plate.style.width =  "600px";
            best.style.transform =  "translateY(0px)";
            sell.style.transform =  "translateY(120px)";
        } else {
            cook2.style.width =  "200px";
            plate.style.width =  "500px";
            best.style.transform =  "translateY(30px) translateX(-50%)";
            sell.style.transform =  "translateY(100px) translateX(-50%)";
        }
    } else if (scrollY < vh) {
        cook1.style.transform =  "translateX(" + ((-50/vh)*scrollY - 50) + "%) translateY(" + ((60/vh)*scrollY - 50) + "%) rotateZ(" + (120/vh)*scrollY + "deg)";
        cook2.style.transform =  "translateX(" + ((0/vh)*scrollY - 50) + "%) translateY(" + ((-20/vh)*scrollY - 50) + "%) rotateZ(" + (120/vh)*scrollY + "deg)";
        cook3.style.transform =  "translateX(" + ((50/vh)*scrollY - 50) + "%) translateY(" + ((60/vh)*scrollY - 50) + "%) rotateZ(" + (120/vh)*scrollY + "deg)";
        plate.style.transform =  "translateX(" + ((0/vh)*scrollY - 50) + "%) translateY(" + ((15/vh)*scrollY - 50) + "%)";
        cook2.style.width = ((-100/vh)*scrollY + 350) + "px";
        plate.style.width = ((350/vh)*scrollY + 250) + "px";
        nav.style.transform =  "translateY(" + ((130/vh)*scrollY - 100) + "%)";
        exp1.style.top = ((-10/vh)*scrollY + 60) + "%";
        exp1.style.opacity = ((1/vh)*scrollY);
        exp2.style.top = ((-10/vh)*scrollY + 60) + "%";
        exp2.style.opacity = ((1/vh)*scrollY);
        exp3.style.top = ((-10/vh)*scrollY + 60) + "%";
        exp3.style.opacity = ((1/vh)*scrollY);
        arr1.style.top = ((-10/vh)*scrollY + 60) + "%";
        arr1.style.opacity = ((1/vh)*scrollY);
        arr2.style.top = ((-10/vh)*scrollY + 60) + "%";
        arr2.style.opacity = ((1/vh)*scrollY);
        arr3.style.top = ((-10/vh)*scrollY + 60) + "%";
        arr3.style.opacity = ((1/vh)*scrollY);
        if (window.innerWidth > 800) {
            cook2.style.width = ((-100/vh)*scrollY + 350) + "px";
            plate.style.width = ((350/vh)*scrollY + 250) + "px";
            best.style.transform =  "translateY(" + ((-800/vh)*scrollY + 800) + "px)";
            sell.style.transform =  "translateY(" + ((-680/vh)*scrollY + 800) + "px)";
        } else {
            cook2.style.width = ((-100/vh)*scrollY + 300) + "px";
            plate.style.width = ((350/vh)*scrollY + 150) + "px";
            best.style.transform =  "translateY(" + ((-770/vh)*scrollY + 800) + "px) translateX(-50%)";
            sell.style.transform =  "translateY(" + ((-700/vh)*scrollY + 800) + "px) translateX(-50%)";
        }
    } else if (scrollY >= (vh*1.5) && scrollY < (vh*2.5)) {
        best.style.transform =  "translateY(" + (-(scrollY - (vh * 1.5))) + "px)";
        sell.style.transform =  "translateY(" + ((-(scrollY - (vh * 1.5)))+120) + "px)";
        exp1.style.top = 50 - (scrollY-vh*1.5)*0.02 + "%";
        exp1.style.opacity = 1 - (scrollY-vh*1.5)*0.005;
        exp2.style.top = 50 - (scrollY-vh*1.5)*0.02 + "%";
        exp2.style.opacity = 1 - (scrollY-vh*1.5)*0.005;
        exp3.style.top = 50 - (scrollY-vh*1.5)*0.02 + "%";
        exp3.style.opacity = 1 - (scrollY-vh*1.5)*0.005;
        arr1.style.top = 50 - (scrollY-vh*1.5)*0.02 + "%";
        arr1.style.opacity = 1 - (scrollY-vh*1.5)*0.005;
        arr2.style.top = 50 - (scrollY-vh*1.5)*0.02 + "%";
        arr2.style.opacity = 1 - (scrollY-vh*1.5)*0.005;
        arr3.style.top = 50 - (scrollY-vh*1.5)*0.02 + "%";
        arr3.style.opacity = 1 - (scrollY-vh*1.5)*0.005;
        bgCircle2.style.left = ((-55/vh)*scrollY + 237.5) + "%";
        nav.style.backgroundColor = "rgb(" + ((-223/vh)*scrollY + 589.5) + ", " + ((-244/vh)*scrollY + 621) + ", " + ((-246/vh)*scrollY + 624) + ")";
        navB1.style.backgroundColor = "rgb(" + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ")";
        navB2.style.backgroundColor = "rgb(" + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ")";
        logo.style.backgroundColor = "rgb(" + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ")";
        navA1.style.color = "rgb(" + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ")";
        navA2.style.color = "rgb(" + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ")";
        navA3.style.color = "rgb(" + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ")";
        navA4.style.color = "rgb(" + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ", " + ((255/vh)*scrollY - 382.5) + ")";
    } else if (scrollY >= (vh*2.5)) {
        bgCircle2.style.left = "100%";
        nav.style.backgroundColor = "rgb(32, 11, 9)";
        navA1.style.color = "#fff";
        navA2.style.color = "#fff";
        navA3.style.color = "#fff";
        navA4.style.color = "#fff";
        navB1.style.backgroundColor = "#fff";
        navB2.style.backgroundColor = "#fff";
        logo.style.backgroundColor = "#fff";
    }

    console.log((1/vh)*scrollY);

    if (scrollY >= vh) {
        if (window.innerWidth > 800) {
            bgCircle.style.width = "150vw";
            bgCircle.style.height = "150vw";
    
            f0.style.transform = "translateX(-50%) translateY(" + vh + "px)";
            f1.style.transform = "translateX(-50%) translateY(" + vh + "px)";
            f2.style.transform = "translateX(-50%) translateY(" + vh + "px)";
        } else {
            bgCircle.style.width = "590vw";
            bgCircle.style.height = "500vw";
    
            f0.style.transform = "translateX(-50%) translateY(" + vh + "px)";
            f1.style.transform = "translateX(-50%) translateY(" + vh + "px)";
            f2.style.transform = "translateX(-50%) translateY(" + vh + "px)";
        }
    } else {
        if (window.innerWidth > 800) {
            bgCircle.style.width = (110/vh * scrollY) + 40 + "vw";
            bgCircle.style.height = (110/vh * scrollY) + 40 + "vw";
    
            f0.style.transform = "translateX(-50%) translateY(" + (-234 - scrollY) + "px)";
            f1.style.transform = "translateX(-50%) translateY(" + (-78 - (scrollY * 1.4)) + "px)";
            f2.style.transform = "translateX(-50%) translateY(" + (78 - (scrollY * 1.8)) + "px)";
        } else {
            bgCircle.style.width = (110/vh * scrollY*3) + 120 + "vw";
            bgCircle.style.height = (110/vh * scrollY*3) + 120 + "vw";
    
            f0.style.transform = "translateX(-50%) translateY(" + (-150 - scrollY) + "px)";
            f1.style.transform = "translateX(-50%) translateY(" + (-50 - (scrollY * 1.3)) + "px)";
            f2.style.transform = "translateX(-50%) translateY(" + (50 - (scrollY * 1.6)) + "px)";
        }
    }
});
/*
x1 = 1.5vh
x2 = 2.5vh
y1 = 255
y2 = 11
*/