var expect = require('chai').expect;
var quicksort = require('../quicksort');

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

describe('quicksort sorting algorithm', function () {
    var arr1, arr2;

    beforeEach(function () {
        arr1 = [4, 5, 2, 1, 7, 8, 3, 6];
        arr2 = [34, 56, 77, 23, 21, 5];
    });

    it('works on empty arrays', function () {
        var arr = [];
        quicksort(arr);
        expect(arr).to.be.eql([]);
    });

    it('sorts array of integers in ascending order', function () {
        quicksort(arr1);
        quicksort(arr2);

        expect(arr1).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(arr2).to.be.eql([5, 21, 23, 34, 56, 77]);
    });

    it('sorts array of integers in descending order', function () {
        quicksort(arr1, desc);
        quicksort(arr2, desc);

        expect(arr1).to.be.eql([8, 7, 6, 5, 4, 3, 2, 1]);
        expect(arr2).to.be.eql([77, 56, 34, 23, 21, 5]);
    });

    it('sorts array of complex objects', function () {
        quicksort(people, sortPeople);

        expect(people[0]).to.be.eql({name: 'david', age: 25});
        expect(people[3]).to.be.eql({name: 'bob', age: 42});
    });
});
