import getSum, { getSquaredArray, getOddNumbers } from "./calculator";

it("should get squared numbers", () => {
    expect(getSquaredArray([2, 3, 4, 0])).toEqual([4, 9, 16, 0]);
});

it("should get odd numbers", () => {
    expect(getOddNumbers([1, 2, 3, 4, 0])).toEqual([1, 3]);
});

it("should get sum of numbers", () => {
    expect(getSum(3, 7)).toEqual(10);
});