function Card(rank, suit){
	this.rank = rank;
	this.suit = suit;
}

Card.prototype = {
	toString: function(){
		return this.rank + " of " + this.suit + "s";
	}
}
