var items = [
              [1,2],
              [3,4],
              [5,6]
            ];

function create2DArray(row, col) {
  var arr = new Array(row);
  for(var i=0;i<arr.length;i++) {
    arr[i] = new Array(col);
  }
  return arr;
}

var arr2D = create2DArray(2, 4);
