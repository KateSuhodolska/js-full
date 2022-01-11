function getKeys(obj) {
    for (let key in obj) {
        console.log(key);
    }
}
(getKeys({ name: "John Doe", age: 17, interest: "football" });