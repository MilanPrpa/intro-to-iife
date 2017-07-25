

/* CLOSURES */

// Functions can always rememeber the variables they see at creation.


(function() {
	var name = 'Devon';

	function sayName1() {
		// closure is here. name variable is in the IIFE.
		console.log(name);
	}

	window.sayName1 = sayName1;

}());

(function() {
	var name = 'Milan';

	function sayName2() {
		console.log(name);
	}

	window.sayName2 = sayName2;

}());


