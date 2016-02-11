var expect = require('chai').expect;
var quicksort = require('../quicksort');

describe('quicksort sorting algorithm', function () {

    it('works on empty arrays', function () {
        var arr = [];
        quicksort(arr, 0, 0);
        expect(arr).to.be.eql([]);
    });
});
