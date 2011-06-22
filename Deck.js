function Deck(size){
	Pile.call(this, size);
}

Deck.prototype.inherits(Pile);

Deck.prototype.extend({

	//should write a deal function that returns a card

	shuffle: function(n){
		//shuffle(n) will swap two cards n times
		var shuffleCounter = 0;
		var swapCard = null;
		while (shuffleCounter < n) {
			var card1 = Math.floor(this.size*Math.random());
			var card2 = Math.floor(this.size*Math.random());
			if (card1 != card2) {
				swapCard = this.pile[card1];
				this.pile[card1] = this.pile[card2];
				this.pile[card2]= swapCard;
				shuffleCounter++;
			}
		}
	},

	toString: function(){
		return "This deck contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
});
