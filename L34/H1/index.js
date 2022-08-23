const url = "https://62f900f53eab3503d1decd9d.mockapi.io/api/v1/users";

export const getUsersList = () =>
    fetch(url).then((response) => response.json());

export function getUserById(userId) {
    return fetch(`${url}/${userId}`).then((response) => response.json());
}

export function createUser(userData) {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(userData),
    });
}

export function deleteUser(userId) {
    return fetch(`${url}/${userId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
}
const updatedUserData = {
    email: "new@email.com",
    firstName: "John",
    lastName: "Doe",
    age: 17,
};

export function updateUser(userId, userData) {
    return fetch(`${url}/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(userData),
    });
}

// updateUser("5", updatedUserData).then(() => {
//     console.log("User updated");
// });
// // examples
// getUsersList().then((users) => {
//     console.log(users); // array of the user objects [{'id':'1', 'firstName':'Grayce' ... }, {'id':'2', 'firstName':'Ara' ... }, ...]
// });

// getUserById("6").then((userData) => {
//     console.log(userData); // {'id':'2', 'firstName':'Ara' ... }
// });

const newUserData = {
    email: "cool@email.com",
    firstName: "Iron",
    lastName: "Man",
    age: 42,
};

// createUser(newUserData).then(() => {
//     console.log("User created");
// });

deleteUser("1").then(() => {
    console.log("User deleted");
});