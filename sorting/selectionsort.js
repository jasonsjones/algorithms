(function () {
    'use strict';

    function swap(a, i, j) {
        var ai = a[i], aj = a[j];
        a[i] = aj;
        a[j] = ai;
    }

    function compareFnAscend(a, b) {
        return a - b;
    }

    /**
     * Selection sort sorting algorithm. Runs in O(n^2) time.
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
