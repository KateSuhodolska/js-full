const createMessage = () => {
    let message = "Just learn it";
    let sender = "Gromcode";

    const sendMessage = (name) => {
        console.log(`${name}, ${message}! Your ${sender}`);
    };

    const setMessage = (text) => {
        message = text;
    };

    const setSender = (send) => {
        sender = send;
    };

    return {
        sendMessage,
        setMessage,
        setSender,
    };
};

export default createMessage;