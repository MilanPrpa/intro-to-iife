


// First/Last line of accounting.js




/* LIBRARY DEMO */
// Demo usage: sandwichLibrary will expose breads and toppings object.

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


	// The window object exposes whatever you attach to it. Now sandwichLibrary is available to global object.
	// window.sandwichLibrary(this is a property name, can be antyhing) is creating a new object and setting 
	// it equal to the sandwichLibrary object, now exposing it to global object.
	window.sandwichLibrary = sandwichLibrary;

	/*This option is same as above code. This option sets function argument to root and this is invoked. Root is
	window object. Simply set root(or window) to sandwichLibrary and viola!*/
		//root.sandwichLibrary = sandwichLibrary;



}());



/* LIBRARY SYSTEM APPROACH*/
/* CREATE ONE GLOBAL VARIABLE. THIS WAY WE DONT HAVE HUNDREDS OF LIBRARIES, JUST ONE.
	THIS IS USED IN NODE.JS, FOR EXAMPLE. A FUNCTION WILL GO GET THE LIBRARY FOR YOU.*/

// 1. Create function, first argument is name of library and second argument is function that returns library.

(function() {

	var libraryStorage = {};

	function librarySystem(libraryName, callback) {

		if (arguments.length > 1) {
			// The callback below represents the return value of the function we pass in. So,
			// return sandwich(libraryName) will be invoked by callback below and then stored
			libraryStorage[libraryName] = callback();
		} else {
			return libraryStorage[libraryName];
		}
	}
	// THIS IS THE GLOBAL VARIABLE, NO MATTER HOW MANY LIBRARIES YOU HAVE
	window.librarySystem = librarySystem;

}())


















	

