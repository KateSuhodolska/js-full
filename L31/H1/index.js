const successPromise = new Promise((resolve) => {
    resolve(32);
});

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

successPromise
    .then((number) => {
        const halfNumber = number / 2;
        return halfNumber;
    })
    .then((number) => {
        /* fix this handler */
        const squaredNumber = number * number;
        return squaredNumber;
    })
    .then((result) => {
        console.log(result); // 256
    });

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */
successPromise
    .then((number) => {
        const res = number * 10;
        return res;
        /* fix this handler */
    })
    .then((result) => {
        setTimeout(() => {
            console.log(result);
        }, 0);
        // 320
    });

console.log(
    "!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!"
);