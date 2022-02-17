var arr = [];

for (let i = 0; i < 10; i += 1) {
    arr[i] = function() {
        return i;
    };
}

console.log(arr[4]());

// var arr = [];

// for (var i = 0; i < 10; i += 1) {
//   arr[i] = function () {
//     return i;
//   };
// }