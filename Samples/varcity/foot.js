window.addEventListener('DOMContentLoaded', function() {

    let screenHeight = window.innerHeight;
    let screenWidth = window.innerWidth;

    let f1 = document.getElementById('f1');
    let footB = document.getElementById('footB');
    let footB1 = document.getElementById('footB1');
    let footB2 = document.getElementById('footB2');
    let il = document.getElementById('il');
    
    if (screenWidth <= 800) {
        f1.style.flexDirection = "column";
        il.style.marginBottom = "20px";
        footB.style.marginBottom = "20px";
        footB1.style.marginBottom = "20px";
        footB2.style.marginBottom = "20px";
    } else {
        f1.style.flexDirection = "row";
        il.style.marginBottom = "0px";
        footB.style.marginBottom = "0px";
        footB1.style.marginBottom = "0px";
        footB2.style.marginBottom = "0px";
    }
});

window.addEventListener('resize', function() {

    let screenHeight = window.innerHeight;
    let screenWidth = window.innerWidth;

    let f1 = document.getElementById('f1');
    let footB = document.getElementById('footB');
    let footB1 = document.getElementById('footB1');
    let footB2 = document.getElementById('footB2');
    let il = document.getElementById('il');
    
    if (screenWidth <= 800) {
        f1.style.flexDirection = "column";
        il.style.marginBottom = "20px";
        footB.style.marginBottom = "20px";
        footB1.style.marginBottom = "20px";
        footB2.style.marginBottom = "20px";
    } else {
        f1.style.flexDirection = "row";
        il.style.marginBottom = "0px";
        footB.style.marginBottom = "0px";
        footB1.style.marginBottom = "0px";
        footB2.style.marginBottom = "0px";
    }
});