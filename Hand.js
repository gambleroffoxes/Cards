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
		var error = "This hand does not have any cards to discard.";
		if (this.size == 0) return error;
		var location = this.search(c);
		var toDiscard = null;
		if (location == -1) return "This hand does not contain the card you wish to discard.";
		toDiscard = this.pile[location - 1];
		while (location < this.size) {
			this.pile[location - 1] = this.pile[location];
			location++;
		}
		this.size--;
		dp.addCard(toDiscard);
	},

	toString: function(){
		return "This hand contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
});
