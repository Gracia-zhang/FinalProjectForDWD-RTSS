
    
    document.body.style.backgroundColor = localStorage.getItem("tBackground");
    document.getElementById("banner").style.background = localStorage.getItem("tBanner");

    document.getElementById("neck").style.background =localStorage.getItem("sBackground");
    document.getElementById("neck").style.borderColor =localStorage.getItem("sBanner");
    document.getElementById("leftarm").style.background =localStorage.getItem("sBackground");
    document.getElementById("leftarm").style.borderColor =localStorage.getItem("sBanner");
    document.getElementById("rightarm").style.background =localStorage.getItem("sBackground");
    document.getElementById("rightarm").style.borderColor =localStorage.getItem("sBanner");
    document.getElementById("face").style.background =localStorage.getItem("sBackground");
    document.getElementById("face").style.borderColor =localStorage.getItem("sBanner");

    document.getElementById("TVcloth").src = localStorage.getItem("c");

    document.getElementById("TVhead").style.background =localStorage.getItem("hBackground");
    document.getElementById("TVhead").style.borderColor =localStorage.getItem("hBanner");