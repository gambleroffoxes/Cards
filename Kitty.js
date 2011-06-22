function Kitty(size){
	Pile.call(this, size);
}

Kitty.prototype.inherits(Pile);

Kitty.prototype.extend({

	topCard: function(n){
		//displays the top n cards of the kitty
		if (n == 0) return "You have not asked to display any cards from the kitty.";
		var counter = 0;
		var list = "The top " + n + " card(s) of the kitty are: ";
		while (counter < n) {
			if (counter == 0) {
				list += this.pile[0].rank + " of " + this.pile[0].suit + "s";
			}
			else list += ", " + this.pile[counter].rank + " of " + this.pile[counter].suit + "s";
			counter++;
		}
		list += ".";
		return list;
	},

	toString: function(){
		return "This kitty contains " + this.size + " card" + (this.size == 1 ? "." : "s.");
	}
});
