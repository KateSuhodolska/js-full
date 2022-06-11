const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "St"];

const dayOfWeek = (date, days) => {
    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);
    const resDay = new Date(dateInFuture).getDay();
    return weekDays[resDay];
};

const result = dayOfWeek(new Date(2022, 0, 1), 14);
console.log(result);