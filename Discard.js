function Discard(size){
	this.size = size;
	this.discard = new Array(size);
}

Discard.prototype = new Pile(this.size)

	toString: function(){
		return "This discard pile contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
}
