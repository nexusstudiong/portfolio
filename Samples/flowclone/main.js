let pnktxt = document.getElementById('pnktxt')
let swipe1 = document.getElementById('swipe1')
let swipe2 = document.getElementById('swipe2')
let swipe3 = document.getElementById('swipe3')
let body = document.getElementById('body')
let bd1 = document.getElementById('bd1')
let bd2 = document.getElementById('bd2')
let bd3 = document.getElementById('bd3')
let fdd = document.getElementById('fdd')
let img1 = document.getElementById('img1');
let img2a = document.getElementById('img2a');
let txt1 = document.getElementById('txt1');
let txt2p = document.getElementById('txt2p');
let img2p2 = document.getElementById('img2p2');
let spl2a = document.getElementById('spl2a');
let spl3a = document.getElementById('spl3a');
let piccrop = document.getElementById('piccrop');
let picdesc = document.getElementById('picdesc');
let imgalt = document.getElementById('imgalt')
let footer = document.getElementById('footer')
let totop = document.getElementById('totop')
let over = document.getElementsByClassName('over')[0];
let txt2 = document.getElementsByClassName('txt2')[0];
let thb2 = document.getElementsByClassName('thb2')[0];
let aaft2 = document.getElementsByClassName('aaft2')[0];
let f2 = document.getElementsByClassName('f2')[0];
let dis = document.getElementsByClassName('dis');
let ans = document.getElementsByClassName('ans');
let panimh = document.getElementsByClassName('panimh');
let scrollY = 0;
let scrollY2 = 0;
let scrollY3 = 0;
let col = 255;
let col2 = 255;
let ftop = 0;

let scrolled = false;
let starttxt = true;
let starttxt2 = true;
let starttxt3 = true;
let starttxt4 = true;
let starttxt5 = true;
let starttxt6 = true;

let pw = pnktxt.clientWidth;
let width = window.innerWidth;
let height = window.innerHeight;

let pw2 = ((pw-(0.5*width))/2)+(width*0.5);

document.documentElement.style.setProperty('--txtw1', `${pw}px`)
document.documentElement.style.setProperty('--txtw2', `${pw2}px`)

let split = SplitText.create("#txt1", { type: "lines", linesClass: "line"});
let split2 = SplitText.create("#spl2", { type: "lines", linesClass: "line"});
let split3 = SplitText.create("#bigth1", { type: "lines", linesClass: "line"});
let split4 = SplitText.create("#spl3", { type: "lines", linesClass: "line"});
let split5 = SplitText.create("#splp", { type: "chars", charsClass: "line"});
let split6 = SplitText.create(".label", { type: "lines", linesClass: "line"});
let split7 = SplitText.create("#spl7", { type: "lines", linesClass: "line"});

