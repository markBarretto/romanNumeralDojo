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

RomanNumerals.prototype.getPlaceValue = function(input){
	var counter = input;
	var placeValue = {'I': 0, 'X':0, 'C':0, 'M': 0};
	
	while(counter > 0){
		if(counter >= 1000){
			counter = counter - 1000;
			placeValue['M']++;
		} else if(counter >= 100){
			counter = counter - 100;
			placeValue['C']++;	
		} else if(counter >= 10){
			counter = counter - 10;
			placeValue['X']++;	
		} else if(counter >= 1){
			counter = counter - 1;
			placeValue['I']++;	
		}
	}
	
	return placeValue;
}

RomanNumerals.prototype.convert = function(input) {
	var result = "";
		
	var placeValue = this.getPlaceValue(input);
	
	var characters = Object.keys(this.values);	
	
	var romanNumeralChar = "I";
	
		
	for(place in placeValue){
		var partialResult = '';
		var counter = placeValue[place];
		var romanNumeralChar = place;
		var halfChar = 'V';
		var fullChar = 'X';
		
		var i = 0;
		
		if (counter>=(5-1) && counter <= 10 - 1){ 		

			if(counter == 5-1 || counter == 10-1){
				result += romanNumeralChar;
			}
			if (counter == 10-1)
			{
				result += fullChar;
				counter -= 10;
			}
			else
			{
				result += halfChar;
				counter -=5;
			}
		
		}
	
		for (var i=1*this.referenceCharacter(romanNumeralChar); i<=counter; i++*this.referenceCharacter(romanNumeralChar)){
			partialResult = partialResult + romanNumeralChar;
		}
		
		result += partialResult;
	}
	
	return result;
}


