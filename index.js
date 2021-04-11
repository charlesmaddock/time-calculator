// Format should be hh-mm hh-mm hh-mm. Works without padded hours too (ex 08:20 is the same as 8:20).
// The important thing is that there is a spacebar between the intervals and a hyphen
// the start and the stop time.
let times =
  "08:40-12:20 19:30-20:30 12:15-15:50 09:20-12:00 13:50-14:30 09:00-11:45 12:30-14:15 12:07-12:30 15:17-17:33 09:56-12:05 13:00-14:20 16:02-17:05 17:37-17:51";

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
  var hourDiff = new Date(endDate - startDate).getHours() - 1;
  var minDiff = new Date(endDate - startDate).getMinutes();
  totalHours += hourDiff;
  totalHours += minDiff / 60;
  console.log(
    startTime + " to " + endTime + " is " + (hourDiff + minDiff / 60) + " hours"
  );
}
console.log("\nIs in total " + totalHours.toString() + " hours!");
