function Pile(size){
	this.size = size;
}

Pile.prototype = {
	toString: function(){
		return "This pile contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
}
