const getSection = (num) => {
    const spanWithCorrectNum = document.querySelector(
        `span[data-number="${num}"]`
    );

    const parentEl = spanWithCorrectNum.parentNode;
    return parentEl.getAttribute("data-section");
};

console.log(getSection(2));
getSection(4);
getSection(6);