function scrolleff(event) {
    scrollY += event.deltaY;
    scrollY = Math.max(0, scrollY);
    scrollY = Math.min((bd1.getBoundingClientRect().height + bd2.getBoundingClientRect().height + height + 450 + bd3.getBoundingClientRect().height + footer.getBoundingClientRect().height), scrollY);

    let sw2 = -scrollY*0.5;
    let sw3 = -scrollY;

    sw2 = Math.max(-(swipe2.clientWidth-(width*0.5)), sw2);
    sw3 = Math.max(-(pw-(width*0.5)), sw3);

    swipe2.style.right = sw2  + "px";
    swipe3.style.right = sw3 + "px";

    bd1.style.top = 300 + height - scrollY + "px";

    col = Math.round(15 + 255 - scrollY*0.05);
    col = Math.min(255, col);

    swipe1.style.backgroundColor = `rgb(${col}, ${col}, ${col})`;
    swipe2.style.backgroundColor = `rgb(${col}, ${col}, ${col})`;
    swipe3.style.backgroundColor = `rgb(${col}, ${col}, ${col})`;
    body.style.backgroundColor = `rgb(${col}, ${col}, ${col})`;

    let topp = bd1.getBoundingClientRect().top;

    if (topp <= 100) {
        over.style.zIndex = 2;
        over.style.height = "fit-content";
        over.style.padding = "0px 30px 0px 100px";
        for (let i = 0; i < dis.length; i++) {
            dis[i].style.display = "none";
        }
        for (let i = 0; i < ans.length; i++) {
            ans[i].style.animationName = "none";
        }
    } else {
        over.style.zIndex = 1;
        over.style.height = "100vh";
        over.style.padding = "0 30px 41vh 100px";
        for (let i = 0; i < dis.length; i++) {
            dis[i].style.display = "flex";
        }
    }

    if (topp <= 20) {
        fdd.style.animationName = "start4";
    }
    if (img1.getBoundingClientRect().bottom < height/1.2) {
        img1.style.animationName = "start6";
        if (starttxt) {
            gsap.fromTo(split.lines, {
                duration: 0.5,
                y: 50,
                stagger: 0.1,
                opacity: 0
            },
            {
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                opacity: 1
            },
        );
        }
        starttxt = false;
    }
    if (txt2.getBoundingClientRect().top < height/2) {
        txt2.style.animationName = "start7";
    }
    if (bd1.getBoundingClientRect().bottom >= 0) {
        bd2.style.top = `${bd1.getBoundingClientRect().bottom}px`;
        scrollY2 = -100;
        img2p2.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
    } else if (bd1.getBoundingClientRect().bottom < 0) {
        scrollY2 += event.deltaY;
        scrollY2 = Math.min((height + 100 + bd3.getBoundingClientRect().height + footer.getBoundingClientRect().height), scrollY2);
        bd2.style.top = `0px`;
        img2p2.style.clipPath = `polygon(0% calc(100% + ${0 - scrollY2}px), 100% calc(100% + ${0 - scrollY2}px), 100% 100%, 0% 100%)`;
        thb2.style.clipPath = `polygon(0% calc(100% + ${0 - (scrollY2*100/height)}%), 100% calc(100% + ${0 - (scrollY2*100/height)}%), 100% 100%, 0% 100%)`;
    }
    if (scrollY2 > (height/2)) {
        for (let i = 0; i < panimh.length; i++) {
            panimh[i].style.animationName = "start8";
        }
    } else {
        for (let i = 0; i < panimh.length; i++) {
            panimh[i].style.animationName = "start8r";
        }
    }
    if (scrollY2 <= height) {
        scrollY3 = -100;
        bd3.style.top = `100%`;
    } else {
        bd3.style.top = `calc(100vh + ${0 - (scrollY3*100/height)}%)`;
        scrollY3 += event.deltaY;
        scrollY3 = Math.min((bd3.getBoundingClientRect().height + footer.getBoundingClientRect().height), scrollY3);

        col2 = Math.round(15 + 255 - scrollY3*0.05);
        col2 = Math.min(255, col2);
        txt2p.style.backgroundColor = `rgb(${col2}, ${col2}, ${col2})`;
        
        if (bd3.getBoundingClientRect().top < height/1.5) {
            img2a.style.animationName = "start6";
            imgalt.style.animationName = "start7";
            spl2a.style.animationName = "start7";
            if (starttxt2) {
                gsap.fromTo(split2.lines, {
                    duration: 0.5,
                    y: 50,
                    stagger: 0.1,
                    opacity: 0
                },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    opacity: 1
                }
            );
            }
            starttxt2 = false;
        }
        
        if (imgalt.getBoundingClientRect().bottom < height/2.5) {
            if (starttxt3) {
                gsap.fromTo(split3.lines, {
                    duration: 0.5,
                    y: 50,
                    stagger: 0.1,
                    opacity: 0
                },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    opacity: 1
                }
            );
            }
            starttxt3 = false;
        }
        
        if (aaft2.getBoundingClientRect().top < height/2) {
            piccrop.style.animationName = "start6";
            picdesc.style.animationName = "start7";
            spl3a.style.animationName = "start7";
            if (starttxt4) {
                gsap.fromTo(split4.lines, {
                    duration: 0.5,
                    y: 50,
                    stagger: 0.1,
                    opacity: 0
                },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    opacity: 1
                }
            );
            }
            starttxt4 = false;
        }
        ftop = bd3.getBoundingClientRect().bottom;
        ftop = Math.max(0, ftop);

        footer.style.top = `${ftop - 2}px`;
        
        if (footer.getBoundingClientRect().top < height/2) {
            if (starttxt5) {
                gsap.fromTo(split5.chars, {
                    duration: 0.5,
                    y: 50,
                    stagger: 0.07,
                    opacity: 0
                },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    opacity: 1
                });
                gsap.fromTo(split6.lines, {
                    duration: 0.5,
                    y: 50,
                    stagger: 0.08,
                    opacity: 0
                },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    opacity: 1
                });
                gsap.fromTo(split7.lines, {
                    duration: 0.5,
                    y: 50,
                    stagger: 0.1,
                    opacity: 0
                },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    opacity: 1
                });
            }
            starttxt5 = false;
        }
        if (footer.getBoundingClientRect().top <= 0) {
            f2.style.animationName = "start7";
        }
    }
}

