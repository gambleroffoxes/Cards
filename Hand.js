function Hand(size){
	this.size = size;
	this.hand = new Array(size)
}

Hand.prototype = {

	addCard: function(c){
		//add card c to the hand
		this.hand[this.size] = c;
		this.size++;
	}

	draw: function(d){
		//should write a deal function in deck that returns a card
		//draw the top card of deck d and place it at the back of the hand
		this.hand[this.size] = d.deck[d.size - 1];
		this.size++;
		d.deck.size--;
	}

	discard: function(c, dp){
		//remove card c from the hand and place it in discard pile dp
		this.search(c);
	}

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
		return "This hand contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
}
