const generateNumbers = (from, to) => {
    const arr = [];

    for (let i = from; i <= to; i++) {
        arr.push(i);
    }

    return arr;
};

const getSectorSeats = () =>
    generateNumbers(1, 10)
    .map(
        (seatNum) =>
        `<div class="sector__seat" data-seat-number="${seatNum}"></div>`
    )
    .join("");

const getSectorLines = () =>
    generateNumbers(1, 10)
    .map(
        (lineNum) =>
        `<div class="sector__line" data-line-number="${lineNum}">${getSectorSeats()}</div>`
    )
    .join("");

const arenaEl = document.querySelector(".arena");

const renderArena = () => {
    const sectors = generateNumbers(1, 3)
        .map(
            (sectorNum) =>
            `<div class="sector" data-sector-number="${sectorNum}">${getSectorLines()}</div>`
        )
        .join("");
    arenaEl.innerHTML = sectors;
};

const onSeatSelect = (event) => {
    const isSeat = event.target.classList.contains("sector__seat");

    if (!isSeat) {
        return;
    }

    const seatNum = event.target.dataset.seatNumber;
    const lineNum = event.target.closest(".sector__line").dataset.lineNumber;
    const sectorNum = event.target.closest(".sector").dataset.sectorNumber;

    const selectedSeatEl = document.querySelector(".board__selected-seat");
    selectedSeatEl.textContent = `S ${sectorNum} - L ${lineNum} - S ${seatNum}`;
};

arenaEl.addEventListener("click", onSeatSelect);
renderArena();