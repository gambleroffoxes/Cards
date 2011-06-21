function Pile(size){
	this.size = size;
}

//instantiate as an array

Pile.prototype = {

	addCard: function(c){
		//add card c to the counter's position + 1 and add 1 to the counter
		this[this.size + 1] = c
		this.size++
	}

	toString: function(){
		return "This pile contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
}
