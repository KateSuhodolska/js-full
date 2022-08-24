export const fetchUserData = async(userName) => {
    try {
        const response = await fetch(`https://api.github.com/users/${userName}`);
        return response.json();
    } catch (error) {
        throw new Error("Failed to load data");
    }
};

export const fetchRepo = async(url) => {
    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        throw new Error("Failed to load data");
    }
};