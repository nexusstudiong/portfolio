let prod = document.getElementsByClassName('prod');
let picin = document.getElementsByClassName('picin');
let num = document.getElementsByClassName('num');
let num2 = document.getElementsByClassName('num2');
let scrollY = 0;
let scrV = 5;
let timer = 1.5;
let target = 0;
let scrolled = false;
let lastX = 0, lastY = 0;

let height = window.innerHeight;

window.addEventListener('resize', function(){
    height = window.innerHeight;
})

picin[0].style.zIndex = "2";

function mod(n, m) {
    return ((n%m)+m)%m;
}
function sc(scroll) {
    return (scroll/height)*100;
}

let firsts1 = [picin[0], num[0], num2[0]]
let firsts2 = [picin[1], num[1], num2[1]]
let firsts3 = [picin[2], num[2], num2[2]]
let firsts4 = [picin[3], num[3], num2[3]]

for (let i = 0; i < num.length; i++) {
    num[i].style.animationName = "fadeout";
}
num[0].style.animationName = "fadein";

for (let i = 0; i < num2.length; i++) {
    num2[i].style.animationName = "fadeout";
}
num2[0].style.animationName = "fadein";

for (let i = 0; i < num.length; i++) {
    num[i].style.top = "100vh";
}
num[0].style.top = "0";

for (let i = 0; i < num2.length; i++) {
    num2[i].style.top = "100vh";
}
num2[0].style.top = "0";

