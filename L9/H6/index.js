function addPropertyV1(obj, key, value) {
    obj[key] = value;
    return obj;
}

function addPropertyV2(obj, key, value) {
    Object.assign(obj, {
        [key]: value });
    return obj;
}

function addPropertyV3(obj, key, value) {
    const newObj = {...obj };
    Object.assign(newObj, {
        [key]: value });
    return newObj;
}

function addPropertyV4(obj, key, value) {
    return {...obj, [key]: value };
}
// examples
const transaction = {
    value: 170,
};
addPropertyV1(transaction, "currency", "USD"); // ==> { value: 170, currency: 'USD' }