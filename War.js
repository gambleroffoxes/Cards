function War(players){
	Table.call(this, players);
}

War.prototype.inherits(Table);

War.prototype.extend({

	war: function(hand1, card1, hand2, card2){
		var isWar = this.take(hand1, card1, hand2, card2);
		if (isWar == -1) {
			this.battle();
		}
	},

	battle: function(hand1, card1, hand2, card2){
		var warAgain = this.take(hand1, card1, hand2, card2);
		if (warAgain == -1) {
			this.battle();
		}
	},

	toString: function(){
		return "This is a game of war with " + this.players + " players.";
	}
});
