


/* How to Uee .noConflict() */


// What to do when you have two things competing for one global variable name

// sanwichLibrary = 'books' vs. sandwichLibrary(library);

// This is overwritten by sandwichLibrary in IIFE.
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
		/*Put code here because conflict arises in the window case*/

		// Create new variable to store original 'string value'. 
		var oldSandwichLibrary = window.sandwichLibrary;

		sandwichLibrary.noConflict = function() {
			// Here we reset the library to the 'string value'. This runs first.
			window.sandwichLibrary = oldSandwichLibrary;
			// This returns sandwich objects.
			return sandwichLibrary;
		}
		// This hasnt been run yet, so, window.sandwichLibrary above is the string.
		window.sandwichLibrary = sandwichLibrary;
	}

}())


// This will reset window.sandwichLibrary to the original value (the 'string')
// It will also return the sandwichLibrary object.
var sandwichJS = sandwichLibrary.noConflict();

console.log(sandwichLibrary);
console.log(sandwichJS);















