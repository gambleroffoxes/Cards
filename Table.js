function Table(players){
	this.players = players;
}

//need to expand to more cards/players

Table.prototype = {

	compare: function(hand1, i, hand2, j){
		//helper function to compare two played cards
		if (this.players <= 1) return "There aren't enough players playing this game.";
		if (hand1.pile[i].rank > hand2.pile[j].rank) {
			return 1;
		}
		else if (hand1.pile[i].rank < hand2.pile[j].rank) {
			return 2;
		}
		else return -1;
	},

	take: function(hand1, card1, hand2, card2){
		//compares two played cards and awards the winner with both cards
		var i = card1 - 1;
		var j = card2 - 1;
		var winner = this.compare(hand1, i, hand2, j);
		if (winner == 1) {
			hand2.discard(hand2.pile[j], hand1);
		}
		else if (winner == 2) {
			hand1.discard(hand1.pile[i], hand2);
		}
		else return -1;
	},

	toString: function(){
		return "There are " + this.players + " playing this game.";
	}
}
