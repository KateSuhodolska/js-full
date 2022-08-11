const addImage = (imgSrc, callback) => {
    const page = document.querySelector(".page");
    const imgEl = document.createElement("img");
    imgEl.setAttribute("alt", "My photo");
    imgEl.src = imgSrc;
    page.append(imgEl);

    const onImageLoaded = () => {
        const { width, height } = imgEl;
        callback(null, { width, height });
    };

    imgEl.addEventListener("load", onImageLoaded);
    imgEl.addEventListener("error", () => callback("Image load is failed"));
};

// callack function
const onImageLoaded = (error, imgElem) => {
    if (error) {
        console.log(error);
        return;
    }

    const { width, height } = imgElem;
    const sizeElem = document.querySelector(".image-size");

    sizeElem.textContent = `${width} x ${height}`;
};

// examples
addImage(
    "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
    onImageLoaded
);