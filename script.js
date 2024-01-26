function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
  let result = '';

  // Iterate through the keys of the obj object
  for (let key in obj) {
    // Get the Roman numeral and its corresponding value
    const [romanNumeral, value] = obj[key];

    // Calculate the number of times the current value fits into num
    const count = Math.floor(num / value);

    // Append the Roman numeral to the result string count times
    result += romanNumeral.repeat(count);

    // Update num to remove the counted value
    num %= value;
  }

  return result;

  //your code here

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));





// do not edit below this line
module.exports = convertToRoman
