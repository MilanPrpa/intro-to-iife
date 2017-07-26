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

	

	// Library System Case
	// If library is in an environment where there is a library system, then it will run system, else not.

	// If librarySystem is not undefined.
	// typeof checks to see what something is; string, function, number, etc.
	// Now its dynamic, it will pick which one applies.
	if (typeof librarySystem !== 'undefined') {
		librarySystem('sandwichLibrary', function() {
			return sandwichLibrary;
		});
		// If there is no system then it will put the object directly on the window.
	} else {
		window.sandwichLibrary = sandwichLibrary;
	}

}())