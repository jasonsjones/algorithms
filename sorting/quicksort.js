(function() {
    'use strict';

    // Default comparator function.  Will sort elements in ascending order.
    function compareFnAscend(a, b) {
        return a - b;
    }

    // Helper function to swap two elements in the array, arr.
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
        if (start < end) {
            var partionIndex = randomizePartion(arr, start, end, cmp);
            doQuicksort(arr, start, partionIndex - 1, cmp);
            doQuicksort(arr, partionIndex + 1, end, cmp);
        }
    }

    /**
     * Quicksort sorting algorithm runs in O(n log n) time in best- and average-
     * cases and O(n^2) in the worst case.  However, using a randomized pivot selection
     * significantly reduces the chance of the worst case ocurring. Quicksort is also considered
     * an "in-place" algorithm, meaning it operates on the original array so there is not a
     * requirement for any additional space, or memory, for the algorithm.
     *
     * Quicksort is categorized as a divide and conquer algorithm.  The algorithm partitions an
     * array based on the selection of a pivot.  All values in the array that are less than the
     * pivot are moved to the left of the pivot and all vaules greater than the pivot value are
     * moved to the right of the pivot.  Quicksort is then called recursively on each partition.
     *
     * Quicksort simply calls a helper function, doQuicksort, to do the work of quicksort.  This
     * was abstracted a bit to present a clean API to the client.
     *
     * @param {Array}     arr - the array to sort
     * @param {Function}  cmp - the comparator function, optional.  If not
     *                     provided, the comparator function will sort the
     *                     array in ascending order.
     */
    function quicksort(arr, cmp) {
        cmp = cmp || compareFnAscend;
        doQuicksort(arr, 0, arr.length - 1, cmp);
    }

    module.exports = quicksort;

}());
