(function(){

    document.addEventListener("DOMContentLoaded",_init);

    let itemCollection;

    function _init(){
     _initVariables();
      _bindEvents();  
    }

    function _initVariables(){
        itemCollection = new ItemCollection();
    }

    function _bindEvents(){
        let addButton = document.querySelector("#add-item");
        let showItemButton = document.querySelector("#show-added-items");
        addButton.addEventListener("click",_onAddItem);
        showItemButton.addEventListener("click",_showAddedItems);
      
    }

    function _onAddItem(){
        var itemInput = document.getElementById("items");
        itemCollection.push(itemInput.value);
        itemInput.value = "";
    }

    function _showAddedItems(){

        var itemList = document.getElementById("item-list");

        var iterator = itemCollection.createIterator();
        var fragment = document.createDocumentFragment();

        while(iterator.hasNext()){
            fragment.append(iterator.current());
            iterator.next();
        }

        itemList.innerHTML="";
        itemList.append(fragment);
    }



}())