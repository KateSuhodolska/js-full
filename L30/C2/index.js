const userDataPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve({ name: "Tom", age: 17 });
    }, 1000);
});

console.log(userDataPromise);

userDataPromise.then(function onSuccess(userData) {
    console.log(userData);
});

/*
 * подпишитесь на успешное выполнение промиса userDataPromise
 * используйте метод .then
 * в обработчике промиса (ф-ция внутри .then() ) выведите в консоль строку 'My name is Tom. I am 17 years old'
 * Tom и 17 достаньте с данных, которые приходят в ф-цию onSuccess
 */

userDataPromise.then(function onSuccess(userData) {
    /* ...code here */
    console.log(`My name is ${userData.name}. I am ${userData.age} years old`);
});