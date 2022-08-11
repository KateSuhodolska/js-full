const addImage = (url, callback) => {
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

const addImageV2 = (url) => {
    // put your code here
    const p = new Promise((resolve) => {
        resolve(addImage(url));
    });
    return p;
};

// examples

addImageV2("https://server.com/image.png")
    .then((data) => console.log(data)) // ==> { width: 200, height: 100 }
    .catch((error) => console.log(error)); // ==> 'Image load failed'