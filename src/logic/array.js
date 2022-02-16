function isArray(input) {
  if (Array.isArray(input)) return true;
  return false;
}
console.log(isArray("hey"));

export default isArray;
