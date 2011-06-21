function Deck(size){
	this.size = size;
	this.deck = new Array(size);
}

Deck.prototype = new Pile(this.size)

	//should write a deal function that returns a card

	shuffle: function(n){
		//shuffle(n) will swap two cards n times
		var shuffleCounter = 0;
		var swapCard = null;
		while shuffleCounter < n {
			var card1 = rand(0, this.size);
			var card2 = rand(0, this.size);
			if card1 != card2 {
				swapCard = this.deck[card1];
				this.deck[card1] = this.deck[card2];
				this.deck[card2]= swapCard;
				shuffleCounter++;
			}
		}
	}

	toString: function(){
		return "This deck contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
}
