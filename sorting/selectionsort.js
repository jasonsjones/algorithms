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
     * Selection sort sorting algorithm. Runs in O(n^2) time.
     *
     * This algorithm loops over the array and with each pass it determines
     * the index which contains the largest value (or smallest value in the
     * case of descending sort) and swaps it with the last element in the
     * array and decrements the looping variable.  This essentially partitions
     * the array into an unsorted partion at the front of the array and a
     * gradually more sorted partition at the end until the entire array is
     * sorted.
     *
     * This main difference between this algorithm and the bubble sort
     * algorithm is that this algorithm only does at most one swap with each
     * pass, whereas the bubble sort can do as much as n-i swaps with each
     * pass, where i is the current iteration fo the algorithm for 1 < i < n-1.
     *
     * @param  {Array}     a the array to sort
     * @param  {Function}  cmp the comparator function, optional.  If not
     *                     provided, the comparator function will sort the
     *                     array in ascending order.
     * @return {Array}     the sorted array
     */
    function selectionsort(a, cmp) {
        cmp = cmp || compareFnAscend;

        for (var i = a.length - 1; i > 0; i--) {
            var maxIdx = 0;
            for (var j = 1; j <= i; j++) {
                if (cmp(a[j], a[maxIdx]) > 0) {
                    maxIdx = j;
                }
            }
            swap(a, i, maxIdx);
        }
        return a;
    }

    module.exports = selectionsort;
})();
