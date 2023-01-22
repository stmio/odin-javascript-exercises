const palindromes = function (string) {
  const letters = string.toLowerCase().replace(/[^a-z]/g, "");
  return letters.split("").reverse().join("") === letters;
};

// Do not edit below this line
module.exports = palindromes;
