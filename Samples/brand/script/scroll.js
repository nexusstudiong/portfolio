window.addEventListener('scroll', function() {
    let scroll =  window.scrollY;

    let bg = document.getElementById('bg');
    let workbg = document.getElementById('workbg');
    let aboutbg = document.getElementById('aboutbg');
    let servicebg = document.getElementById('servicebg');
    let contactbg = document.getElementById('contactbg');
    let txtbox = document.getElementById('txtbox');
    let nav = document.getElementById('nav');
    let titlebox1 = document.getElementById('titlebox1');
    let titlebox2 = document.getElementById('titlebox2');
    let titlebox3 = document.getElementById('titlebox3');
    let titlebox4 = document.getElementById('titlebox4');

    bg.style.transform = 'translateY(-' + scroll + 'px)';
    workbg.style.transform = 'translateY(-' + scroll + 'px)';
    aboutbg.style.transform = 'translateY(-' + scroll + 'px)';
    servicebg.style.transform = 'translateY(-' + scroll + 'px)';
    contactbg.style.transform = 'translateY(-' + scroll + 'px)';
    txtbox.style.transform = 'translateY(-' + scroll + 'px)';
    nav.style.transform = 'translateY(-' + scroll + 'px)';
    titlebox1.style.transform = 'translateY(-' + (60 + (scroll/2)) + '%)';
    titlebox2.style.transform = 'translateY(-' + (60 + (scroll/2)) + '%)';
    titlebox3.style.transform = 'translateY(-' + (60 + (scroll/2)) + '%)';
    titlebox4.style.transform = 'translateY(-' + (60 + (scroll/2)) + '%)';
});