const raisinAlarm = function(cookie) {
  let alert = "All good!";
  for (let ingredients of cookie) {
    if (ingredients === "") {
      alert = 'Raisin Alert!';
    }
  }
  return alert;
};

console.log(raisinAlarm(["", "", "", ""]));
console.log(raisinAlarm(["", "", "", "", ""]));
console.log(raisinAlarm(["", "", ""]));

const raisinAlarmArray = function(cookies) {
  let alert = [];
  for (let cookie of cookies) {
    alert.push(raisinAlarm(cookie));
  }
  return alert;
};
// for (let ingredients of cookie) {
//   if (ingredients === "") {
//     alert.push('Raisin Alert!');
//   } else {
//     alert.push("All good!");
// }

console.log(raisinAlarmArray(
  [
    ["", "", "", ""],
    ["", "", "", "", ""],
    ["", "", ""]
  ]
));