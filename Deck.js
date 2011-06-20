function Deck(size){
	this.size = size;
}

//need to set this up as an array

Deck.prototype = new Pile(this.size)

	//shuffle(n) function will swap two cards n times

	toString: function(){
		return "This deck contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
}
