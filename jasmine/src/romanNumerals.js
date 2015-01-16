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

RomanNumerals.prototype.referenceCharacter = function(input){
	var t = this.values;
	for(value in t){
		if(t[value] == input){
			return Number(value);
		}
	}
	
}

RomanNumerals.prototype.convert = function(input) {
	var result = "";
	var counter = input;
	
	var characters = Object.keys(this.values);	
	
	var romanNumeralChar = "I";
	
	var i = 0;

	for(character in characters){
		i++;
		if(i%2){ // odd
			
		} else { // even
			
		}
	}
		
	if (counter>=10 && counter<=30) {
		romanNumeralChar = "X";
		//decimalNumber = 10;
		this.referenceCharacter(romanNumeralChar);
		result += "X";
		counter -= 10;
	} else if (counter>=(5-1) && counter <= 10 - 1){ 		
		romanNumeralChar = 'I';
		if(counter == 5-1 || counter == 10-1){
			result += "I";
		}
		if (counter == 10-1)
		{
			result += "X";
			counter -= 10;
		}
		else
		{
			result += "V";
			counter -=5;
		}
		
	}
	
	/*else if (counter>=10 && counter<=30) {
		romanNumeralChar = "X";
		//decimalNumber = 10;
		this.referenceCharacter(romanNumeralChar);
		result += "X";
		counter -= 10;
	}
	
	*/
	else if (counter>10 && counter<=50) {
		romanNumeralChar = "L";
		result += "L";
		counter -=50;
	}
	
	else if (counter>50 && counter<=100) {
		romanNumeralChar = "C";
		result += "C";
		counter -=100;
	}
	
	else if (counter>100 && counter<=500) {
		romanNumeralChar = "D";
		result += "D";
		counter -=500;
	}
	
	else if (counter>500 && counter<=1000) {
		romanNumeralChar = "M";
		result += "M";
		counter -=1000;
	}
	
	
	
	for (var i=1*this.referenceCharacter(romanNumeralChar); i<=counter; i++*this.referenceCharacter(romanNumeralChar)){
		result = result + romanNumeralChar;
	}

	return result;
}


