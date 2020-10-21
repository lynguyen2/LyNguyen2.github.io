
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
var word = "#";
console.log(word);

for (var i = 0; i < 7; i++){
  word = word + "#";
  console.log(word);
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function fizzBuzz(num){
  for(var i = 1; i <= 15; i++)
   if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz");
  }else if(i % 3 === 0){
      console.log("fizz");
  }else if(i % 5 === 0){
      console.log("buzz");
  }else {
    console.log(i);
  }  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
  let chessboard = "";
  for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
      if((i + j) % 2 === 0){
        chessboard += " "
      } else if ((i + j) % 2 === 1) {
        chessboard += "#"
      }
    }
    chessboard += "\n"
  }
  return chessboard
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
