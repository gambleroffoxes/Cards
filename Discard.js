function Discard(size){
	this.size = size;
	this.discard = new Array(size);
}

Discard.prototype.inherits(Pile);

Discard.prototype.extend({

	toString: function(){
		return "This discard pile contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
});
