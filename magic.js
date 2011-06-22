Object.prototype.extend = function(list){
    for(var key in list)
	this[key] = list[key];
}

Object.prototype.inherits = function(x){
    this.extend(x.prototype);
}