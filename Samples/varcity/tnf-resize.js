window.addEventListener('DOMContentLoaded', function() {
    let screenHeight = window.innerHeight;
    let screenWidth = window.innerWidth;

    let block1 = document.getElementById('block1');
    let img1 = document.getElementById('img1');
    let txt1 = document.getElementById('txt1');

    let block2 = document.getElementById('block2');
    let img2 = document.getElementById('img2');
    let txt2 = document.getElementById('txt2');
    let dd2 = document.getElementById('downloadDiv2')
    
    let block3 = document.getElementById('block3');
    let img3 = document.getElementById('img3');
    let txt3 = document.getElementById('txt3');
    
    let block4 = document.getElementById('block4');
    let img4 = document.getElementById('img4');
    let txt4 = document.getElementById('txt4');
    let dd4 = document.getElementById('downloadDiv4');
    let ap4 = document.getElementById('ap4');
    let gg4 = document.getElementById('gg4');
    

    if (screenWidth <= 800) {
        block1.style.flexDirection = "column";
        img1.style.marginLeft = "0px";
        img1.style.marginRight = "0px";
        img1.style.marginBottom = "50px";
        txt1.style.width = "100%";
        txt1.style.textAlign = "center";

        block2.style.flexDirection = "column-reverse";
        img2.style.marginLeft = "0px";
        img2.style.marginRight = "0px";
        img2.style.marginBottom = "50px";
        txt2.style.width = "100%";
        txt2.style.textAlign = "center";
        dd2.style.justifyContent = "center";
        
        block3.style.flexDirection = "column";
        img3.style.marginLeft = "0px";
        img3.style.marginRight = "0px";
        img3.style.marginBottom = "50px";
        txt3.style.width = "100%";
        txt3.style.textAlign = "center";

        block4.style.flexDirection = "column";
        img4.style.width = "100%";
        txt4.style.margin = "0px";
        txt4.style.width = "80%";
        txt4.style.textAlign = "center";
        txt4.style.paddingTop = "30px";
        dd4.style.justifyContent = "center";
        dd4.style.marginBottom = "20px";
        ap4.style.fontSize = "10px";
        gg4.style.fontSize = "10px";


    } else {
        block1.style.flexDirection = "row";
        img1.style.marginRight = "100px";
        img1.style.marginBottom = "0px";
        txt1.style.width = "50%";
        txt1.style.textAlign = "left";

        block2.style.flexDirection = "row";
        img2.style.marginLeft = "100px";
        img2.style.marginBottom = "0px";
        txt2.style.width = "50%";
        txt2.style.textAlign = "left";
        dd2.style.justifyContent = "left";
        
        block3.style.flexDirection = "row";
        img3.style.marginRight = "100px";
        img3.style.marginBottom = "0px";
        txt3.style.width = "50%";
        txt3.style.textAlign = "left";
        
        block4.style.flexDirection = "row";
        img4.style.width = "50%";
        txt4.style.marginLeft = "5%";
        txt4.style.width = "50%";
        txt4.style.textAlign = "left";
        txt4.style.paddingTop = "0px";
        dd4.style.justifyContent = "left";
        dd4.style.marginBottom = "0px";
        ap4.style.fontSize = "14px";
        gg4.style.fontSize = "15px";
    }
});

window.addEventListener('resize', function() {
    let screenHeight = window.innerHeight;
    let screenWidth = window.innerWidth;

    let block1 = document.getElementById('block1');
    let img1 = document.getElementById('img1');
    let txt1 = document.getElementById('txt1');

    let block2 = document.getElementById('block2');
    let img2 = document.getElementById('img2');
    let txt2 = document.getElementById('txt2');
    let dd2 = document.getElementById('downloadDiv2')
    
    let block3 = document.getElementById('block3');
    let img3 = document.getElementById('img3');
    let txt3 = document.getElementById('txt3');
    
    let block4 = document.getElementById('block4');
    let img4 = document.getElementById('img4');
    let txt4 = document.getElementById('txt4');
    let dd4 = document.getElementById('downloadDiv4');
    let ap4 = document.getElementById('ap4');
    let gg4 = document.getElementById('gg4');
    

    if (screenWidth <= 800) {
        block1.style.flexDirection = "column";
        img1.style.marginLeft = "0px";
        img1.style.marginRight = "0px";
        img1.style.marginBottom = "50px";
        txt1.style.width = "100%";
        txt1.style.textAlign = "center";

        block2.style.flexDirection = "column-reverse";
        img2.style.marginLeft = "0px";
        img2.style.marginRight = "0px";
        img2.style.marginBottom = "50px";
        txt2.style.width = "100%";
        txt2.style.textAlign = "center";
        dd2.style.justifyContent = "center";
        
        block3.style.flexDirection = "column";
        img3.style.marginLeft = "0px";
        img3.style.marginRight = "0px";
        img3.style.marginBottom = "50px";
        txt3.style.width = "100%";
        txt3.style.textAlign = "center";

        block4.style.flexDirection = "column";
        img4.style.width = "100%";
        txt4.style.margin = "0px";
        txt4.style.width = "80%";
        txt4.style.textAlign = "center";
        txt4.style.paddingTop = "30px";
        dd4.style.justifyContent = "center";
        dd4.style.marginBottom = "20px";
        ap4.style.fontSize = "10px";
        gg4.style.fontSize = "10px";


    } else {
        block1.style.flexDirection = "row";
        img1.style.marginRight = "100px";
        img1.style.marginBottom = "0px";
        txt1.style.width = "50%";
        txt1.style.textAlign = "left";

        block2.style.flexDirection = "row";
        img2.style.marginLeft = "100px";
        img2.style.marginBottom = "0px";
        txt2.style.width = "50%";
        txt2.style.textAlign = "left";
        dd2.style.justifyContent = "left";
        
        block3.style.flexDirection = "row";
        img3.style.marginRight = "100px";
        img3.style.marginBottom = "0px";
        txt3.style.width = "50%";
        txt3.style.textAlign = "left";
        
        block4.style.flexDirection = "row";
        img4.style.width = "50%";
        txt4.style.marginLeft = "5%";
        txt4.style.width = "50%";
        txt4.style.textAlign = "left";
        txt4.style.paddingTop = "0px";
        dd4.style.justifyContent = "left";
        dd4.style.marginBottom = "0px";
        ap4.style.fontSize = "14px";
        gg4.style.fontSize = "15px";
    }
});