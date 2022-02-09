function addPropertyV1(userData, userId) {
    userData.id = userId;
    return userData;
}

// put your code here
function addPropertyV2(userData, userId) {
    Object.assign(userData, { id: userId });
    return userData;
}

// put your code here
function addPropertyV3(userData, userId) {
    const copyObj = Object.assign({}, userData);
    Object.assign(copyObj, { id: userId });
    return copyObj;
}

// put your code here

function addPropertyV4(userData, userId) {
    const newObj = {...userData };
    Object.assign(newObj, { id: userId });
    return newObj;
}

// examples
const user = {
    name: "Sam",
};