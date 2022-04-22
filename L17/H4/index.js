const user = {
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(fullName) {
        return fullName
            .split(" ")
            .map((el) => (el.firstName = el[0]), (el.lastName = el[1]));
    },
};

user.setFullName("John Andriy");
console.log(user);
console.log(user.getFullName());