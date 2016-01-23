(function () {
    'use strict';

    // Helper function to swap two elements in the array, a.
    function swap(a, i, j) {
        var ai = a[i], aj = a[j];
        a[i] = aj;
        a[j] = ai;
    }

    // Default comparator function.  Will sort elements in ascending order.
    function compareFnAscend(a, b) {
        return a - b;
    }

    /**
     * Bubblesort sorting algorithm. Runs in O(n^2) time.
     * This algorithm loops over the array, and with each pass, the largest
     * value (or smaller value in the case of decending order) will 'bubble'
     * up to the end of the array.  This essentially partitions the array into
     * an unsorted partion at the front and a gradually more sorted partition
     * at the end until the entire array is sorted.
     *
     * @param  {Array}     a the array to sort
     * @param  {Function}  cmp the comparator function, optional.  If not
     *                     provided, the comparator function will sort the
     *                     array in ascending order.
     * @return {Array}     the sorted array
     */
    function bubblesort(a, cmp) {
        cmp = cmp || compareFnAscend;

        for (var i = a.length - 1; i > 0; i--) {
            // let's assume the array is sorted for this pass
            var sorted = true;
            for (var j = 0; j < i; j++) {
                if (cmp(a[j], a[j + 1]) > 0) {
                    swap(a, j, j + 1);
                    // if we need to swap elements, it is not sorted
                    sorted = false;
                }
            }
            // if it's already sorted, no need to continue
            if (sorted) {
                break;
            }
        }
        return a;
    }

    module.exports = bubblesort;
})();
