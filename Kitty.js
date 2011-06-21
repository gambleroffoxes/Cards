function Kitty(size){
	this.size = size;
	this.kitty = new Array(size);
}

Kitty.prototype = new Pile(this.size)

	topCard: function(n){
		//displays the top n cards of the kitty
		if n == 0 return "You have not asked to display any cards from the kitty.";
		var counter = 0;
		var list = "The top " + n + " cards of the kitty are: ";
		while counter < n {
			if counter == 0 {
				list += this.kitty[counter].rank + " of " + this.kitty[counter].suit + "s";
			}
			else list += ", " + this.kitty[counter].rank + " of " + this.kitty[counter].suit + "s";
		}
		return list;
	},

	toString: function(){
		return "This kitty contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
}
