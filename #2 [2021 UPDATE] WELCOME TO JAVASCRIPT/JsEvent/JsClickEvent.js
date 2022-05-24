const title = document.querySelector(".hello h1");

function ClickEvent(){
    title.style.color = "blue";
    console.log("click!");
}

function handleMouseClick(){
    title.innerText ="Mouse is here";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowOffline(){
    alert("Oops.. you haven't wifi");
}
function handleWindowOnline(){
    alert("You have a good WiFi");
}

title.addEventListener("click", ClickEvent);
title.addEventListener("mouseenter",handleMouseClick);
title.addEventListener("mouseleave",handleMouseLeave);

//window
window.addEventListener("resize", handleWindowResize);
window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline);
