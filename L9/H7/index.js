function buildObject(keysList, valuesList) {
    const res = {};
    for (let i = 0; i < keysList.length; i++) {
        res[keysList[i]] = valuesList[i];
    }
    return res;
}

// examples
const keys = ["name", "address", "age"];
const values = ["Bob", "Ukraine", 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }