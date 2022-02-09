import { calc } from "./calculator";

it("shoud get sum of numbers", () => {
    expect(calc("2 + 8")).toEqual("2 + 8 = 10");
});

it("shoud get difference of numbers", () => {
    expect(calc("2 - 8")).toEqual("2 - 8 = -6");
});

it("shoud get multiplication of numbers", () => {
    expect(calc("2 * 8")).toEqual("2 * 8 = 16");
});

it("shoud get division of numbers", () => {
    expect(calc("8 / 2")).toEqual("8 / 2 = 4");
});

it("shoud get null", () => {
    expect(calc(3 + 2)).toEqual(null);
});