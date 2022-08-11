const pinger = (count, period) => {
    console.log("Ping");
    let i = count;
    const interval = setInterval(() => {
        // eslint-disable-next-line no-plusplus
        if (--i > 0) {
            console.log("Ping");
        } else {
            clearInterval(interval);
        }
    }, period);
};

// examples
pinger(5, 5000); // makes 5 writes with 100 ms interval