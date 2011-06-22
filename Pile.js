function Pile(size){
	this.size = size;
	this.pile = new Array(size);
}

Pile.prototype = {

	addCard: function(c){
		//add card c to the pile
		this.pile[this.size] = c;
		this.size++;
	},

	list: function(){
		//FIXME		
		//look up string commands to make this easier: put ", " in front of everything then remove the first two characters
		//list all cards in the pile in order from top to bottom
		var listCounter = 0;
		var cardList = "This pile contains 0 cards.";
		while (listCounter < this.size) {
			if (listCounter == 0) {
				cardList = this.pile[0].rank + " of " + this.pile[0].suit + "s";
			}
			else {
				cardList += ", " + this.pile[listCounter].rank + " of " + this.pile[listCounter].suit + "s";
			}
			listCounter++;
		}
		return cardList;
	},

	search: function(target){
		//search the pile for a particular card
		var searcher = 0;
		var currentCard = null;
		var msg = "This pile contains 0 cards.";
		if (this.size == 0) return msg;
		while (searcher < this.size) {
			currentCard = this.pile[searcher];
			if (target == currentCard) {
				return "The " + target.rank + " of " + target.suit + "s is the number " + (searcher + 1) + " card in the pile.";
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
