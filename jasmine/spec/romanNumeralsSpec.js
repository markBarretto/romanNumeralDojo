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
  
  it("Number 9 should equal to IX", function(){
  	var output = romanNumeral.convert(9);
  	expect(output).toBe('IX');
  });
  
  it("Number 10 should equal to X", function(){
  	var output = romanNumeral.convert(10);
  	expect(output).toBe('X');
  });
  
  it("Number 50 should equal to L", function(){
  	var output = romanNumeral.convert(50);
  	expect(output).toBe('L');
  });
  
  it("Number 100 should equal to C", function(){
  	var output = romanNumeral.convert(100);
  	expect(output).toBe('C');
  });
  
  
  it("Number 500 should equal to D", function(){
  	var output = romanNumeral.convert(500);
  	expect(output).toBe('D');
  });
  
  it("Number 1000 should equal to M", function(){
  	var output = romanNumeral.convert(1000);
  	expect(output).toBe('M');
  });
});
