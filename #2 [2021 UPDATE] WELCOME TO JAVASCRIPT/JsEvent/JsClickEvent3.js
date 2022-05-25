const h1 = document.querySelector(".hello h1");

function ClickEvent(){
    let clickedClass = "active";
  /*  if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    } else{
        h1.classList.add(clickedClass);
    } 
    이 코드는 아래의 toggle 코드와 같다
    */
    
    h1.classList.toggle("active");
}

h1.addEventListener("click", ClickEvent);
