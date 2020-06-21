function Canvas(){
    this.toolType;
}

Canvas.prototype.setToolType = function(toolType){
    this.toolType = toolType;
}
Canvas.prototype.onClick = function(){
    this.toolType.onClick();
}
Canvas.prototype.onMouseOver = function(){
    this.toolType.onMouseOver();
}
Canvas.prototype.onMouseUp = function(){
    this.toolType.onMouseUp();
}


function Selection(){

}

Selection.prototype.onClick = function(){
    print("Selection tool clicked");
}
Selection.prototype.onMouseOver = function(){
    print("Selection tool mouser over");
}
Selection.prototype.onMouseUp = function(){
    print("Selection tool mouser up");
}


function Brush(){

}

Brush.prototype.onClick = function(){
    print("Brush tool clicked");
}
Brush.prototype.onMouseOver = function(){
    print("Brush tool mouse over");
}
Brush.prototype.onMouseUp = function(){
    print("Brush tool mouseup");
}

function Eraser(){

}

Eraser.prototype.onClick = function(){
    print("Eraser tool clicked");
}
Eraser.prototype.onMouseOver = function(){
    print("Eraser tool mouse over");
}
Eraser.prototype.onMouseUp = function(){
    print("Eraser tool mouseup");
}

