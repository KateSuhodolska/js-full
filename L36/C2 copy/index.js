import { fetchUserData, fetchRepo } from "./gateways.js";
import { cleanRepo, renderRepos } from "./repos.js";
import { hideSpinner, showSpinner } from "./spinner.js";
import { renderUserData } from "./user.js";

const defaultUser = {
    avatar_url: "https://avatars3.githubusercontent.com/u10001",
    name: "",
    location: "",
};
renderUserData(defaultUser);

const showUserBtnElem = document.querySelector(".name-form__btn");
const userNameInputElem = document.querySelector(".name-form__input");

const onSearchUser = async() => {
    showSpinner();
    cleanRepo();
    const userName = userNameInputElem.value;
    try {
        const userData = await fetchUserData(userName);
        renderUserData(userData);
        const reposList = await fetchRepo(userData.repos_url);
        renderRepos(reposList);
    } catch (error) {
        alert(error.message);
    } finally {
        hideSpinner();
    }
};

showUserBtnElem.addEventListener("click", onSearchUser);