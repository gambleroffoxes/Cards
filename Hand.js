function Hand(size){
	Pile.call(this, size);
}

Hand.prototype.inherits(Pile);

Hand.prototype.extend({

	draw: function(d){
		//FIXME
		//should write a deal function in deck that returns a card
		//draw the top card of deck d and place it at the back of the hand
		this.hand[this.size] = d.deck[d.size - 1];
		this.size++;
		d.deck.size--;
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
