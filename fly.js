let arr = [2, 1, 2, 3, 1]; // number of airports
let n = arr.length;   ///  number of airports
[1, 6, 3, 4, 5, 0, 0, 0, 6] // example


let traveler = 0;   // initial airport location
function howCanFly() {
    if (traveler >= n - 1) {
        return "1-->N"
    }
    if (arr[traveler] === 0) {
        return "can't go"
    }

    if (traveler < n - 1 && arr[traveler] !== 0) {
        traveler = traveler + arr[traveler]



    }


}
