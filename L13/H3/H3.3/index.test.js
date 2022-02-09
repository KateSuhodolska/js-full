import { getAdults } from "./index";

it("shoud get adults", () => {
    expect(getAdults({ "John Doe": 19, Tom: 17, Bob: 18 })).toEqual({
        "John Doe": 19,
        Bob: 18,
    });
});

it("shoud get adults", () => {
    expect(getAdults({ Carl: 16.5, Artur: 7, Bob: 88 })).toEqual({ Bob: 88 });
});

it("shoud get adults", () => {
    expect(getAdults({ "John Doe": 7 })).toEqual({});
});