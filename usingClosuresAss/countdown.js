var countdownGenerator = function (x) {
  var countdown = x + 1;

  return function () {
    countdown -= 1;
    var ans = "T-minus " + countdown + " ...";
    if (countdown === 0) {
      return "Blast Off!";
    } else if (countdown < 0) {
      return "Rockets already gone, bub! :D";
    } else {
      return ans;
    }
  }

};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!