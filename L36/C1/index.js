const url = "https://api.github.com/users";

const fetchUser = async(userId) => {
    try {
        const response = await fetch(`${url}/${userId}`);
        if (!response.ok) {
            return null;
        }
        const userData = await response.json();
        return userData;
    } catch (error) {
        throw new Error("Failed to get user data");
    }
};