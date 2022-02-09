import { withdraw } from "./index";

it("should return transaction result", () => {
    expect(withdraw(["Artur", "Andrij", "Tom"], [100, 0, 50], "Tom", 10)).toEqual(
        40
    );
});

it("should return transaction result", () => {
    expect(
        withdraw(["Anna", "Andrij", "Tom"], [150, 100, 50], "Anna", 150)
    ).toEqual(0);
});

it("should return transaction result", () => {
    expect(
        withdraw(["John", "Andrij", "Tom"], [150, 0, 50], "Andrij", 10)
    ).toEqual(-1);
});