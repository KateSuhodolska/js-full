export const fetchUserData = (userName) =>
    fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .catch((err) => alert(err));

export const fetchRepo = (url) =>
    fetch(url)
    .then((response) => response.json())
    .catch((err) => alert(err));