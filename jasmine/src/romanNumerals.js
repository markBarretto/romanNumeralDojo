var RomanNumerals = function() {
}


RomanNumerals.prototype.convert = function(input) {
	var result = "";
	var counter = input;
	if (counter>=5)
	{ 		
		result = "V";
	
		counter -=5;
	}
	
	
	
	
	for (var i=1; i<=counter; i++ )
	{
		result = result + "I";
	}
	
	return result;
}


