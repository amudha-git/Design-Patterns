(function(){
    document.addEventListener("DOMContentLoaded",_init);

    let lhsWindow,chatWindow,consoleElement;

    function _init(){
        _initVariables();
        _renderWindow();
        _bindEvents();
    }

    function _initVariables(){ 
        window.print = print;
        consoleElement = document.querySelector("#console");
        chatWindow = new ChatWindow();
        lhsWindow = new LhsWindow();
    }

    function _renderWindow(){
        chatWindow.render();
        lhsWindow.render();
    }

    function _bindEvents(){
        document.querySelector("[window-container]").addEventListener("click",_onClick);
    }

    function print(text){
        consoleElement.innerHTML += text;
    }

    function _onClick(event){

        var action = event.target.dataset.action;

        if(!action){
            return;
        }

        consoleElement.innerHTML = "";

        if(action == "closeChatWindow"){
            chatWindow.close();
        }

        if(action == "closeLhsWindow"){
            lhsWindow.close();
        }
    }

}())