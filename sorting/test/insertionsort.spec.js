var expect = require('chai').expect;
var insertionsort = require('../insertionsort');

var desc = function (a, b) {
    return b - a;
};

var sortPeople = function (a, b) {
    return a.age - b.age;
};

var people = [
    {name: 'alice', age: 34},
    {name: 'bob', age: 42},
    {name: 'charlie', age: 32},
    {name: 'david', age: 25}
];

describe('insertion sort sorting algorithm', function () {
    it('works on empty arrays', function () {
        expect(insertionsort([])).to.be.eql([]);
    });

    it('sorts array of integers in ascending order', function () {
        expect(insertionsort([4, 5, 2, 1, 3, 6])).to.be.eql([1, 2, 3, 4, 5, 6]);
        expect(insertionsort([34, 56, 77, 23, 21, 5])).to.be.eql([5, 21, 23, 34, 56, 77]);
    });

    it('sorts array of integers in descending order', function () {
        expect(insertionsort([4, 5, 2, 1, 3, 6], desc)).to.be.eql([6, 5, 4, 3, 2, 1]);
        expect(insertionsort([34, 56, 77, 23, 21, 5], desc)).to.be.eql([77, 56, 34, 23, 21, 5]);
    });

    it('sorts array of complex objects', function () {
        expect(insertionsort(people, sortPeople)[0]).to.be.eql({name: 'david', age: 25});
        expect(insertionsort(people, sortPeople)[3]).to.be.eql({name: 'bob', age: 42});
    });
});
