"use strict";
function sumFor(list) {
    let total = 0;
    for (let i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
}
function sumWhile(list) {
    let total = 0;
    let i = 0;
    while (i < list.length) {
        total += list[i];
        i++;
    }
    return total;
}
function sumRecursion(list) {
    if (list.length === 0) {
        return 0;
    }
    return list[0] + sumRecursion(list.slice(1));
}
function sumTheFunctionalWay(list) {
    return list.reduce((total, currentValue) => total + currentValue, 0);
}
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
