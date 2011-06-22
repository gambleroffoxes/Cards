function Hand(size){
	Pile.call(this, size);
}

Hand.prototype.inherits(Pile);

Hand.prototype.extend({

	draw: function(d){
		//draw the top card of deck d and place it at the back of the hand
		this.pile[this.size] = d.deal();
		this.size++;
	},

	discard: function(c, dp){
		//FIXME
		//remove card c from the hand and place it in discard pile dp
		this.search(c);
	},

	toString: function(){
		return "This hand contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
});
