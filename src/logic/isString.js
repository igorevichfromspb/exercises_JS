function isString(input) {
  if (typeof input === "string") {
    return true;
  }
  return false;
}

console.log(isString("hey"));

export default isString;
