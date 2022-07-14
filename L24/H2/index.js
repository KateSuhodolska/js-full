const studentsArr = [
    { name: "Tom", birthDate: "01/15/2010" },
    { name: "Ben", birthDate: "01/17/2008" },
    { name: "Sam", birthDate: "03/15/2010" },
    { name: "Sara", birthDate: "03/10/2010" },
    { name: "Max", birthDate: "03/07/2010" },
];

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const studentsBirthDays = (students) => {
    const resObj = {};
    students
        .sort(
            (a, b) =>
            new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate()
        )
        .map(
            // eslint-disable-next-line no-return-assign
            ({ name, birthDate }) => {
                const month = months[new Date(birthDate).getMonth()];
                if (!resObj[month]) {
                    resObj[month] = [];
                }
                resObj[month].push(name);
            }
        );
    return resObj;
};
console.log(studentsBirthDays(studentsArr));