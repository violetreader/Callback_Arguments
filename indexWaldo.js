// The second argument/parameter is expected to be a function
var pos;

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      pos = i;
      return found();   // execute callback
    }
  }
  return pos;
}

function actionWhenFound() {
  console.log("Found Waldo at the index " + pos + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);