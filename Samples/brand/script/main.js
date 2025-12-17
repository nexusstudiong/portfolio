let txtbox2 = document.getElementById('txtbox2');
let nav1 = document.getElementById('nav1');
let nav2 = document.getElementById('nav2');
let nav3 = document.getElementById('nav3');
let nav4 = document.getElementById('nav4');
let workbox = document.getElementById('workbox');
let aboutbox = document.getElementById('aboutbox');
let servicebox = document.getElementById('servicebox');
let contactbox = document.getElementById('contactbox');
let workscroll = document.getElementById('workscroll');
let aboutscroll = document.getElementById('aboutscroll');
let servicescroll = document.getElementById('servicescroll');
let contactscroll = document.getElementById('contactscroll');

// WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK
let work = document.getElementById('work');
let clickedwork = false;

work.addEventListener('mouseover', function() {
    let workbg = document.getElementById('workbg');
    let aboutbg = document.getElementById('aboutbg');
    let servicebg = document.getElementById('servicebg');
    let contactbg = document.getElementById('contactbg');
    let bgbg = document.getElementById('bgbg');

    if(clickedwork == false) {
        workbg.style.animationName = "work1";
        bgbg.style.animationName = "bg1";

        workbg.style.zIndex = 4;

        if (clickedabout == true) {
            aboutbg.style.zIndex = 3;
            servicebg.style.zIndex = 2;
            contactbg.style.zIndex = 2;
        } else if (clickedservice == true) {
            aboutbg.style.zIndex = 2;
            servicebg.style.zIndex = 3;
            contactbg.style.zIndex = 2;
        } else if (clickedcontact == true) {
            aboutbg.style.zIndex = 2;
            servicebg.style.zIndex = 2;
            contactbg.style.zIndex = 3;
        } else {
            aboutbg.style.zIndex = 2;
            servicebg.style.zIndex = 2;
            contactbg.style.zIndex = 2;
        }
    }
});

work.addEventListener('mouseout', function() {
    let workbg = document.getElementById('workbg');
    let bgbg = document.getElementById('bgbg');

    if(clickedwork == false) {
        workbg.style.animationName = "work2";
        bgbg.style.animationName = "bg2";
    }
});

work.addEventListener('click', function() {
    let workbg = document.getElementById('workbg');
    let aboutbg = document.getElementById('aboutbg');
    let servicebg = document.getElementById('servicebg');
    let contactbg = document.getElementById('contactbg');
    let bgbg = document.getElementById('bgbg');

    workbg.style.zIndex = 4;

    if (clickedabout == true) {
        aboutbg.style.zIndex = 3;
        servicebg.style.zIndex = 2;
        contactbg.style.zIndex = 2;
    } else if (clickedservice == true) {
        aboutbg.style.zIndex = 2;
        servicebg.style.zIndex = 3;
        contactbg.style.zIndex = 2;
    } else if (clickedcontact == true) {
        aboutbg.style.zIndex = 2;
        servicebg.style.zIndex = 2;
        contactbg.style.zIndex = 3;
    } else {
        aboutbg.style.zIndex = 2;
        servicebg.style.zIndex = 2;
        contactbg.style.zIndex = 2;
    }
    if (window.innerWidth > 800) {
        workbg.style.animationName = "work3";
    } else {
        workbg.style.animationName = "work4";
    }
    txtbox2.style.animationName = "txtgo";
    bgbg.style.animationName = "bg3";
    
    workbox.style.animationName = "titlecome";

    if (clickedabout) {
        aboutbox.style.animationName = "titlego"
    } else if (clickedservice) {
        servicebox.style.animationName = "titlego";
    } else if (clickedcontact) {
        contactbox.style.animationName = "titlego";
    } else {
        aboutbox.style.animationName = "none"
        servicebox.style.animationName = "none";
        contactbox.style.animationName = "none";
    }

    clickedwork = true;
    clickedabout = false;
    clickedservice = false;
    clickedcontact = false;

    nav1.style.textDecoration = 'underline';
    nav2.style.textDecoration = 'none';
    nav3.style.textDecoration = 'none';
    nav4.style.textDecoration = 'none';
    
    workscroll.style.display = 'block';
    aboutscroll.style.display = 'none';
    servicescroll.style.display = 'none';
    contactscroll.style.display = 'none';
});

// ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
let about = document.getElementById('about');
let clickedabout = false;

about.addEventListener('mouseover', function() {
    let workbg = document.getElementById('workbg');
    let aboutbg = document.getElementById('aboutbg');
    let servicebg = document.getElementById('servicebg');
    let contactbg = document.getElementById('contactbg');
    let bgbg = document.getElementById('bgbg');

    if(clickedabout == false) {
        aboutbg.style.animationName = "about1";
        bgbg.style.animationName = "bg1";

        aboutbg.style.zIndex = 4;
        
        if (clickedwork == true) {
            workbg.style.zIndex = 3;
            servicebg.style.zIndex = 2;
            contactbg.style.zIndex = 2;
        } else if (clickedservice == true) {
            workbg.style.zIndex = 2;
            servicebg.style.zIndex = 3;
            contactbg.style.zIndex = 2;
        } else if (clickedcontact == true) {
            workbg.style.zIndex = 2;
            servicebg.style.zIndex = 2;
            contactbg.style.zIndex = 3;
        } else {
            workbg.style.zIndex = 2;
            servicebg.style.zIndex = 2;
            contactbg.style.zIndex = 2;
        }
    }
});

