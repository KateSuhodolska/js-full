const firstDate = Date.UTC(2022, 6, 9, 20, 47);
console.log(new Date(firstDate));
const secondDate = Date.UTC(2012, 0, 19, 11, 30);
console.log(new Date(secondDate));

const getDiff = (startDate, endDate) => {
    const diffMs =
        startDate > endDate ? startDate - endDate : endDate - startDate;
    const sec = Math.floor(diffMs / 1000);
    const min = Math.floor(sec / 60);
    const hours = Math.floor(min / 60);
    const days = Math.floor(hours / 24);

    return `${days}d ${hours % days}h ${min % hours}m ${sec % min}s`;
};

console.log(getDiff(firstDate, secondDate));