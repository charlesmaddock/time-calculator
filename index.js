const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Paste the time intervals you've worked in this format: hh:mm-hh:mm hh:mm-hh:mm\n\n",
  function (times) {
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
        startTime +
          " to " +
          endTime +
          " is " +
          (hourDiff + minDiff / 60) +
          " hours"
      );
    }
    console.log("\nIs in total " + totalHours.toString() + " hours!");
    rl.close();
  }
);

rl.on("close", function () {
  console.log("\nGoodbye!");
  process.exit(0);
});
