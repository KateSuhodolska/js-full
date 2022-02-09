function compareObjects(obj1, obj2) {
    const firstKeysArr = Object.keys(obj1);
    const secondKeysArr = Object.keys(obj2);
    if (firstKeysArr.length !== secondKeysArr.length) return false;
    for (let i = 0; i < firstKeysArr.length; i++) {
        if (obj1[firstKeysArr[i]] !== obj2[firstKeysArr[i]]) return false;
    }
    return true;
}