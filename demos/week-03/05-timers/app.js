// timers
// we use timers to count time in JS
// we have two types of timers: a timeout and an interval
// timeout --> countdown and at the end, an action happens. This action happens ONCE (for example, when the NewYear's eve countdown finishes, fireworks explode!)
// interval --> an action happens regularly after a specific amount of time. This action NEVER stops, unless we stop it (for example, with a plant waterer, plants get watered every 6 hours consistently)

//===================================================================
//timeouts
// setTimeout(function () {
//action to happen at the end of the countdown
// }, delay);

setTimeout(function () {
  console.log("Were you waiting for me????");
}, 3000); // 3 seconds

//we can also decalre our callback function separately to be reused or to keep it tidy
function handleCountdown() {
  console.log("Were you waiting for me????");
}
setTimeout(handleCountdown, 3000); // 3 seconds
setTimeout(handleCountdown, 6000); // 6 seconds

//intervals
setInterval(function () {
  console.log("I repeat every 2 seconds");
}, 2000); //2 seconds

function handleInterval() {
  console.log("I repeat every 5 seconds");
}
setInterval(handleInterval, 5000); //5 seconds

//we can use a timeout to stop the action in an interval
const interval = setInterval(function () {
  console.log("This happens every 4 seconds");
}, 4000);

function stopIntervalWithTimeout() {
  setTimeout(function () {
    //the clearInterval method stops an interval
    //the argument of the clearInterval method is the interval we want to stop
    clearInterval(interval);
  }, 13000);
}

stopIntervalWithTimeout();

//examples of timers we will use in the course
//week 3 assignment --> we will build a cookie clicker game with an interval to give the user a cookie regularly
//week 7 --> polling: using an interval to refresh the data we get from our database
