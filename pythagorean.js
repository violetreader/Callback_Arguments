var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(paper){

  // console.log("in map function");
  var x = paper['x'];
  var y = paper['y'];
  x = x * x;
  y = y * y;
  var calc = x + y;
  calc = Math.sqrt(calc);
  return calc;

});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

