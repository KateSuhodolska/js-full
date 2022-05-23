const sortContacts = (contacts, sort = true) => {
    if (Array.isArray(contacts)) {
        const result = contacts.sort((a, b) => {
            if ((sort = true)) {
                return a.name.localeCompare(b.name);
            }
            return b.name.localeCompare(a.name);
        });

        return result;
    }
    return null;
};

console.log(
    sortContacts(
        [{
                name: "Kate",
                phoneNumber: "777-77-77",
            },
            {
                name: "John",
                phoneNumber: "333-33-33",
            },
            {
                name: "Ann",
                phoneNumber: "444-44-44",
            },
            {
                name: "Tom",
                phoneNumber: "555-55-55",
            },

            {
                name: "Adel",
                phoneNumber: "111-11-11",
            },
        ],
        true
    )
);
console.log(sortContacts("Tom", "Anna"));