function scrolleff2() {
    scrollY = Math.max(0, scrollY);
    scrollY = Math.min((bd1.getBoundingClientRect().height + bd2.getBoundingClientRect().height + height + 450 + bd3.getBoundingClientRect().height + footer.getBoundingClientRect().height), scrollY);

    let sw2 = -scrollY*0.5;
    let sw3 = -scrollY;

    sw2 = Math.max(-(swipe2.clientWidth-(width*0.5)), sw2);
    sw3 = Math.max(-(pw-(width*0.5)), sw3);

    swipe2.style.right = sw2  + "px";
    swipe3.style.right = sw3 + "px";

    bd1.style.top = 300 + height - scrollY + "px";

    col = Math.round(15 + 255 - scrollY*0.05);
    col = Math.min(255, col);

    swipe1.style.backgroundColor = `rgb(${col}, ${col}, ${col})`;
    swipe2.style.backgroundColor = `rgb(${col}, ${col}, ${col})`;
    swipe3.style.backgroundColor = `rgb(${col}, ${col}, ${col})`;
    body.style.backgroundColor = `rgb(${col}, ${col}, ${col})`;

    let topp = bd1.getBoundingClientRect().top;

    if (topp <= 100) {
        over.style.zIndex = 2;
        over.style.height = "fit-content";
        over.style.padding = "0px 30px 0px 100px";
        for (let i = 0; i < dis.length; i++) {
            dis[i].style.display = "none";
        }
        for (let i = 0; i < ans.length; i++) {
            ans[i].style.animationName = "none";
        }
    } else {
        over.style.zIndex = 1;
        over.style.height = "100vh";
        over.style.padding = "0 30px 41vh 100px";
        for (let i = 0; i < dis.length; i++) {
            dis[i].style.display = "flex";
        }
    }

    if (topp <= 20) {
        fdd.style.animationName = "start4";
    }
    if (img1.getBoundingClientRect().bottom < height/1.2) {
        img1.style.animationName = "start6";
        if (starttxt) {
            gsap.fromTo(split.lines, {
                duration: 0.5,
                y: 50,
                stagger: 0.1,
                opacity: 0
            },
            {
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                opacity: 1
            },
        );
        }
        starttxt = false;
    }
    if (txt2.getBoundingClientRect().top < height/2) {
        txt2.style.animationName = "start7";
    }
    if (bd1.getBoundingClientRect().bottom >= 0) {
        bd2.style.top = `${bd1.getBoundingClientRect().bottom}px`;
        scrollY2 = -100;
        img2p2.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
    } else if (bd1.getBoundingClientRect().bottom < 0) {
        scrollY2 = Math.min((height + 100 + bd3.getBoundingClientRect().height + footer.getBoundingClientRect().height), scrollY2);
        bd2.style.top = `0px`;
        img2p2.style.clipPath = `polygon(0% calc(100% + ${0 - scrollY2}px), 100% calc(100% + ${0 - scrollY2}px), 100% 100%, 0% 100%)`;
        thb2.style.clipPath = `polygon(0% calc(100% + ${0 - (scrollY2*100/height)}%), 100% calc(100% + ${0 - (scrollY2*100/height)}%), 100% 100%, 0% 100%)`;
    }
    if (scrollY2 > (height/2)) {
        for (let i = 0; i < panimh.length; i++) {
            panimh[i].style.animationName = "start8";
        }
    } else {
        for (let i = 0; i < panimh.length; i++) {
            panimh[i].style.animationName = "start8r";
        }
    }
    if (scrollY2 <= height) {
        scrollY3 = -100;
        bd3.style.top = `100%`;
    } else {
        bd3.style.top = `calc(100vh + ${0 - (scrollY3*100/height)}%)`;
        scrollY3 = Math.min((bd3.getBoundingClientRect().height + footer.getBoundingClientRect().height), scrollY3);

        col2 = Math.round(15 + 255 - scrollY3*0.05);
        col2 = Math.min(255, col2);
        txt2p.style.backgroundColor = `rgb(${col2}, ${col2}, ${col2})`;
        
        if (bd3.getBoundingClientRect().top < height/1.5) {
            img2a.style.animationName = "start6";
            imgalt.style.animationName = "start7";
            spl2a.style.animationName = "start7";
            if (starttxt2) {
                gsap.fromTo(split2.lines, {
                    duration: 0.5,
                    y: 50,
                    stagger: 0.1,
                    opacity: 0
                },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    opacity: 1
                }
            );
            }
            starttxt2 = false;
        }
        
        if (imgalt.getBoundingClientRect().bottom < height/2.5) {
            if (starttxt3) {
                gsap.fromTo(split3.lines, {
                    duration: 0.5,
                    y: 50,
                    stagger: 0.1,
                    opacity: 0
                },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    opacity: 1
                }
            );
            }
            starttxt3 = false;
        }
        
        if (aaft2.getBoundingClientRect().top < height/2) {
            piccrop.style.animationName = "start6";
            picdesc.style.animationName = "start7";
            spl3a.style.animationName = "start7";
            if (starttxt4) {
                gsap.fromTo(split4.lines, {
                    duration: 0.5,
                    y: 50,
                    stagger: 0.1,
                    opacity: 0
                },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    opacity: 1
                }
            );
            }
            starttxt4 = false;
        }
        ftop = bd3.getBoundingClientRect().bottom;
        ftop = Math.max(0, ftop);

        footer.style.top = `${ftop - 2}px`;
        
        if (footer.getBoundingClientRect().top < height/2) {
            if (starttxt5) {
                gsap.fromTo(split5.chars, {
                    duration: 0.5,
                    y: 50,
                    stagger: 0.07,
                    opacity: 0
                },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    opacity: 1
                });
                gsap.fromTo(split6.lines, {
                    duration: 0.5,
                    y: 50,
                    stagger: 0.08,
                    opacity: 0
                },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    opacity: 1
                });
                gsap.fromTo(split7.lines, {
                    duration: 0.5,
                    y: 50,
                    stagger: 0.1,
                    opacity: 0
                },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    opacity: 1
                });
            }
            starttxt5 = false;
        }
        if (footer.getBoundingClientRect().top <= 0) {
            f2.style.animationName = "start7";
        }
    }
}

window.addEventListener('wheel', function (event) {
    scrolled = true;
    scrolleff(event);
});

let speedtop = 0.1;

function update() {
    if (scrollY>0.5  && !scrolled) {
        scrollY += ((scrollY-scrollY)-scrollY) * speedtop;
        scrollY2 += ((scrollY2-scrollY)-scrollY2) * speedtop;
        scrollY3 += ((scrollY3-scrollY)-scrollY3) * speedtop;
        console.log(`scrollY:${Math.round(scrollY)}; scrollY2:${Math.round(scrollY2)}; scrollY3:${Math.round(scrollY3)}; `);
        requestAnimationFrame(update)
        scrolleff2();
        thb2.style.clipPath = `polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)`;
    } else {
        scrollY = 0;
    }
}

totop.addEventListener('click', function () {
    scrolled = false;
    update();
})