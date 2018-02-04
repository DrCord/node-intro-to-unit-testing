// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe('fizz-buzz', function(){
  // test normal cases
  it('should return "fizz-buzz" if the number is evenly divisible by 15', function(){
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 15, expected: "fizz-buzz"},
      {a: 30, expected: "fizz-buzz"},
      {a: -15, expected: "fizz-buzz"}
    ];
    // for each set of input parameter(s) function should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return "buzz" if the number is evenly divisible by 5 but not by 15', function(){
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 10, expected: "buzz"},
      {a: 100, expected: "buzz"},
      {a: -20, expected: "buzz"}
    ];
    // for each set of input parameter(s) function tested should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return "fizz" if the number is evenly divisible by 3 but not by 5', function(){
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 6, expected: "fizz"},
      {a: 12, expected: "fizz"},
      {a: -27, expected: "fizz"}
    ];
    // for each set of input parameter(s) function tested should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  it('should return the input number if the number is not divisible by 3 or 5', function(){
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 11, expected: 11},
      // {a: 0, expected: 0},
      {a: -17, expected: -17}
    ];
    // for each set of input parameter(s) function tested should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

  // test edge cases
  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });
});
