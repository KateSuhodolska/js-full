const reverseArray = (arr) => {
    if (!Array.isArray(arr)) return null;
    const resArr = [...arr];
    return resArr.reverse();
};