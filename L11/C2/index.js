const sortContacts = (contacts, arrangement) => {
    if (!Array.isArray(contacts)) return null;
    const res = contacts.sort((a, b) => {
        if (arrangement == false) {
            return b.name.localCompare(a.name);
        }
        return a.name.localCompare(b.name);
    });
    return res;
};