const h1 = document.querySelector(".hello h1");

function ClickEvent(){
    // const currentColor = h1.style.color;
    // let newColor;
    // if(currentColor === "blue"){
    //     newColor = "tomato";
    // } else {
    //     newColor = "blue";
    // }
    // h1.style.color = newColor;

    let clickedClass = "active";
    const currentClass = h1.className;
    if(currentClass === clickedClass){
        h1.className = "";
    } else{
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", ClickEvent);
