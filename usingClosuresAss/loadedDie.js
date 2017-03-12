function makeLoadedDie() {
  var arrIndex = 0;
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  // var arrLength = list.length;
  // console.log("this is array length: " + arrLength);
  return function() {

    return list[arrIndex++];

    // for (var i in list) {
    //   // console.log(i);
    //   // arrIndex += parseInt(i);
    //   var ans = list[0];
    //   // console.log(arrIndex);
    // }
    // return ans;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6