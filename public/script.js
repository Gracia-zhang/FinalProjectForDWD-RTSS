function saveData(){
    
    localStorage.setItem("tBackground",document.body.style.backgroundColor);
    localStorage.setItem("tBanner",document.getElementById("banner").style.background);

    localStorage.setItem("sBackground",setting.skin.background);
    localStorage.setItem("sBanner",setting.skin.border);

    localStorage.setItem("c",setting.cloth);

    localStorage.setItem("hBackground",setting.headwear.background);
    localStorage.setItem("hBanner",setting.headwear.border);
    
}

function changeY(){
    //alert("changed");
    document.body.style.backgroundColor = '#FFE979';
    document.getElementById("banner").style.background = '#FFD282';
    document.getElementById("next").style.borderColor = '#FFD282';

    localStorage.setItem("tBackground",'#FFE979');
    localStorage.setItem("tBanner",'#FFD282');
}
function changeB(){
    //alert("changed");
    document.body.style.backgroundColor = '#CAF8FF';
    document.getElementById("banner").style.background = '#94ECF8';
    document.getElementById("next").style.borderColor = '#94ECF8';
    localStorage.setItem("tBackground",'#CAF8FF');
    localStorage.setItem("tBanner",'#94ECF8');
}
function changeP(){
    //alert("changed");
    document.body.style.backgroundColor = '#FFCCE8';
    document.getElementById("banner").style.background = '#CC94F8';
    document.getElementById("next").style.borderColor = '#CC94F8';
    localStorage.setItem("tBackground",'#FFCCE8');
    localStorage.setItem("tBanner",'#CC94F8');
}

function changeSkin1(){
    document.getElementById("neck").style.background ='#F0F5F6';
    document.getElementById("neck").style.borderColor ='#9EC0C7';
    document.getElementById("leftarm").style.background ='#F0F5F6';
    document.getElementById("leftarm").style.borderColor ='#9EC0C7';
    document.getElementById("rightarm").style.background ='#F0F5F6';
    document.getElementById("rightarm").style.borderColor ='#9EC0C7';
    document.getElementById("face").style.background ='#F0F5F6';
    document.getElementById("face").style.borderColor ='#9EC0C7';

    localStorage.setItem("sBackground",'#F0F5F6');
    localStorage.setItem("sBanner",'#9EC0C7');
}

function changeSkin2(){
    document.getElementById("neck").style.background ='#747474';
    document.getElementById("neck").style.borderColor ='#131313';
    document.getElementById("leftarm").style.background ='#747474';
    document.getElementById("leftarm").style.borderColor ='#131313';
    document.getElementById("rightarm").style.background ='#747474';
    document.getElementById("rightarm").style.borderColor ='#131313';
    document.getElementById("face").style.background ='#747474';
    document.getElementById("face").style.borderColor ='#131313';

    localStorage.setItem("sBackground",'#747474');
    localStorage.setItem("sBanner",'#131313');
}

function changeSkin3(){
    document.getElementById("neck").style.background ='#FFDBE3';
    document.getElementById("neck").style.borderColor ='#BDB7FD';
    document.getElementById("leftarm").style.background ='#FFDBE3';
    document.getElementById("leftarm").style.borderColor ='#BDB7FD';
    document.getElementById("rightarm").style.background ='#FFDBE3';
    document.getElementById("rightarm").style.borderColor ='#BDB7FD';
    document.getElementById("face").style.background ='#FFDBE3';
    document.getElementById("face").style.borderColor ='#BDB7FD';

    localStorage.setItem("sBackground",'#FFDBE3');
    localStorage.setItem("sBanner",'#BDB7FD');
}

function changeSkin4(){
    document.getElementById("neck").style.background ='#CBE3C2';
    document.getElementById("neck").style.borderColor ='#87A89C';
    document.getElementById("leftarm").style.background ='#CBE3C2';
    document.getElementById("leftarm").style.borderColor ='#87A89C';
    document.getElementById("rightarm").style.background ='#CBE3C2';
    document.getElementById("rightarm").style.borderColor ='#87A89C';
    document.getElementById("face").style.background ='#CBE3C2';
    document.getElementById("face").style.borderColor ='#87A89C';

    localStorage.setItem("sBackground",'#CBE3C2');
    localStorage.setItem("sBanner",'#87A89C');
}

function changeCloth1(){
   document.getElementById("TVcloth").src = "assets/clothY.png";

   localStorage.setItem("c","assets/clothY.png");
}

function changeCloth2(){
    document.getElementById("TVcloth").src = "assets/clothB.png";

    localStorage.setItem("c","assets/clothB.png");
 }

 function changeHead1(){
    document.getElementById("TVhead").style.background ='#FFFFFF';
    document.getElementById("TVhead").style.borderColor ='#594646';

    localStorage.setItem("hBackground",'#FFFFFF');
    localStorage.setItem("hBanner",'#594646');
 }

 function changeHead2(){
    document.getElementById("TVhead").style.background ='#C8DDFF';
    document.getElementById("TVhead").style.borderColor ='#5B6473';

    localStorage.setItem("hBackground",'#C8DDFF');
    localStorage.setItem("hBanner",'#5B6473');
 }

 function changeHead3(){
    document.getElementById("TVhead").style.background ='#FFCCE8';
    document.getElementById("TVhead").style.borderColor ='#863D63';

    localStorage.setItem("hBackground",'#FFCCE8');
    localStorage.setItem("hBanner",'#863D63');
 }

 function changeHead4(){
    document.getElementById("TVhead").style.background ='#E1FFCA';
    document.getElementById("TVhead").style.borderColor ='#74925C';

    localStorage.setItem("hBackground",'#E1FFCA');
    localStorage.setItem("hBanner",'#74925C');
 }