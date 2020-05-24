document.addEventListener("DOMContentLoaded",_onDomContentLoaded);

var editor;
var editorHistory;

function _onDomContentLoaded(){
  _render();
  _bindEvents();

}

function _render(){
    editor = new Editor();
    editorHistory = new EditorHistory();
    editor.render();
}

function _bindEvents(){
    document.querySelector("section").addEventListener("click",_handleClick);
}

function _handleClick(event){

    var purpose = event.target.dataset.purpose;

    if(!purpose){
        return;
    }

    if(purpose == "save-state"){
        _saveState();
        return;
    }

    if(purpose == "undo-state"){
        _undoState();
        return;
    }
}

function _saveState(){
    editorHistory.push(editor.createState());
}

function _undoState(){
    editor.restoreState(editorHistory.pop());
}

