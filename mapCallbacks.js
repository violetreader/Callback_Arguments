var words = ["ground", "control", "to", "major", "tom"];

function map(arr, funct) {
  // console.log(arr);
  var arrayLength = [];
  for (var i = 0; i < arr.length; i++) {
                // console.log(arr[i]);
    // console.log(funct(arr[i]));
    var newWords = funct(arr[i]);
    arrayLength.push(newWords);
  }
  console.log(arrayLength);
}

// function funct() {
//   word = words
// }


map(words, function(word) {
  return word.length;
});