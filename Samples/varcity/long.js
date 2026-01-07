window.addEventListener('scroll', function() {
    let yPos = window.scrollY;
    
    let th = 500;

    const txt1 =  document.getElementById('txt1');
    const txt2 =  document.getElementById('txt2');
    const txt3 =  document.getElementById('txt3');
    const txt4 =  document.getElementById('txt4');

    let top1 = txt1.getBoundingClientRect().top;
    let top2 = txt2.getBoundingClientRect().top;
    let top3 = txt3.getBoundingClientRect().top;
    let top4 = txt4.getBoundingClientRect().top;

    if (top1 <= th) {
        txt1.style.animationName = "longAnim";
    }
    if (top2 <= th) {
        txt2.style.animationName = "longAnim";
    }
    if (top3 <= th) {
        txt3.style.animationName = "longAnim";
    }
    if (top4 <= th) {
        txt4.style.animationName = "longAnim";
    }
});

window.addEventListener('scroll', function() {
    let yPos = window.scrollY;
    
    let th = 600;

    const txt1 =  document.getElementById('txt1');
    const txt2 =  document.getElementById('txt2');
    const txt3 =  document.getElementById('txt3');
    const txt4 =  document.getElementById('txt4');

    let top1 = txt1.getBoundingClientRect().top;
    let top2 = txt2.getBoundingClientRect().top;
    let top3 = txt3.getBoundingClientRect().top;
    let top4 = txt4.getBoundingClientRect().top;

    if (top1 <= th) {
        txt1.style.animationName = "longAnim";
    }
    if (top2 <= th) {
        txt2.style.animationName = "longAnim";
    }
    if (top3 <= th) {
        txt3.style.animationName = "longAnim";
    }
    if (top4 <= th) {
        txt4.style.animationName = "longAnim";
    }
});