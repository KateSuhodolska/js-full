const delay = (time) =>
    new Promise((resolve) => {
        setInterval(() => {
            resolve();
        }, time);
    });
delay(3000).then(() => console.log("Done"));