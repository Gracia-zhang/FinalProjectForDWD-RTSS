let setting ={
    theme:{background:'#FFE979',banner:'#FFD282'},
    skin:{background:'#F0F5F6',border:'#9EC0C7'},
    cloth:"asserts/clothY.png",
    headwear:{background:'#FFFFFF',border:'#594646'}
};

function setupPage(){
    console.log(setting);
    document.body.style.backgroundColor = setting.theme.background;
    document.getElementById("banner").style.background = setting.theme.banner;

    document.getElementById("neck").style.background =setting.skin.background;
    document.getElementById("neck").style.borderColor =setting.skin.border;
    document.getElementById("leftarm").style.background =setting.skin.background;
    document.getElementById("leftarm").style.borderColor =setting.skin.border;
    document.getElementById("rightarm").style.background =setting.skin.background;
    document.getElementById("rightarm").style.borderColor =setting.skin.border;
    document.getElementById("face").style.background =setting.skin.background;
    document.getElementById("face").style.borderColor =setting.skin.border;

    document.getElementById("TVcloth").src = setting.cloth;

    document.getElementById("TVhead").style.background =setting.headwear.background;
    document.getElementById("TVhead").style.borderColor =setting.headwear.border;
}

function hello(){
    console.log("hello");
}

function changeY(){
    //alert("changed");
    document.body.style.backgroundColor = '#FFE979';
    document.getElementById("banner").style.background = '#FFD282';
    document.getElementById("next").style.borderColor = '#FFD282';

    setting.theme.background = '#FFE979';
    setting.theme.banner = '#FFD282';
}
function changeB(){
    //alert("changed");
    document.body.style.backgroundColor = '#CAF8FF';
    document.getElementById("banner").style.background = '#94ECF8';
    document.getElementById("next").style.borderColor = '#94ECF8';

    setting.theme.background = '#CAF8FF';
    setting.theme.banner = '#94ECF8';
}
function changeP(){
    //alert("changed");
    document.body.style.backgroundColor = '#FFCCE8';
    document.getElementById("banner").style.background = '#CC94F8';
    document.getElementById("next").style.borderColor = '#CC94F8';

    setting.theme.background = '#FFCCE8';
    setting.theme.banner = '#CC94F8';
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

    setting.skin.background = '#F0F5F6';
    setting.skin.border = '#9EC0C7';
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

    setting.skin.background = '#747474';
    setting.skin.border = '#131313';
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

    setting.skin.background = '#FFDBE3';
    setting.skin.border = '#BDB7FD';
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

    setting.skin.background = '#CBE3C2';
    setting.skin.border = '#87A89C';
}

function changeCloth1(){
   document.getElementById("TVcloth").src = "asserts/clothY.png";

   setting.cloth="asserts/clothY.png";
}

function changeCloth2(){
    document.getElementById("TVcloth").src = "asserts/clothB.png";

    setting.cloth="asserts/clothB.png";
 }

 function changeHead1(){
    document.getElementById("TVhead").style.background ='#FFFFFF';
    document.getElementById("TVhead").style.borderColor ='#594646';

    setting.headwear.background = '#FFFFFF';
    setting.headwear.border = '#594646';
 }

 function changeHead2(){
    document.getElementById("TVhead").style.background ='#C8DDFF';
    document.getElementById("TVhead").style.borderColor ='#5B6473';

    setting.headwear.background = '#C8DDFF';
    setting.headwear.border = '#5B6473';
 }

 function changeHead3(){
    document.getElementById("TVhead").style.background ='#FFCCE8';
    document.getElementById("TVhead").style.borderColor ='#863D63';

    setting.headwear.background = '#FFCCE8';
    setting.headwear.border = '#863D63';
 }

 function changeHead4(){
    document.getElementById("TVhead").style.background ='#E1FFCA';
    document.getElementById("TVhead").style.borderColor ='#74925C';

    setting.headwear.background = '#E1FFCA';
    setting.headwear.border = '#74925C';
 }