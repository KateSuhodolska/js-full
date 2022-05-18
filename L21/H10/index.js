const mangeClasses = () => {
    const firstListItem = document.querySelector(".one");
    firstListItem.classList.add("selected");

    const secondListItem = document.querySelector(".two");
    secondListItem.classList.remove("selected");

    const thirdListItem = document.querySelector(".three");
    thirdListItem.classList.toggle("three_done");

    const fourListItem = document.querySelector(".four");
    if (fourListItem.classList.contains("some-class")) {
        fourListItem.classList.add("another-class");
    }
};

mangeClasses();