const getFiniteNumbers = (arr) => arr.map((num) => Number.isFinite(num));

const getFiniteNumbersV2 = (arr) => arr.map((num) => isFinite(num));

const getNaN = (arr) => arr.map((num) => Number.isNaN(num));

const getNaNV2 = (arr) => arr.map((num) => isNaN(num));

const getIntegers = (arr) => arr.map((num) => Number.IsInteger(num));