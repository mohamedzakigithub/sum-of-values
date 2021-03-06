// Variables declarations and DOM elements selection.
const inputValuesEl = document.querySelector("#input");
const outputEl = document.querySelector("#result");
const buttonEl = document.querySelector("#button");

// Add click listener to button
buttonEl.addEventListener("click", function () {
  const inputString = inputValuesEl.value;
  // get results and assign to output element
  let result = sum(inputString);
  outputEl.innerText = result;
});

// Function declaration
function sum(str) {
  // use a regular expression to remove non digit characters then split input values on commas and store in an array.
  const digitsArray = str.replace(/[^0-9\.\,\-]/g, "").split(",");
  // parse array elements into floats and check if type is a number
  const parsedArray = digitsArray.map((el) =>
    isNaN(parseFloat(el)) === false ? parseFloat(el) : 0
  );
  // return the sum of the array using the reduce method
  return Number(parsedArray.reduce((a, b) => a + b, 0).toFixed(2));
}
