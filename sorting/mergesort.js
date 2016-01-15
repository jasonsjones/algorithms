(function() {
    'use strict';

    function compareFnAscend(a, b) {
        return a - b;
    }

    /**
     * Mergesort sorting algorithm.  Runs in O(n log n) time in all scenarios--best, average
     * and worst case.
     *
     * Mergesort is categorized as a divide and conquer algorithm.  The algorithm partitions
     * the array in halves then calls itself on each half.  When each array partition consists
     * of only one element it 'merges' the partitions back together on the way back up the stack
     * sorting the elements (based on the provided comparator function) along the way.
     */
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
