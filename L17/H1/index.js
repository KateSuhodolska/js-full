// const student = {
//     name: "Tom",
// };

// function sayName() {
//     console.log(this.name);
// }

// sayName.call(student, "name");

// sayName.call({ name: "Bruce" });

const company = {
    companyName: "Microsoft",
};

function greeting(firstName, lastName) {
    console.log(
        `Hello, ${firstName} ${lastName}. Welcome to the ${this.companyName.bind(company)}`
    );
}

greeting.call(company, { "Bob" }, { "Marley" },
    "companyName");