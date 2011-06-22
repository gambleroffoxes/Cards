function War(players){
	Table.call(this, players);
}

War.prototype.inherits(Table);

War.prototype.extend({

	toString: function(){
		return "This is a game of war with " + this.players + " players.";
	}
});
