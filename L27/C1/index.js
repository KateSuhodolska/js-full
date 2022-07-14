localStorage.setItem("name", JSON.stringify("Tom"));
localStorage.setItem("age", JSON.stringify(18));
localStorage.setItem("hobbies", JSON.stringify("football"));

const getLocalStorageData = () => {
    return Object.entries(localStorage).reduce((acc, [key, value]) => {
        let newValue;
        try {
            newValue = JSON.parse(value);
        } catch (e) {
            newValue = value;
        }
        return {
            ...acc,
            [key]: newValue,
        };
    }, {});
};

console.log(getLocalStorageData());