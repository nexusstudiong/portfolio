let h1exp = document.getElementsByClassName('h1exp');
let job = document.getElementsByClassName('job');
let menu = document.getElementById('menu');
let closee = document.getElementById('close');
let nav = document.getElementsByClassName('navlinkp');
let hhd = document.getElementById('hhd');
let socc = document.getElementById('socc') || "";
let type = document.getElementsByClassName('type');
let screenHeight;

let thbW = 380;

let width;
let thbs = document.getElementsByClassName('thumbs');

let tcont = document.getElementsByClassName('thumbcont')[0] || "";
width = window.innerWidth;

let thnum = 6;

if (width <= thbW*2) {
    console.log('nothing');
} else if (width <=thbW*3) {
    thnum = thnum%2 + thnum;
} else if (width <=thbW*4) {
    thnum = (3-thnum%3) + thnum;
} else if (width <=thbW*5) {
    thnum = (4-thnum%4) + thnum;
} else if (width <=thbW*6) {
    thnum = (5-thnum%5) + thnum;
}

for (let i = 0; i < thnum; i++) {
    tcont.innerHTML += `
        <div class="thumbs">
            <video src="https://moveeasecrew.com/media/vids/${i+1}.mp4" loop autoplay muted playsinline></video>
        </div>`;    
}

console.log(tcont);

function screenH() {
    screenHeight = innerHeight;
};
function cropp(){
    for (let i = 0; i < h1exp.length; i++) {
        let pos = h1exp[i].getBoundingClientRect().top;
    
        let perc = pos*100/screenHeight;
    
        if (perc > 80) {
            h1exp[i].style.backgroundImage = `linear-gradient(to bottom, #888 0%, #444 0%)`;
        } else if (perc > 20) {
            let cut = 100 - ((5/3) * perc - 100/3);
            h1exp[i].style.backgroundImage = `linear-gradient(to bottom, #888 ${cut-10}%, #444 ${cut}%)`;
        } else {
            h1exp[i].style.backgroundImage = `linear-gradient(to bottom, #888 100%, #444 100%)`;
        }
    }
    
    for (let i = 0; i < job.length; i++) {
        let pos = job[i].getBoundingClientRect().top;
    
        let perc = pos*100/screenHeight;
    
        if (perc > 80) {
            job[i].style.backgroundImage = `linear-gradient(to right, #888 0%, #444 0%)`;
        } else if (perc > 20) {
            let cut = 100 - ((5/3) * perc - 100/3);
            job[i].style.backgroundImage = `linear-gradient(to right, #888 ${cut-10}%, #444 ${cut}%)`;
        } else {
            job[i].style.backgroundImage = `linear-gradient(to right, #888 100%, #444 100%)`;
        }
    }
};

document.addEventListener('DOMContentLoaded', function(){screenH(); cropp()});
window.addEventListener('resize', screenH());

window.addEventListener('scroll', function(){
    for (let i = 0; i < h1exp.length; i++) {
        let pos = h1exp[i].getBoundingClientRect().top;
    
        let perc = pos*100/screenHeight;
    
        if (perc > 80) {
            h1exp[i].style.backgroundImage = `linear-gradient(to bottom, #888 0%, #444 0%)`;
        } else if (perc > 20) {
            let cut = 100 - ((5/3) * perc - 100/3);
            h1exp[i].style.backgroundImage = `linear-gradient(to bottom, #888 ${cut-10}%, #444 ${cut}%)`;
        } else {
            h1exp[i].style.backgroundImage = `linear-gradient(to bottom, #888 100%, #444 100%)`;
        }
    }
    
    for (let i = 0; i < job.length; i++) {
        let pos = job[i].getBoundingClientRect().top;
    
        let perc = pos*100/screenHeight;
    
        if (perc > 80) {
            job[i].style.backgroundImage = `linear-gradient(to right, #888 0%, #444 0%)`;
        } else if (perc > 20) {
            let cut = 100 - ((5/3) * perc - 100/3);
            job[i].style.backgroundImage = `linear-gradient(to right, #888 ${cut-10}%, #444 ${cut}%)`;
        } else {
            job[i].style.backgroundImage = `linear-gradient(to right, #888 100%, #444 100%)`;
        }
    }
});

let nlh = 0;

let tg = document.getElementById('tag') || "";

menu.addEventListener('mousedown', function(){
    nav[0].style.animationName = "navdn";
    if (tg != "") {
        hhd.style.animationName = "hdn2";
    } else {
        hhd.style.animationName = "hdn";
    }
    if (socc != "") {
        socc.style.animationName = "sdn";
    }
    menu.style.display = "none";
    closee.style.display = "flex";

    nlh = nav[0].offsetHeight;
    document.documentElement.style.setProperty('--np-h', `-${nlh}px`);
});

closee.addEventListener('mousedown', function(){
    nav[0].style.animationName = "navup";
    if (tg != "") {
        hhd.style.animationName = "hup2";
    } else {
        hhd.style.animationName = "hup";
    }
    if (socc != "") {
        socc.style.animationName = "sup";
    }
    menu.style.display = "flex";
    closee.style.display = "none";
});

;
document.addEventListener('DOMContentLoaded', function () {

});
let hometag = document.getElementById('tagg') || "";

if (hometag.innerHTML == "home") {
    setInterval (function () {

        type[0].parentElement.style.animationName = "closetype";
        type[0].parentElement.style.animationDuration = "0.3s";
        type[0].parentElement.style.animationFillMode = "both";
        type[0].parentElement.style.animationTimingFunction = "ease-out";

        setTimeout(function() {
            if (type[0].innerHTML == "websites") {
                type[0].innerHTML = "games";
            } else if (type[0].innerHTML == "games") {
                type[0].innerHTML = "mobile apps";
            } else if (type[0].innerHTML == "mobile apps") {
                type[0].innerHTML = "flyers"
            } else if (type[0].innerHTML == "flyers") {
                type[0].innerHTML = "logos"
            } else if (type[0].innerHTML == "logos") {
                type[0].innerHTML = "websites"
            }
        }, 300)
    }, 3000);

    setTimeout (function () {
        setInterval (function () {

        type[0].parentElement.style.animationName = "opentype";
        type[0].parentElement.style.animationDuration = "0.3s";
        type[0].parentElement.style.animationFillMode = "both";
        type[0].parentElement.style.animationTimingFunction = "ease-in";
        }, 3000);
        
    }, 1000);

    setInterval (function () {
        type[0].parentElement.style.borderRight = "4px solid var(--pry-color)";
    }, 1000);

    setInterval (function () {
        setTimeout (function () {
            type[0].parentElement.style.borderRight = "4px solid transparent";
        }, 500)
    }, 1000);
}

function thbSize() {
    width = window.innerWidth;

    for (let i = 0; i < thbs.length; i++) {
        if (width <= thbW*2) {
            thbs[i].style.width = `${100}%`;
        } else if (width <=thbW*3) {
            thbs[i].style.width = `${(100/2)-2}%`;
        } else if (width <=thbW*4) {
            thbs[i].style.width = `${(100/3)-2}%`;
        } else if (width <=thbW*5) {
            thbs[i].style.width = `${(100/4)-2}%`;
        } else if (width <=thbW*6) {
            thbs[i].style.width = `${(100/5)-2}%`;
        }
    }
}

thbSize();

window.addEventListener('resize', function(){
    thbSize();
});