//http://www.wikihow.com/Learn-Roman-Numerals
//steps are requirements

describe("Roman Numerals", function() {
  var romanNumeral;
  
  beforeEach(function() {
	//setup	instantiation
	romanNumeral = new RomanNumerals();
  });

  it("Character I should equal to 1", function() {
    //return value
    expect(romanNumeral.convert(1)).toBe('I');
  });

});
