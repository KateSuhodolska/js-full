const callbackPrompt = {
    message: "Tell your number",
    showPrompt() {
        const promptNumber = prompt(this.message);
        console.log(promptNumber);
    },
    showDeferredPrompt(ms) {
        setTimeout(this.showPrompt.bind(this), ms);
    },
};

console.log(callbackPrompt.showDeferredPrompt(1000));