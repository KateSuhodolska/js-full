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

const onSearchUser = () => {
    showSpinner();
    cleanRepo();
    const userName = userNameInputElem.value;
    fetchUserData(userName)
        .then((userData) => {
            renderUserData(userData);
            return userData.repos_url;
        })
        .then((url) => fetchRepo(url))
        .then((data) => renderRepos(data))
        .catch((err) => {
            hideSpinner();
            alert(err);
        })
        .finally(() => hideSpinner());
};

showUserBtnElem.addEventListener("click", onSearchUser);