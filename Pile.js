function Pile(size){
	this.size = size;
	this.pile = new Array(size)
}

Pile.prototype = {

	addCard: function(c){
		//add card c to the pile
		this.pile[this.size + 1] = c;
		this.size++;
	},

	list: function(){
		//list all cards in the pile in order from top to bottom
		var listCounter = 0;
		var cardList = "This pile contains 0 cards.";
		while (listCounter < this.size) {
			if (listCounter = 0)
				cardList = this.pile[0];
			else cardList += ", " + this.pile[listCounter];
			listCounter++;
		}
		return cardList;
	},

	search: function(target){
		//search the pile for a particular card
		var searcher = 0;
		var currentCard = this.pile[searcher];
		var msg = "This pile contains 0 cards.";
		if (this.size == 0) return msg;
		while (searcher < this.size) {
			if (target == currentCard) {
				return "The " + target.rank + " of " + target.suit + " is the number " + (searcher + 1) + " card in the pile.";
				break;
			}
			searcher++;
		}
		return "The card you are searching for cannot be found.";
	},


	toString: function(){
		return "This pile contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
}
