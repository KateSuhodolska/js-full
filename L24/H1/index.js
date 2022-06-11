const firstDate = Date.UTC(2022, 6, 9, 20, 47);
const secondDate = Date.UTC(2019, 5, 11, 11, 30);

const getDiff = (startDate, endDate) => {
    const diffMs = startDate - endDate;
    const days = 1000 * 60 * 60 * 24;
    return diffMs / days;
};

console.log(getDiff(firstDate, secondDate));