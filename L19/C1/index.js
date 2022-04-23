const vehicle = {
    name: "Argo",
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};

const ship = {
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        this.move();
    },
    stopMachine() {
        this.stop();
        console.log(`${this.name} lifting anchor down`);
    },
};

Object.setPrototypeOf(ship, vehicle);
ship.stopMachine();

const getOwnProps = (obj) => {
    let arr = Object.entries(obj);
    return arr.map((el) => el.filter((el) => el[1] != "function"));
};

console.log(getOwnProps(ship));