about.addEventListener('mouseout', function() {
    let aboutbg = document.getElementById('aboutbg');
    let bgbg = document.getElementById('bgbg');

    if(clickedabout == false) {
        aboutbg.style.animationName = "about2";
        bgbg.style.animationName = "bg2";
    }
});

about.addEventListener('click', function() {
    let workbg = document.getElementById('workbg');
    let aboutbg = document.getElementById('aboutbg');
    let servicebg = document.getElementById('servicebg');
    let contactbg = document.getElementById('contactbg');
    let bgbg = document.getElementById('bgbg');

    aboutbg.style.zIndex = 4;
    
    if (clickedwork == true) {
        workbg.style.zIndex = 3;
        servicebg.style.zIndex = 2;
        contactbg.style.zIndex = 2;
    } else if (clickedservice == true) {
        workbg.style.zIndex = 2;
        servicebg.style.zIndex = 3;
        contactbg.style.zIndex = 2;
    } else if (clickedcontact == true) {
        workbg.style.zIndex = 2;
        servicebg.style.zIndex = 2;
        contactbg.style.zIndex = 3;
    } else {
        workbg.style.zIndex = 2;
        servicebg.style.zIndex = 2;
        contactbg.style.zIndex = 2;
    }

    if (window.innerWidth > 800) {
        aboutbg.style.animationName = "about3";
    } else {
        aboutbg.style.animationName = "about4";
    }
    txtbox2.style.animationName = "txtgo";
    bgbg.style.animationName = "bg3";
    
    aboutbox.style.animationName = "titlecome";
    
    if (clickedwork) {
        workbox.style.animationName = "titlego"
    } else if (clickedservice) {
        servicebox.style.animationName = "titlego";
    } else if (clickedcontact) {
        contactbox.style.animationName = "titlego";
    } else {
        workbox.style.animationName = "none"
        servicebox.style.animationName = "none";
        contactbox.style.animationName = "none";
    }
    
    clickedwork = false;
    clickedabout = true;
    clickedservice = false;
    clickedcontact = false;

    nav1.style.textDecoration = 'none';
    nav2.style.textDecoration = 'underline';
    nav3.style.textDecoration = 'none';
    nav4.style.textDecoration = 'none';
    
    workscroll.style.display = 'none';
    aboutscroll.style.display = 'block';
    servicescroll.style.display = 'none';
    contactscroll.style.display = 'none';
});

// SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE SERVICE
let service = document.getElementById('service');
let clickedservice = false;

service.addEventListener('mouseover', function() {
    let workbg = document.getElementById('workbg');
    let aboutbg = document.getElementById('aboutbg');
    let servicebg = document.getElementById('servicebg');
    let contactbg = document.getElementById('contactbg');
    let bgbg = document.getElementById('bgbg');

    if(clickedservice == false) {
        servicebg.style.animationName = "service1";
        bgbg.style.animationName = "bg1";

        servicebg.style.zIndex = 4;
        
        if (clickedwork == true) {
            workbg.style.zIndex = 3;
            aboutbg.style.zIndex = 2;
            contactbg.style.zIndex = 2;
        } else if (clickedabout == true) {
            workbg.style.zIndex = 2;
            aboutbg.style.zIndex = 3;
            contactbg.style.zIndex = 2;
        } else if (clickedcontact == true) {
            workbg.style.zIndex = 2;
            aboutbg.style.zIndex = 2;
            contactbg.style.zIndex = 3;
        } else {
            workbg.style.zIndex = 2;
            aboutbg.style.zIndex = 2;
            contactbg.style.zIndex = 2;
        }
    }
});

service.addEventListener('mouseout', function() {
    let servicebg = document.getElementById('servicebg');
    let bgbg = document.getElementById('bgbg');

    if(clickedservice == false) {
        servicebg.style.animationName = "service2";
        bgbg.style.animationName = "bg2";
    }
});

