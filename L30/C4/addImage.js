export const addImage = (url, callback) => {
    const img = document.createElement("img");
    img.setAttribute("alt", "User avatar");
    img.src = url;

    const pageElem = document.querySelector(".page");
    pageElem.append(img);

    const onImageLoaded = () => {
        const { width, height } = img;
        return { width, height };
    };

    img.addEventListener("load", onImageLoaded);

    img.addEventListener("error", () => new Error("Image load failed"));
};