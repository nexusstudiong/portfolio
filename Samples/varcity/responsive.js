window.addEventListener('resize', function () {
    let navlink = document.getElementById('navlink');
    let logo = document.getElementById('logo');
    let pVar = document.getElementById('p');
    let logoDiv = document.getElementById('logoDiv');
    let bigUp2i = document.getElementById('bigUp2');
    let content = document.getElementById('content');
    let cExp = document.getElementById('cExp');
    let cHead = document.getElementById('cHead');
    let osB = document.getElementById('OSbutton');
    let exp = document.getElementById('exp');
    let dDiv = document.getElementById('downloadDiv');
    let mkp = document.getElementById('mkp');
    let dldlogoG = document.getElementById('dldlogoG');
    let dldlogoA = document.getElementById('dldlogoA');
    let gg1 = document.getElementById('gg');
    let ap1 = document.getElementById('ap');
    let animText = document.getElementById('animText');
    

    let screenWidth = window.innerWidth;
    console.log(screenWidth);

    if (screenWidth > 760) {
        animText.style.fontSize = "100px";
    } else if (screenWidth < 350) {
        animText.style.fontSize = "40px";
    } else {
        animText.style.fontSize = (((6/41)*screenWidth) - 11.51);
    }
    
    if (screenWidth > 600) {
        dldlogoG.style.width = "30px";
        dldlogoA.style.width = "30px";
        gg.style.fontSize = "18px";
        ap.style.fontSize = "20px";
    } else if (screenWidth < 350) {
        dldlogoG.style.width = "20px";
        dldlogoA.style.width = "20px";
        gg.style.fontSize = "14px";
        ap.style.fontSize = "15px";
    } else {
        dldlogoG.style.width = (((1/25)*screenWidth) + 6) + "px";
        dldlogoA.style.width = (((1/25)*screenWidth) + 6) + "px";
        gg1.style.fontSize = (((2/125)*screenWidth) + 8.4) + "px";
        ap1.style.fontSize = (((2/125)*screenWidth) + 9.4) + "px";
    }
    
    if (screenWidth > 1250) {
        cHead.style.fontSize = "70px";
        cHead.style.lineHeight = "70px";
        cExp.style.fontSize = "18px";
    } else if (screenWidth < 350) {
        cHead.style.fontSize = "35px";
        cHead.style.lineHeight = "35px";
        cExp.style.fontSize = "13px";
    } else {
        cHead.style.fontSize = (((7/180)*screenWidth) + (20)) + "px";
        cHead.style.lineHeight = (((7/180)*screenWidth) + (20)) + "px";
        cExp.style.fontSize =  (((1/180)*screenWidth) + (11.06)) + "px";
        cExp.style.fontWeight = "bold";
    }

    if (screenWidth <= 900) {
        content.style.flexDirection = "column";
        content.style.paddingLeft = "0px";
        cExp.style.textAlign = "center";
        mkp.style.margin = "20px 0px 0px 0px";
        exp.style.width = "100%";
        exp.style.padding = "0 10% 0 10%";
        cHead.style.margin = "20px 0 0 0";
        cHead.style.textAlign = "center";
        osB.style.margin = "17px 5px 0px 5px";
        dDiv.style.justifyContent = "center";
    } else {
        content.style.flexDirection = "row";
        content.style.paddingLeft = "70px";
        cExp.style.textAlign = "left";
        mkp.style.margin = "120px 120px 0px 0px";
        exp.style.width = "90%";
        exp.style.padding = "0";
        cHead.style.margin = "0";
        cHead.style.textAlign = "left";
        osB.style.margin = "17px 10px 0px 0px";
        dDiv.style.justifyContent = "left";
    }

    if (screenWidth <= 600) {
        navlink.style.display = "none";
        logo.style.height = "20px";
        logo.style.width = "20px";
        logo.style.marginRight = "5px";
        pVar.style.fontSize = "12px";
        logoDiv.style.width = "100%";
        logoDiv.style.justifyContent = "center";
        bigUp2i.style.padding = "34px 0% 0px 0%";
        content.style.borderRadius = "0px";
    } else {
        navlink.style.display = "block";
        navlink.style.justifyContent = "right";
        logo.style.height = "30px";
        logo.style.width = "30px";
        logo.style.marginRight = "10px";
        pVar.style.fontSize = "17px";
        logoDiv.style.width = "auto";
        logoDiv.style.justifyContent = "left";
        bigUp2i.style.padding = "50px 5% 0px 5%";
        content.style.borderRadius = "20px 20px 0px 0px";
    }
});

