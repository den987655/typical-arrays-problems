
exports.min = function min (array) {


    return Math.min.apply(null, array)
    return 0
}


exports.max = function max (array) {


    return Math.max.apply(null, array)
    return 0
}


exports.avg = function avg (array) {

    let num = 0;
    for (let a = 0; a < array.length; a++) {
       num = num + array[a];
    }
    return num/array.length;
}


