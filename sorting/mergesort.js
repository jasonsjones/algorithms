(function() {
    'use strict';

    function compareFnAscend(a, b) {
        return a - b;
    }

    function mergeSort(arr, cmp) {
        cmp = cmp || compareFnAscend;

        var n = arr.length;
        if (n < 2) {
            return arr;
        }
        var mid = Math.floor(n / 2);
        var left = arr.slice(0, mid);
        var right = arr.slice(mid, n);
        mergeSort(left, cmp);
        mergeSort(right, cmp);
        return merge(left, right, arr, cmp);
    }

    function merge(left, right, arr, cmp) {
        var nLeft = left.length;
        var nRight = right.length;
        var i = 0;
        var j = 0;
        var k = 0;

        while (i < nLeft && j < nRight) {
            if (cmp(left[i], right[j]) <= 0) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
            }
        }

        while (i < nLeft) {
            arr[k++] = left[i++];
        }

        while (j < nRight) {
            arr[k++] = right[j++];
        }

        return arr;
    }

    module.exports = mergeSort;

}());
