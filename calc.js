// Define Calc Class
class Calc {
  FindSomthing(value1, value2) {
    let crap = value1 * value1;
    return Math.pow(value1, crap);
  }
}

// Create the Calc Class
let calc = new Calc();

// Test the fuctions
console.log(calc.FindSomthing(-3, 5));

// Ignore this
export default Calc;
