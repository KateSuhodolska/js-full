const getOwnProps = (obj) =>
    Object.keys(obj).filter((el) => typeof obj[el] !== "function");