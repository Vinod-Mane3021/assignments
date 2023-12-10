// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const addZero = (value) => {
  return value < 10 ? `0${value}` : value;
};

const formateHourTo12Hr = (hour) => {
  return hour % 12 || 12;
};

const getAmPm = (hour) => {
  return hour >= 12 ? "PM" : "AM";
};

const formateTime = (date) => {
  const h = addZero(formateHourTo12Hr(date.getHours()));
  const m = addZero(date.getMinutes());
  const s = addZero(date.getSeconds());
  return `${h}:${m}:${s} ${getAmPm()}`;
};

const updateClock = () => {
  const currentTime = new Date();
  const formattedTime = formateTime(currentTime);
  console.clear();
  console.log(formattedTime);
};

setInterval(updateClock, 1000);
