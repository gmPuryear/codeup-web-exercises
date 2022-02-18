// Your task is to write a function which returns the sum of following series upto nth term(parameter).
function SeriesSum(n) {
    let arr = [];
    let sum = 0;
    for (var i = 0; i < n; i++) {
        if (i === 0) {
            arr[0] = 1;
        } else if (i === arr.length - 1) {
            break;
        } else {
            arr[i] = arr[i - 1] + (1 / 3);
        }
    }
    console.log(arr);
}
console.log(SeriesSum(4));