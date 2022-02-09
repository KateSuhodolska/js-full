it("17 = 17", () => {
    expect(17).toEqual(17);
});

it("18 != 17", () => {
    expect(18).not.toEqual(17);
});

const getEvenNumbers = (numbers) => numbers.filter((num) => num % 2 === 0);

it("shoud get even numbers", () => {
    const res = getEvenNumbers([1, 2, 3, 4]);
    expect(res).toEqual([2, 4]);
});