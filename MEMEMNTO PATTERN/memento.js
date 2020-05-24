//Memento Pattern Implementation

//ORIGINATOR
function Editor(){
    this.name = "";
    this.department = "";
}

Editor.prototype = 
{   
    render : function(){

        var template = 
        `<div>Name : <input id="name" type="text" value='${this.name}'></div>
        <div>Department : <input id="department" type="text" value='${this.department}'></div>
        <div>
        <button data-purpose="save-state">Save State</button>
        <button data-purpose="undo-state">Undo</button>
        </div>`;

        document.querySelector('section').innerHTML = template;
    },
    
    createState : function(){
        var state = {
            name : document.getElementById("name").value,
            department : document.getElementById("department").value    
        };
        return new EditorState(state);
    },
    restoreState : function(state){
        this.name = state.name;
        this.department = state.department;
        this.render();
    }

}

//MEMENTO
function EditorState(state){
    this.name = state.name;
    this.department = state.department;
}

//CARE TACKER
function EditorHistory(){
    this.list = [];
}
EditorHistory.prototype = {
    push : function(documentState){
        this.list.push(documentState);
    },
    pop : function(){
        if(!this.list.length){
            throw new Error("Editor state is empty");
        }
       var lastState =  this.list.pop(); 
       return lastState;
    }
}



