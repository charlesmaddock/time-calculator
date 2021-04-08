// Format should be hh-mm hh-mm hh-mm. Works without padded hours too (ex 08:20 is the same as 8:20).
// The important thing is that there is a spacebar between the intervals and a hyphen
// the start and the stop time.
let times =
  "09:17-12:26 13:03-16:15 09:45-12:25 12:45-13:05 13:34-15:05 10:36-11:57 13:20-17:04 15:03-17:30 18:41-20:30 08:55-13:35 14:12-17:20 09:08-12:00 13:22-15:40 13:07-14:25 12:20-16:45";

console.log(
  "Check the logged values below to make sure you didn't format your work time intervals incorrectly!\n"
);

var timesArray = times.split(" ");
var totalHours = 0;
for (i = 0; i < timesArray.length; i++) {
  var startTime = timesArray[i].split("-")[0];
  var endTime = timesArray[i].split("-")[1];
  var startDate = new Date().setHours(
    startTime.split(":")[0],
    startTime.split(":")[1]
  );
  var endDate = new Date().setHours(
    endTime.split(":")[0],
    endTime.split(":")[1]
  );
  var hourDiff = new Date(endDate - startDate).getHours();
  var minDiff = new Date(endDate - startDate).getMinutes();
  totalHours += hourDiff;
  totalHours += minDiff / 60;
  console.log(
    startTime + " to " + endTime + " is " + (hourDiff + minDiff / 60) + " hours"
  );
}
console.log("\nIs in total " + totalHours.toString() + " hours!");
