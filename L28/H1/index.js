/* eslint-disable no-case-declarations */
const shmoment = (initValue) => {
    const result = initValue;
    const calc = {
        add(name, num) {
            switch (name) {
                case "years":
                    const currentYear = result.getFullYear();
                    result.setYear(currentYear + num);
                    break;
                case "months":
                    const currentMonth = result.getMonth();
                    result.setMonth(currentMonth + num);
                    break;
                case "days":
                    const currentDay = result.getDate();
                    result.setDate(currentDay + num);
                    break;
                case "hours":
                    const currentHour = result.getHours();
                    result.setHours(currentHour + num);
                    break;
                case "minutes":
                    const currentMin = result.getMinutes();
                    result.setMinutes(currentMin + num);
                    break;
                case "seconds":
                    const currentSec = result.getSeconds();
                    result.setSeconds(currentSec + num);
                    break;
                case "milliseconds":
                    const currentMs = result.getMilliseconds();
                    result.setMilliseconds(currentMs + num);
                    break;

                default:
                    break;
            }
            return this;
        },
        subtract(name, num) {
            switch (name) {
                case "years":
                    const currentYear = result.getFullYear();
                    result.setYear(currentYear - num);
                    break;
                case "months":
                    const currentMonth = result.getMonth();
                    result.setMonth(currentMonth - num);
                    break;
                case "days":
                    const currentDay = result.getDate();
                    result.setDate(currentDay - num);
                    break;
                case "hours":
                    const currentHour = result.getHours();
                    result.setHours(currentHour - num);
                    break;
                case "minutes":
                    const currentMin = result.getMinutes();
                    result.setMinutes(currentMin - num);
                    break;
                case "seconds":
                    const currentSec = result.getSeconds();
                    result.setSeconds(currentSec - num);
                    break;
                case "milliseconds":
                    const currentMs = result.getMilliseconds();
                    result.setMilliseconds(currentMs - num);
                    break;

                default:
                    break;
            }
            return this;
        },
        result() {
            return result;
        },
    };
    return calc;
};

const res = shmoment(new Date()).add(100, "days").result();
console.log(res);