let arr = [11, 18, 3, 99, 7];

var linearSearch = function (arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
};
