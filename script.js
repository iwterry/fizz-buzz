// wait until the html document is ready 
$(document).ready( function() {
	// count from 1 to 100
	for (var i=1; i <= 100; i +=1 ) {
		var output = ''; // just for initiation purposes
		
		// check to see if "i" is divisible by three or five
		var isDivisibleByThree = i % 3 == 0;
		var isDivisibleByFive = i % 5 == 0; 
		if (isDivisibleByThree || isDivisibleByFive) {
			// now that we know "i" is divisble by three or five, check which is it divisible by.
			// note: if "i" is divisible by only three, "output" is "Bizz"; 
			// 		 if "i" is divisible by only five, "output" is "Buzz";
			//		 if "i" is divisible by three and five, "output" is "FizzBuzz";
			if (isDivisibleByThree) {
				output += 'Fizz';
			}
			if(isDivisibleByFive) {
				output += 'Buzz';
			}
		}
		else {
			// "i" is not divisible by three or five; so, "output" will print the string representation
			// of "i". 
			output += i; 
		}
		// append "output" to the .container class in the DOM. 
		$('ul.container').append('<li>' + output + '</li>');
	}
}); 