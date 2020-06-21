(function(){
document.addEventListener("DOMContentLoaded",_init);

let canvas;
let consoleEl;

function _init(){
    _initVariables();
    _bindEvents();
}

function _print(text){
    consoleEl.innerText = text;
}

function _initVariables(){
    canvas = new Canvas();
    canvas.setToolType(new Selection()); //default selection

    consoleEl = document.getElementById("console");
    window.print = _print;
}

function _bindEvents()
{
    let canvasTool = document.querySelector(".canvas-selection-container");  
    canvasTool.addEventListener("click",_onToolSelection);

    let canvasGround = document.querySelector("#canvas-ground");
    canvasGround.addEventListener("click",()=>canvas.onClick());
    canvasGround.addEventListener("mouseover",()=>canvas.onMouseOver());
    canvasGround.addEventListener("mouseout",()=>canvas.onMouseUp());

}

function toolTypeMap(type)
{
  let map  = 
  {
    selection : ()=> new Selection(),
    eraser : ()=>new Eraser(),
    brush : ()=>new Brush()
  }

    return map[type]();
}

function _onToolSelection(event)
{
    var toolType = event.target.dataset.canvasType;

    if(!toolType){
        return;
    }
    toolType = toolTypeMap(toolType);

    canvas.setToolType(toolType);
}

})();

