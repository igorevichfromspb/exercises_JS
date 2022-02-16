function largerNum(a, b) {
  if (a > b) {
    return a;
  }
  if (a < b) {
    return b;
  } else {
    return "Они равны";
  }
}

console.log(largerNum(6, 7));

export default largerNum;