service.addEventListener('click', function() {
    let workbg = document.getElementById('workbg');
    let aboutbg = document.getElementById('aboutbg');
    let servicebg = document.getElementById('servicebg');
    let contactbg = document.getElementById('contactbg');
    let bgbg = document.getElementById('bgbg');

    servicebg.style.zIndex = 4;
    
    if (clickedwork == true) {
        workbg.style.zIndex = 3;
        aboutbg.style.zIndex = 2;
        contactbg.style.zIndex = 2;
    } else if (clickedabout == true) {
        workbg.style.zIndex = 2;
        aboutbg.style.zIndex = 3;
        contactbg.style.zIndex = 2;
    } else if (clickedcontact == true) {
        workbg.style.zIndex = 2;
        aboutbg.style.zIndex = 2;
        contactbg.style.zIndex = 3;
    } else {
        workbg.style.zIndex = 2;
        aboutbg.style.zIndex = 2;
        contactbg.style.zIndex = 2;
    }

    if (window.innerWidth > 800) {
        servicebg.style.animationName = "service3";
    } else {
        servicebg.style.animationName = "service4";
    }
    txtbox2.style.animationName = "txtgo";
    bgbg.style.animationName = "bg3";
    
    servicebox.style.animationName = "titlecome";
    
    if (clickedwork) {
        workbox.style.animationName = "titlego"
    } else if (clickedabout) {
        aboutbox.style.animationName = "titlego";
    } else if (clickedcontact) {
        contactbox.style.animationName = "titlego";
    } else {
        workbox.style.animationName = "none";
        aboutbox.style.animationName = "none"
        contactbox.style.animationName = "none";
    }
    
    clickedwork = false;
    clickedabout = false;
    clickedservice = true;
    clickedcontact = false;

    nav1.style.textDecoration = 'none';
    nav2.style.textDecoration = 'none';
    nav3.style.textDecoration = 'underline';
    nav4.style.textDecoration = 'none';
    
    workscroll.style.display = 'none';
    aboutscroll.style.display = 'none';
    servicescroll.style.display = 'block';
    contactscroll.style.display = 'none';
});

// CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
let contact = document.getElementById('contact');
let clickedcontact = false;

contact.addEventListener('mouseover', function() {
    let workbg = document.getElementById('workbg');
    let aboutbg = document.getElementById('aboutbg');
    let servicebg = document.getElementById('servicebg');
    let contactbg = document.getElementById('contactbg');
    let bgbg = document.getElementById('bgbg');

    if(clickedcontact == false) {
        contactbg.style.animationName = "contact1";
        bgbg.style.animationName = "bg1";

        contactbg.style.zIndex = 4;
        
        if (clickedwork == true) {
            workbg.style.zIndex = 3;
            aboutbg.style.zIndex = 2;
            servicebg.style.zIndex = 2;
        } else if (clickedabout == true) {
            workbg.style.zIndex = 2;
            aboutbg.style.zIndex = 3;
            servicebg.style.zIndex = 2;
        } else if (clickedservice == true) {
            workbg.style.zIndex = 2;
            aboutbg.style.zIndex = 2;
            servicebg.style.zIndex = 3;
        } else {
            workbg.style.zIndex = 2;
            aboutbg.style.zIndex = 2;
            servicebg.style.zIndex = 2;
        }
    }
});

contact.addEventListener('mouseout', function() {
    let contactbg = document.getElementById('contactbg');
    let bgbg = document.getElementById('bgbg');

    if(clickedcontact == false) {
        contactbg.style.animationName = "contact2";
        bgbg.style.animationName = "bg2";
    }
});

contact.addEventListener('click', function() {
    let workbg = document.getElementById('workbg');
    let aboutbg = document.getElementById('aboutbg');
    let servicebg = document.getElementById('servicebg');
    let contactbg = document.getElementById('contactbg');
    let bgbg = document.getElementById('bgbg');

    contactbg.style.zIndex = 4;
    
    if (clickedwork == true) {
        workbg.style.zIndex = 3;
        aboutbg.style.zIndex = 2;
        servicebg.style.zIndex = 2;
    } else if (clickedabout == true) {
        workbg.style.zIndex = 2;
        aboutbg.style.zIndex = 3;
        servicebg.style.zIndex = 2;
    } else if (clickedservice == true) {
        workbg.style.zIndex = 2;
        aboutbg.style.zIndex = 2;
        servicebg.style.zIndex = 3;
    } else {
        workbg.style.zIndex = 2;
        aboutbg.style.zIndex = 2;
        servicebg.style.zIndex = 2;
    }

    if (window.innerWidth > 800) {
        contactbg.style.animationName = "contact3";
    } else {
        contactbg.style.animationName = "contact4";
    }
    txtbox2.style.animationName = "txtgo";
    bgbg.style.animationName = "bg3";
    
    contactbox.style.animationName = "titlecome";
    
    if (clickedwork) {
        workbox.style.animationName = "titlego"
    } else if (clickedabout) {
        aboutbox.style.animationName = "titlego";
    } else if (clickedservice) {
        servicebox.style.animationName = "titlego";
    } else {
        workbox.style.animationName = "none"
        aboutbox.style.animationName = "none";
        servicebox.style.animationName = "none";
    }
    
    clickedwork = false;
    clickedabout = false;
    clickedservice = false;
    clickedcontact = true;

    nav1.style.textDecoration = 'none';
    nav2.style.textDecoration = 'none';
    nav3.style.textDecoration = 'none';
    nav4.style.textDecoration = 'underline';
    
    workscroll.style.display = 'none';
    aboutscroll.style.display = 'none';
    servicescroll.style.display = 'none';
    contactscroll.style.display = 'block';
});

console.log(clickedwork + ' ' + clickedabout + ' ' + clickedservice + ' ' + clickedcontact);