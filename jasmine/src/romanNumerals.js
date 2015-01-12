var RomanNumerals = function() {
	this.values = {	
		1000:'M', 
		500:'D',
		100:'C',
		50:'L', 
		10:'X', 
		5: 'V', 
		1: 'I',
		0: ''
	};
}


RomanNumerals.prototype.convert = function(input) {
	var result = "";
	var counter = input;
	
	var characters = Object.keys(this.values);
	/*
	for (var i = 0; i<characters.length; i++){
		
		var thisNumber = characters[i];
		var nextNumber = characters[i]+1;
		console.log(thisNumber);
		if(counter>=(thisNumber - nextNumber)){ 		
			if(counter == thisNumber - nextNumber){
				result += this.values[nextNumber];
			}
			result += this.values[thisNumber];
			counter -= thisNumber;
			for (var ii=thisNumber; ii<=counter; ii+=thisNumber )
			{
				result = result + this.values[nextNumber];
			}
		} 
		
	}
	*/
	
	
	
	
	if(counter>=(5 - 1) && counter <= 10){ 		
		if(counter == 5 - 1 || counter == 9){
			result += "I";
		}
		if (counter >= 9)
		{
			result += "X";
			counter -=10;
		}
		else
		{
			result += "V";
			counter -=5;
		}
		
	}
	else if (counter>10 && counter<=50) {
		result += "L";
		counter -=50;
	}
	
	
	for (var i=1; i<=counter; i++ )
	{
		result = result + "I";
	}
	
	return result;
}


