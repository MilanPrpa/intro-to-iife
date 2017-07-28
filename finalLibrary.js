


window.sandwichLibrary = 'books';


(function() {

	var breads = {
		white: 'white',
		wheat: 'wheat'
	};

	var toppings = {
		veggie: 'veggie',
		works: 'works'
	};

	var sandwichLibrary = {
		breads: breads,
		toppings: toppings
	};

	
	if (typeof librarySystem !== 'undefined') {
		librarySystem('sandwichLibrary', function() {
			return sandwichLibrary;
		});
		
	} else {
		var oldSandwichLibrary = window.sandwichLibrary

		sandwichLibrary.noConflict = function() {
			window.sandwichLibrary = oldSandwichLibrary;
			return sandwichLibrary;
		}

		window.sandwichLibrary = sandwichLibrary;
	}

}())

var sandwichJS = sandwichLibrary.noConflict();



// We want this to console 'string'.
console.log(sandwichLibrary);

console.log(sandwichJS.breads);



