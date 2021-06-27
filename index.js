//fibonacci was an Italian mathematician who came up ith the fibonacci Sequence:

//0,1,1,2,3,5,8,13,21,34,55,89,144...

//where every number is the sum of the two previous ones. 
//e.g. 0, 1, 1, 2, 3, 5 comes from...
//0+1 = 1
// 1 + 1 = 2
// 1 + 2 = 3
// 2 + 3 = 5

//////////////////// THE CODE ////////////////////


function fibonacciGenerator (n) {
  var output = [];
  if(n === 1) {
    output = [0];
  }
  else if (n === 2) {
    output = [0,1];
  }
  else {
    output = [ 0,1 ];

    for (var i = 2; i < n; i++) {
        output.push (output[output.length - 2]+ output[output.length - 1]);
    }
  }
  return output;
}

output = fibonacciGenerator(5);
console.log(output)