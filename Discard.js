function Discard(size){
	Pile.call(this, size);
}

Discard.prototype.inherits(Pile);

Discard.prototype.extend({

	toString: function(){
		return "This discard pile contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
});
