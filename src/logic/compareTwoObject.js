function compareTwoObject(obj, twoObj) {
  Object.keys(twoObj).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === twoObj[key]
  );
  console.log(
    compareTwoObject(
      { age: 24, name: "Ivan", lastname: "Matveev" },
      { name: "Ivan", lastname: "Matveev" }
    )
  );

  console.log(
    compareTwoObject(
      { name: "Ivan", lastname: "Matveev" },
      { age: 24, name: "Ivan", lastname: "Matveev" }
    )
  );
}

export default compareTwoObject;
