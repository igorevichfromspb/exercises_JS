const getDay = () => {
  const today = new Date();

  const dayIndex = today.getDay() - 1;

  const daysweek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  console.log(`Today is: ${daysweek[dayIndex]}.`);

  let hour = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  let noonTime = hour >= 12 ? "PM" : "AM";

  if (hour === 0 && noonTime === " PM ") {
    if (minutes === 0 && seconds === 0) {
      hour = 12;
    } else {
      hour = 12;
      noonTime = " PM";
    }
  }
  if (hour === 0 && noonTime === " AM ") {
    if (minutes === 0 && seconds === 0) {
      hour = 12;
    } else {
      hour = 12;
      noonTime = " AM";
    }
  }

  console.log(`Current time is: ${hour} ${noonTime}:${minutes}:${seconds}`);
};

export default getDay;
