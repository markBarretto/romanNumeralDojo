//http://www.wikihow.com/Learn-Roman-Numerals
//steps are requirements

describe("Roman Numerals", function() {
  var romanNumeral;
  
  beforeEach(function() {
	//setup	instantiation
	romanNumeral = new RomanNumerals();
  });

  it("Number 1 should equal to Character I", function() {
    //return value
    var output = romanNumeral.convert(1);
    
    expect(output).toBe("I");
  });
  
  it("Number 2 should equal to II", function() {
    var output = romanNumeral.convert(2);
    
    expect(output).toBe("II");
  });
  
  it("Number 3 should equal to III", function() {
  	var output = romanNumeral.convert(3);
  	
  	expect(output).toBe("III");
  
  });
  
  it("Number 5 should equal to V", function(){
  	var output = romanNumeral.convert(5);
  	
  	expect(output).toBe('V');
  })
  
  it("Number 8 should equal to VIII", function(){
  	var output = romanNumeral.convert(8);
  	expect(output).toBe('VIII');
  });
  
  it("Number 4 should equal to IV", function(){
  	var output = romanNumeral.convert(4);
  	expect(output).toBe('IV');
  });
  
});
