(function () {
    'use strict';

    function compareFnAscend(a, b) {
        return a - b;
    }

    /**
     * Insertion sort sorting algorithm. Runs in O(n^2) time for the average
     * and worst case scenarios, and O(n) for best case, when the array is
     * already sorted.
     *
     * This algorithm iterates over an array, consuming one element with each
     * iteration, gradually growing a sorted output list.  Each iteration, this
     * algorithm removes one element from the input array, finds the location
     * it belongs in the sorted array, and inserts it there.  It repeats until
     * no input elements remain.
     *
     * @param  {Array}     a - the array to sort
     * @param  {Function}  cmp - the comparator function, optional.  If not
     *                     provided, the comparator function will sort the
     *                     array in ascending order.
     * @return {Array}     the sorted array
     */
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

    // expose insertionSort
    module.exports = insertionSort;
}());
