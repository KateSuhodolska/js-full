const formatter = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
});

const getGreenwichTime = (date) => formatter.format(date);

console.log(getGreenwichTime(new Date(Date.UTC(2022, 1, 5, 9, 30))));