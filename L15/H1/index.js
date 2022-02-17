const createCalculator = () => {
    let res = 0;

    const add = (num) => (res += num);

    const decrease = (num) => (res -= num);

    const reset = () => (res = 0);

    const getMemo = () => res;
    return {
        add,
        decrease,
        reset,
        getMemo,
    };
};