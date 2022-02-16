function round(value, digits) {
  return Number(`${Math.round(`${value}e${digits}`)}e-${digits}`);
}
console.log(round(2.4673, 2));

export default round;
