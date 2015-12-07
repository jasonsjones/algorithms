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
     * Bubblesort sorting algorithm. Runs in O(n^2) time.
     * @param  {Array} a the array to sort
     * @param  {Function} cmp the comparator function, optional
     * @return {Array}     the sorted array
     */
    function bubblesort(a, cmp) {
        cmp = cmp || compareFnAscend;

        for (var i = a.length - 1; i > 0; i--) {
            // let's assume the array is sorted for this pass
            var sorted = true;
            for (var j = 0; j < i; j++) {
                if (cmp(a[j], a[j+1]) > 0) {
                    swap(a, j, j+1);
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
