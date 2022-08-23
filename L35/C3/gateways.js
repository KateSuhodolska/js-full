export const fetchUserData = (userName) =>
    fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .catch(() => alert("Failed to load data"));

export const fetchRepo = (url) =>
    fetch(url)
    .then((response) => response.json())
    .catch(() => alert("Failed to load data"));