window.addEventListener('DOMContentLoaded', function () {
    let navlink = document.getElementById('navlink');
    let logo = document.getElementById('logo');
    let pVar = document.getElementById('p');
    let logoDiv = document.getElementById('logoDiv');
    let bigUp2i = document.getElementById('bigUp2');
    let content = document.getElementById('content');
    let cExp = document.getElementById('cExp');
    let cHead = document.getElementById('cHead');
    let osB = document.getElementById('OSbutton');
    let exp = document.getElementById('exp');
    let dDiv = document.getElementById('downloadDiv');
    let mkp = document.getElementById('mkp');
    let dldlogoG = document.getElementById('dldlogoG');
    let dldlogoA = document.getElementById('dldlogoA');
    let gg1 = document.getElementById('gg');
    let ap1 = document.getElementById('ap');
    let animText = document.getElementById('animText');
    

    let screenWidth = window.innerWidth;
    console.log(screenWidth);

    if (screenWidth > 760) {
        animText.style.fontSize = "100px";
    } else if (screenWidth < 350) {
        animText.style.fontSize = "40px";
    } else {
        animText.style.fontSize = (((6/41)*screenWidth) - 11.51) + "px";
    }
    
    if (screenWidth > 600) {
        dldlogoG.style.width = "30px";
        dldlogoA.style.width = "30px";
        gg.style.fontSize = "18px";
        ap.style.fontSize = "20px";
    } else if (screenWidth < 350) {
        dldlogoG.style.width = "20px";
        dldlogoA.style.width = "20px";
        gg.style.fontSize = "14px";
        ap.style.fontSize = "15px";
    } else {
        dldlogoG.style.width = (((1/25)*screenWidth) + 6) + "px";
        dldlogoA.style.width = (((1/25)*screenWidth) + 6) + "px";
        gg1.style.fontSize = (((2/125)*screenWidth) + 8.4) + "px";
        ap1.style.fontSize = (((2/125)*screenWidth) + 9.4) + "px";
    }
    
    if (screenWidth > 1250) {
        cHead.style.fontSize = "70px";
        cHead.style.lineHeight = "70px";
        cExp.style.fontSize = "18px";
    } else if (screenWidth < 350) {
        cHead.style.fontSize = "35px";
        cHead.style.lineHeight = "35px";
        cExp.style.fontSize = "13px";
    } else {
        cHead.style.fontSize = (((7/180)*screenWidth) + (20)) + "px";
        cHead.style.lineHeight = (((7/180)*screenWidth) + (20)) + "px";
        cExp.style.fontSize =  (((1/180)*screenWidth) + (11.06)) + "px";
        cExp.style.fontWeight = "bold";
    }

    if (screenWidth <= 900) {
        content.style.flexDirection = "column";
        content.style.paddingLeft = "0px";
        cExp.style.textAlign = "center";
        mkp.style.margin = "20px 0px 0px 0px";
        exp.style.width = "100%";
        exp.style.padding = "0 10% 0 10%";
        cHead.style.margin = "20px 0 0 0";
        cHead.style.textAlign = "center";
        osB.style.margin = "17px 5px 0px 5px";
        dDiv.style.justifyContent = "center";
    } else {
        content.style.flexDirection = "row";
        content.style.paddingLeft = "70px";
        cExp.style.textAlign = "left";
        mkp.style.margin = "120px 120px 0px 0px";
        exp.style.width = "90%";
        exp.style.padding = "0";
        cHead.style.margin = "0";
        cHead.style.textAlign = "left";
        osB.style.margin = "17px 10px 0px 0px";
        dDiv.style.justifyContent = "left";
    }

    if (screenWidth <= 600) {
        navlink.style.display = "none";
        logo.style.height = "20px";
        logo.style.width = "20px";
        logo.style.marginRight = "5px";
        pVar.style.fontSize = "12px";
        logoDiv.style.width = "100%";
        logoDiv.style.justifyContent = "center";
        bigUp2i.style.padding = "34px 0% 0px 0%";
        content.style.borderRadius = "0px";
    } else {
        navlink.style.display = "block";
        navlink.style.justifyContent = "right";
        logo.style.height = "30px";
        logo.style.width = "30px";
        logo.style.marginRight = "10px";
        pVar.style.fontSize = "17px";
        logoDiv.style.width = "auto";
        logoDiv.style.justifyContent = "left";
        bigUp2i.style.padding = "50px 5% 0px 5%";
        content.style.borderRadius = "20px 20px 0px 0px";
    }
})