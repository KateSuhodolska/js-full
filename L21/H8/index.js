const finishList = () => {
    const numberList = document.querySelector(".list");
    const item = document.querySelector(".special");
    const newItem = (num) => {
        const listItem = document.createElement("li");
        listItem.textContent = num;
        return listItem;
    };

    numberList.prepend(newItem("1"));
    item.before(newItem("4"));
    item.before(newItem("6"));
    numberList.append(newItem("8"));
};

finishList();