function Controller(model) {

	this.addPet = function(name) {
		var p = new Pet(name);
		model.addPet(p);
		return p;
	}

	this.playWithPet = function(name, amount) {
		var p = model.getPetByName(name);
		p.play(amount);
		return p;
	}

	this.feedPet = function(food) {
		var p = model.getPetByName(name);
		p.feed(food);
		return p;
	}

	this.getAllPets = function() {
		return model.getAllPets();
	}

}
