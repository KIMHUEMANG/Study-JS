const canvas = document.getElementById("jsCanvas");
const colors = document.getElementsByClassName("jscolor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");
const ctx = canvas.getContext("2d");
const INITITAL_COLOR ="#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

ctx.strokeStyle = INITITAL_COLOR;
ctx.fillStyle = INITITAL_COLOR;


ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function onMousemove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function StopPainting(){
    painting = false;
}

function stratPainting(){
    painting = true;

}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handleModeClick(){
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    }else{
        filling = true;
        mode.innerText ="Paint";
    }
}
function handleClickCanvas(){
    if(filling){
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    }
}

function handleContextMN(event){
    event.preventDefault();
}

function handleSaveClick(){
    const img = canvas.toDateURL();
    const link = document.createElement("a");
    link.href = img;
    link.download = "SuperCoolIMG";
    link.click();
}

if(canvas){
    canvas.addEventListener("mousemove",onMousemove);
    canvas.addEventListener("mousedown",stratPainting);
    canvas.addEventListener("mouseup",StopPainting);
    canvas.addEventListener("mouseleave",StopPainting);
    canvas.addEventListener("click",handleClickCanvas);
    canvas.addEventListener("contextmenu",handleContextMN);
}

Array.from(colors).forEach(color =>
     color.addEventListener("click",handleColorClick)
     );

if(range){
    range.addEventListener("input",handleRangeChange);
}

if(mode){
    mode.addEventListener("click",handleModeClick);
}

if(save){
    save.addEventListener("click",handleSaveClick);
}
