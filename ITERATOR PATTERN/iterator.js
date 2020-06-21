function ItemCollection(){
 this.items = [];
 //changing the data strucure from array to hash. (Iterator pattern will be useful now)
 //this.items = {};
}

ItemCollection.prototype.push = function(item){
    this.items.push(item);
    //this.items[item] = item in this.items ? ++this.items[item] : 1;
}
ItemCollection.prototype.createIterator = function(){
    return new ArrayItemIterator(this.items);
    //return new HashItemIterator(this.items);
}

function ArrayItemIterator(items){
    this.items = items;
    this.currentIndex = 0;
}

ArrayItemIterator.prototype.hasNext = function(){
    return this.currentIndex < this.items.length; 
}

ArrayItemIterator.prototype.current = function(){
    return this.items[this.currentIndex];
}

ArrayItemIterator.prototype.next = function(){
    this.currentIndex++;
}

function HashItemIterator(items){
    this.items = items;
    this.itemKeys = Object.keys(this.items);
    this.currentIndex = 0;
}

HashItemIterator.prototype.hasNext = function(){
    return this.currentIndex < this.itemKeys.length; 
}

HashItemIterator.prototype.current = function(){
    return `${this.itemKeys[this.currentIndex]} - ${this.items[this.itemKeys[this.currentIndex]]} items` ;
}

HashItemIterator.prototype.next = function(){
    this.currentIndex++;
}


