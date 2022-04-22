const event = {
    message: "Welcome to the party!",
    guests: [
        { name: "John", age: 18, email: "j@gmail.com" },
        { name: "Tom", age: 19, email: "t@gmail.com" },
        { name: "Bob", age: 17, email: "b@gmail.com" },
    ],
    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) => ({
                email,
                message: `Dear ${name}! ${this.message} `,
            }));
    },
};

console.log(event.getInvitations());