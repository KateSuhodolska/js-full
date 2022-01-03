const sortAsc = (array) => {
    if (!Array.isArray(array)) return null;
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                done = false;
                let tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
};

const sortDesc = (array) => {
    if (!Array.isArray(array)) return null;
    let done = false;
    while (!done) {
        done = true;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] < array[i]) {
                done = false;
                let tmp = array[i - 1];
                array[i - 1] = array[i];
                array[i] = tmp;
            }
        }
    }

    return array;
};

const numbers = [12, 10, 15, 11, 14, 13, 16];
sortDesc(numbers);
console.log(numbers);
sortAsc(numbers);
console.log(numbers);