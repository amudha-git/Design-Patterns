function Window(){

}
Window.prototype.afterClose = function(){
    print("After close called from window parent");
}

Window.prototype.beforeClose = function(){
    print("Beforer close called from window parent");
}
Window.prototype.close = function(){
    this.beforeClose();
    print("closed");
    this.afterClose();

}

function ChatWindow() {

}

ChatWindow.prototype = Object.create(Window.prototype);
ChatWindow.prototype.constructor = ChatWindow;

ChatWindow.prototype.render = function()
{
   document.getElementById("chat-window").innerHTML = ` 
   <button class="btn" data-action="closeChatWindow">x</button>
   <div>Chat window</div>
   `;
}

ChatWindow.prototype.afterClose = function()
{
    print("After close called from Chatwindow");
}
ChatWindow.prototype.beforeClose = function()
{
    print("Before close called from Chatwindow");
}

function LhsWindow() {

}

LhsWindow.prototype = Object.create(Window.prototype);
LhsWindow.constructor = LhsWindow;

LhsWindow.prototype.render = function()
{
    document.getElementById("lhs-window").innerHTML = 
    `<button class="btn" data-action="closeLhsWindow">x</button>
    <div>Lhs window</div>`;
}


LhsWindow.prototype.afterClose = function()
{
    print("After close called from LhsWindow");
}
LhsWindow.prototype.beforeClose = function()
{
    print("Before close called from LhsWindow");
}