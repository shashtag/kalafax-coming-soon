var countDownDate = new Date("April 2, 2021 16:00:00").getTime();
var countdownfunction = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("demo").innerHTML =
    days +
    "d " +
    "&nbsp;" +
    hours +
    "h " +
    "&nbsp;" +
    minutes +
    "m " +
    "&nbsp;" +
    seconds +
    "s ";
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "A little more time!";
  }
}, 1000);
