rooms = {
    room1: [
        { name: 'Jack' },
        { name: 'Andrey' },
        { name: 'Ann' },
        { name: 'Vasyl' },
        ...
    ],
    room2: [
        { name: 'Dan' },
        ...
    ],
    room3: [
        { name: 'Denis' },
        { name: 'Max' },
        { name: 'Alex' },
        ...
    ],
    ...
};


const getPeople = (obj) => {
    return Object.values(obj);
};

const peopleInTheRoom = room1 => {
    room1.reduce((acc, el) => {
        return acc.concat(el)
    });
}

console.log(getPeople(rooms))