const wallet = {
    transactions: [90, 87, 121, 60, 99, -10, 130],
    getMax() {
        return Math.max(...this.transactions);
    },
    getMin() {
        return Math.min(...this.transactions);
    },
};

console.log(wallet.getMax());
console.log(wallet.getMin());