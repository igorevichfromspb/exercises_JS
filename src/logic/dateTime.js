function getDate(input) {
  if (Object.prototype.toString.call(input) === "[object Date]") {
    return true;
  }
  return false;
}

console.log(getDate(new Date(86400000)));

export default getDate;
