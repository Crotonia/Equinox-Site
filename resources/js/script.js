(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let deadline = "April 9, 2022 00:00:00",
    countDown = new Date(deadline).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;
      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //do something later when date is reached
      if (distance < 0) {
        let headline = document.getElementById("headline"),
          countdown = document.getElementById("countdown"),
          content = document.getElementById("content");

        headline.innerText = "HAPPY NEW SEMESTER";
        countdown.style.display = "none";
        content.style.display = "block";

        clearInterval(x);
      }
      //seconds
    }, 0);
})();

const body = document.body;

// lock screen orientation
// screen.orientation.lock("portrait");
const screen = window.screen;
console.log(screen.orientation.angle);
if (screen.orientation.angle === 90) {
  body.style.display = "none";
  this.alert("Please use the Potrait mode");
} else {
  body.style.display = "";
}
window.addEventListener("orientationchange", function () {
  if (screen.orientation.angle === 90) {
    body.style.display = "none";
    this.alert("Please use the Potrait mode");
  } else {
    body.style.display = "";
  }
});
