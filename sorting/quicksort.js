(function() {
    'use strict';

    // Default comparator function.  Will sort elements in ascending order.
    function compareFnAscend(a, b) {
        return a - b;
    }

    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function partition(arr, start, end, cmp) {
        var pivot = arr[end];
        var partitionIndex = start;

        for (var i = start; i < end; i++) {
            if (cmp(arr[i], pivot) <= 0) {
                swap(arr, i, partitionIndex);
                partitionIndex++;
            }
        }
        swap(arr, partitionIndex, end);
        return partitionIndex;
    }

    function randomizePartion(arr, start, end, cmp) {
        var pivotIdx = getRandomBetween(start, end);
        swap(arr, pivotIdx, end);
        return partition(arr, start, end, cmp);
    }

    function getRandomBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function doQuicksort(arr, start, end, cmp) {
        cmp = cmp || compareFnAscend;
        if (start < end) {
            var partionIndex = randomizePartion(arr, start, end, cmp);
            doQuicksort(arr, start, partionIndex - 1, cmp);
            doQuicksort(arr, partionIndex + 1, end, cmp);
        }
    }

    function quicksort(arr) {
        doQuicksort(arr, 0, arr.length - 1);
    }

    module.exports = quicksort;

}());
