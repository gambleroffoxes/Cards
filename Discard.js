function Discard(size){
	this.size = size;
	this.discard = new Array(size);
}

Discard.prototype = new Pile(this.size)

	list: function(){
		//list all cards in the discard pile in order from top to bottom
		var listCounter = 0;
		var cardList = "This discard pile contains 0 cards.";
		while listCounter < this.size {
			if listCounter = 0
				cardList = this.discard[0];
			else cardList += ", " + this.discard[listCounter];
			listCounter++;
		}
		return cardList;
	}

	search: function(target){
		//search the discard pile for a particular card
		var searcher = 0;
		var currentCard = this.discard[searcher];
		var msg = "This discard pile contains 0 cards.";
		if this.size == 0 {
			return msg;
			break;
		}
		while searcher < this.size {
			if target == currentCard {
				return "The " + target.rank + " of " + target.suit + " is the number " + (searcher + 1) + " card in the discard pile.";
				break;
			}
			searcher++;
		}
		return "The card you are searching for cannot be found."
	}

	toString: function(){
		return "This deck contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
}
