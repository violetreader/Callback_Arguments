var pos;
var arr = ["Alice", "Bob", "Waldo", "Winston"];


arr.forEach(function (element, index, array) {
  //console.log('current element -> ', element);
  if (element === "Waldo") {
    // console.log("Found ", element);
    console.log("Found " + element + " at index " + index);
  }
});

// arr.forEach(function stopAtWaldo(x) {
//   //console.log() below will output all elements in (arr) array
//   console.log('inside', x);
//   if (x === "Waldo") {
//     console.log("Found Waldo at the index");
//   }
// } )


// // console.log(hold);


// console.log('outside', hold);