function scrolleff() {

    if (scrollY < height) {
        prod[0].style.top = 0 + "px";
        prod[1].style.top = -scrollY + height + "px";
        prod[2].style.top = 0 + "px";
        prod[3].style.top = 0 + "px";

        prod[0].style.height = 100.3 - sc(scrollY) + "vh";
        prod[1].style.height = sc(scrollY) + "vh";
        prod[2].style.height = 0 + "vh";
        prod[3].style.height = 0 + "vh";

        for (let i = 0; i < firsts1.length; i++) {
            firsts1[i].style.top = -sc(scrollY) + "%";
        }
        for (let i = 0; i < firsts2.length; i++) {
            firsts2[i].style.top = 100-sc(scrollY) + "%";
        }
        for (let i = 0; i < firsts3.length; i++) {
            firsts3[i].style.top = 400 + "%";
        }
        for (let i = 0; i < firsts4.length; i++) {
            firsts4[i].style.top = 400 + "%";
        }
    } else if (scrollY < height*2) {
        prod[0].style.top = 0 + "px";
        prod[1].style.top = 0 + "px";
        prod[2].style.top = -scrollY + 2*height + "px";
        prod[3].style.top = 0 + "px";

        prod[0].style.height = 0 + "vh";
        prod[1].style.height = 100.3-(sc(scrollY)%100) + "vh";
        prod[2].style.height = sc(scrollY)%100 + "vh";
        prod[3].style.height = 0 + "vh";

        for (let i = 0; i < firsts1.length; i++) {
            firsts1[i].style.top = 400 + "%";
        }
        for (let i = 0; i < firsts2.length; i++) {
            firsts2[i].style.top = 100-sc(scrollY) + "%";
        }
        for (let i = 0; i < firsts3.length; i++) {
            firsts3[i].style.top = 200-sc(scrollY) + "%";
        }
        for (let i = 0; i < firsts4.length; i++) {
            firsts4[i].style.top = 400 + "%";
        }
    } else if (scrollY < height*3) {
        prod[0].style.top = 0 + "px";
        prod[1].style.top = 0 + "px";
        prod[2].style.top = 0 + "px";
        prod[3].style.top = -scrollY + 3*height + "px";

        prod[0].style.height = 0 + "vh";
        prod[1].style.height = 0 + "vh";
        prod[2].style.height = 100.3-(sc(scrollY)%100) + "vh";
        prod[3].style.height = sc(scrollY)%100 + "vh";

        for (let i = 0; i < firsts1.length; i++) {
            firsts1[i].style.top = 400 + "%";
        }
        for (let i = 0; i < firsts2.length; i++) {
            firsts2[i].style.top = 400 + "%";
        }
        for (let i = 0; i < firsts3.length; i++) {
            firsts3[i].style.top = 200-sc(scrollY) + "%";
        }
        for (let i = 0; i < firsts4.length; i++) {
            firsts4[i].style.top = 300-sc(scrollY) + "%";
        }
    } else {
        prod[0].style.top = -scrollY + 4*height + "px";
        prod[1].style.top = 0 + "px";
        prod[2].style.top = 0 + "px";
        prod[3].style.top = 0 + "px";

        prod[0].style.height = sc(scrollY)%100 + "vh";
        prod[1].style.height = 0 + "vh";
        prod[2].style.height = 0 + "vh";
        prod[3].style.height = 100.3-(sc(scrollY)%100) + "vh";

        for (let i = 0; i < firsts1.length; i++) {
            firsts1[i].style.top = 400-sc(scrollY) + "%";
        }
        for (let i = 0; i < firsts2.length; i++) {
            firsts2[i].style.top = 400 + "%";
        }
        for (let i = 0; i < firsts3.length; i++) {
            firsts3[i].style.top = 400 + "%";
        }
        for (let i = 0; i < firsts4.length; i++) {
            firsts4[i].style.top = 300-sc(scrollY) + "%";
        }
    }

    if (scrollY < (height - 0.5*height)) {
        num[0].style.animationName = "fadein";
        num[1].style.animationName = "fadeout";
        num[2].style.animationName = "fadeout";
        num[3].style.animationName = "fadeout";

        num2[0].style.animationName = "fadein";
        num2[1].style.animationName = "fadeout";
        num2[2].style.animationName = "fadeout";
        num2[3].style.animationName = "fadeout";

        target = 0;
    } else if (scrollY < (2*height - 0.5*height)) {
        num[0].style.animationName = "fadeout";
        num[1].style.animationName = "fadein";
        num[2].style.animationName = "fadeout";
        num[3].style.animationName = "fadeout";
        
        num2[0].style.animationName = "fadeout";
        num2[1].style.animationName = "fadein";
        num2[2].style.animationName = "fadeout";
        num2[3].style.animationName = "fadeout";

        target = height;
    } else if (scrollY < (3*height - 0.5*height)) {
        num[0].style.animationName = "fadeout";
        num[1].style.animationName = "fadeout";
        num[2].style.animationName = "fadein";
        num[3].style.animationName = "fadeout";
        
        num2[0].style.animationName = "fadeout";
        num2[1].style.animationName = "fadeout";
        num2[2].style.animationName = "fadein";
        num2[3].style.animationName = "fadeout";

        target = height*2;
    } else if (scrollY < (4*height - 0.5*height)) {
        num[0].style.animationName = "fadeout";
        num[1].style.animationName = "fadeout";
        num[2].style.animationName = "fadeout";
        num[3].style.animationName = "fadein";
        
        num2[0].style.animationName = "fadeout";
        num2[1].style.animationName = "fadeout";
        num2[2].style.animationName = "fadeout";
        num2[3].style.animationName = "fadein";

        target = height*3;
    } else {
        num[0].style.animationName = "fadein";
        num[1].style.animationName = "fadeout";
        num[2].style.animationName = "fadeout";
        num[3].style.animationName = "fadeout";
        
        num2[0].style.animationName = "fadein";
        num2[1].style.animationName = "fadeout";
        num2[2].style.animationName = "fadeout";
        num2[3].style.animationName = "fadeout";

        target = height*4;
    }
}

window.addEventListener('wheel', function (event) {
    scrollY += event.deltaY;
    scrollY = mod(scrollY, height*4);
    scrolleff();
    timer = 1.5;
    scrolled = true;
})

function update () {
    if ((scrollY > target+1 || scrollY < target-1) && !scrolled) {
        scrollY += (target-scrollY) * 0.2;
        scrolleff();
        requestAnimationFrame(update)
    } else {
        if (target != height*4) {
            scrollY = target;
        } else {
            scrollY = 0;
        }
        scrolleff();
    }
}

const inte = setInterval(() => {
    timer -= 0.5
    if (timer < 1) {
        scrolled = false;
        update()
    }
}, 500);

window.addEventListener('touchstart', function(e) {
    lastY = e.touches[0].clientY;
});

let deltaaY = 0;

window.addEventListener('touchmove', function(e) {
    const currentY = e.touches[0].clientY;
    deltaaY = currentY - lastY;

    scrollY -= deltaaY;
    scrollY = mod(scrollY, height*4);
    scrolleff();
    timer = 1.5;
    scrolled = true;

    lastY = currentY
});

window.addEventListener('touchend', function(e) {
    console.log(deltaaY);
});