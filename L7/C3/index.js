const flatArray = (arr) =>
    arr
    .reduce((acc, el) => {
        return acc.concat(el);
    }, [])
    .sort((a, b) => a - b);