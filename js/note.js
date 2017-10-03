var idCounter = 0;
var Note = function(title, when, description){
				this.title = title;
				this.when = when;
				this.description = description;
				this.id = idCounter;
				idCounter++;
}