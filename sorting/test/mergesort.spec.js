var expect = require('chai').expect;
var mergesort = require('../mergesort');

describe('merge sort sorting algorithm', function () {

    it('works on empty arrays', function () {
        expect(mergesort([])).to.be.eql([]);
    });
});
