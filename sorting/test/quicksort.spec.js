var expect = require('chai').expect;
var quicksort = require('../quicksort');

describe('quicksort sorting algorithm', function () {

    it('works on empty arrays', function () {
        var arr = [];
        quicksort(arr, 0, 0);
        expect(arr).to.be.eql([]);
    });

    it('sorts array of integers in ascending order', function () {
        var arr1 = [4, 5, 2, 1, 7, 8, 3, 6];
        quicksort(arr1, 0, arr1.length - 1);
        expect(arr1).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8]);
    });
});
