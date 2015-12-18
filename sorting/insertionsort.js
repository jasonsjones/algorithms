(function () {
    'use strict';

    function compareFnAscend(a, b) {
        return a - b;
    }

    function insertionSort(a, cmp) {
        cmp = cmp || compareFnAscend;

        for (var i = 1; i < a.length; i++) {
            var value = a[i];
            var hole = i;

            while (hole > 0 && cmp(a[hole - 1], value) > 0) {
                a[hole] = a[hole - 1];
                hole--;
            }
            a[hole] = value;
        }
        return a;
    }

    module.exports = insertionSort;
}());