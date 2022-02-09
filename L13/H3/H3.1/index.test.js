import { reverseArray } from "./index";

it("shoud get reverse array", () => {
    expect(reverseArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
});

it("shoud get reverse array", () => {
    expect(reverseArray(1, 2, 3, 4, 5)).toEqual(null);
});

it("shoud get reverse array", () => {
    expect(reverseArray([1, 2, -3, 4, , 0])).toEqual([0, , 4, -3, 2, 1]);
});