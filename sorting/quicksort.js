(function() {
    'use strict';

    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function partition(arr, start, end) {
        var pivot = arr[end];
        var partitionIndex = start;

        for (var i = start; i < end; i++) {
            if (arr[i] <= pivot) {
                swap(arr, i, partitionIndex);
                partitionIndex++;
            }
        }
        swap(arr, partitionIndex, end);
        return partitionIndex;
    }

    function quicksort(arr, start, end) {

        if (start < end) {
            var partionIndex = partition(arr, start, end);
            quicksort(arr, start, partionIndex - 1);
            quicksort(arr, partionIndex + 1, end);
        }
    }

    module.exports = quicksort;

}());