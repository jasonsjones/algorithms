var expect = require('chai').expect;
var bubblesort = require('../bubblesort');

var desc = function (a, b) {
    return b - a;
}

var sortPeople = function (a, b) {
    return a.age - b.age;
}

var people = [
    {name: 'alice', age: 34},
    {name: 'bob', age: 42},
    {name: 'charlie', age: 32},
    {name: 'david', age: 25}
];

describe('bubblesort sorting algorithm', function () {
    it('works on empty arrays', function () {
        expect(bubblesort([])).to.be.eql([]);
    });

    it('sorts array of integers in ascending order', function () {
        expect(bubblesort([4, 5, 2, 1, 3, 6])).to.be.eql([1, 2, 3, 4, 5, 6]);
        expect(bubblesort([34, 56, 77, 23, 21, 5])).to.be.eql([5, 21, 23, 34, 56, 77]);
    });

    it('sorts an array of integers in descending order', function () {
        expect(bubblesort([4, 5, 2, 1, 3, 6], desc)).to.be.eql([6, 5, 4, 3, 2, 1]);
        expect(bubblesort([34, 56, 77, 23, 21, 5], desc)).to.be.eql([77, 56, 34, 23, 21, 5]);
    });

    it('sorts an array of complex objects', function () {
        expect(bubblesort(people, sortPeople)[0]).to.be.eql({ name: 'david', age: 25 })
        expect(bubblesort(people, sortPeople)[3]).to.be.eql({ name: 'bob', age: 42 })
    });

});
