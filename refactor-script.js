var validChecker = function(aInput) {
    // Checks whether aInput is a postive integer; returns true if it is; otherwise, returns false.
	
	return  (aInput > 0) && (parseInt(aInput) === aInput); 
}

var fizzBuzz = function(aPosInt) {
	// Assumes: 
	// 	- aPosInt is a positive integer number
	// Returns:
	// 	- "Fizz" if aPosInt is divisble by 3 and not 5, 
	//  - "Buzz" if aPosInt is divisible by 5 and not 3, 
	//	- "FizzBuzz" if a aPosInt is divisble by 5 and 3,
	//  - aPosInt if any of the above conditions did not occur.
	
	var output = '';
	if (aPosInt % 3 === 0) { 
		output += 'Fizz'; 
	}
	if (aPosInt % 5 === 0) {
		output += 'Buzz'; 
	}
	return output || aPosInt; 
}

var appendToContainerId = function(aInput) {
	// appends aInput to #container id
	
	var aItem = document.createElement('li'), 
		someText = document.createTextNode(aInput); 
	aItem.appendChild(someText); 
	document.getElementById('container').appendChild(aItem); 
}

$(document).ready(function() {
	// ask user to input a positive integer and then attempt to convert the response into a number
	var upperLimit = +prompt('Please enter a positive integer: '); 
	
	// check to see whether user entered a valid response
	if (validChecker(upperLimit)) {
		var output;
		// run fizzBuzz on numbers from 1 to output
		for(var i = 1; i <= upperLimit; i += 1) {
			// run fizzBuzz on i
			output = fizzBuzz(i); 
			// append output to #container id
			appendToContainerId(output);
		}
	}
	else {
		alert("Sorry, the input entered was invalid. Please refresh the page and try again. Thanks.")
	}
});

