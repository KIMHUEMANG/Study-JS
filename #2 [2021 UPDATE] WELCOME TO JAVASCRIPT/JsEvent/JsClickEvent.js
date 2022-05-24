
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

title.addEventListener("click", ClickEvent);
title.addEventListener("mouseenter",handleMouseClick);
title.addEventListener("mouseleave",handleMouseLeave);
