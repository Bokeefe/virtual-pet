$(document).ready(function(){

	var m = new Model();
	var c = new Controller(m);
	var v = new View(c);

	setInterval(v.showAllPets(), 50);

	$('#newpet').click(function(){
		v.createPet();
	});
});

