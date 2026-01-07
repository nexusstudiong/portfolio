const h1exp = document.getElementsByClassName('h1exp');
const job = document.getElementsByClassName('job');
const menu = document.getElementById('menu');
const closee = document.getElementById('close');
const nav = document.getElementsByClassName('navlinkp');
const hhd = document.getElementById('hhd');
const socc = document.getElementById('socc') || "";
const type = document.getElementsByClassName('type');
let screenHeight;

const width = window.innerWidth;

const webContainer = document.getElementsByClassName('website-container')[0] || "";

const listOfWebsites = [{
    name: 'portfolio',
    link: '/',
    note: 'This is my portfolio website. Designed and developed by me',
},{
    name: 'moveeasecrew',
    link: 'https://moveeasecrew.com/',
    note: 'This is a complete inquiry website I designed and developed for a client',
},{
    name: 'harmonique',
    link: '/Samples/harmonique/',
    note: 'This was a website for an organisation that linked cleaners and personal support workers with clients. It has been taken down',
},{
    name: 'varcity',
    link: '/Samples/varcity/',
    note: 'This was a website for a mobile application tasked with connecting students across Nigerian universities',
},{
    name: 'pink',
    link: '/Samples/flowclone/',
    note: 'This is a static sample website inspired by <a href="https://justgowiththeflow.com">justgowiththeflow.com</a>. This was developed by me.',
},{
    name: 'cookies',
    link: '/Samples/cookie/',
    note: 'This is an incomplete sample website inspired by a design from <a href="https://www.instagram.com/marcelodesignxh">Marcelo Cadeno</a> on instagram. This was developed by me',
},{
    name: 'gameon',
    link: '/Samples/gameon/',
    note: 'This is an incomplete sample website developed by me.',
},{
    name: 'brand',
    link: '/Samples/brand/',
    note: 'This is an incomplete sample website developed by me.',
},{
    name: 'lumiera',
    link: '/Samples/port1/',
    note: 'This is a sample website with an experimental design language',
},];

listOfWebsites.forEach((website) => {
    webContainer.innerHTML += `
        <div class="webcard">
            <div class="thumbs">
                <a href="${website.link}">
                    <video
                        src="/media/vids/${website.name}.mp4"
                        loop 
                        autoplay
                        muted
                        playsinline
                        class="website-video"
                    ></video>
                    </a>
            </div>
            <p>${website.note}</p>
        </div>
    `;
});

const websiteVideos = document.getElementsByClassName('website-video');

for (let i = 0; i < websiteVideos.length; i++) {
    websiteVideos[i].pause();
}

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

    for (let i = 0; i < websiteVideos.length; i++) {
        screenHeight > websiteVideos[i].getBoundingClientRect().top && websiteVideos[i].play();
    }

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