import { getMinSquaredNumber } from "./getMinSquaredNumber";

it("should get min squared numbers", () => {
    expect(getMinSquaredNumber([])).toEqual(null);
});

it("should get min squared numbers", () => {
    expect(getMinSquaredNumber(88, 91, 43, 11, -90, -2)).toEqual(null);
});

it("should get min squared numbers", () => {
    expect(getMinSquaredNumber([88, 91, 43, 11, -90, -2])).toEqual(4);
});