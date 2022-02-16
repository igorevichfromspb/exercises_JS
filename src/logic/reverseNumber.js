function reverseNumber(number) {
  number += "";
  return number.split("").reverse().join("");
}

console.log(reverseNumber(223));

export default reverseNumber;
