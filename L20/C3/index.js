export class Order {
    constructor(price, city, type) {
        (this.price = price),
        (this.city = city),
        (this.type = type),
        (this.id = Math.random().toString()),
        (this.isConfirmed = false);
        this.dateCreated = new Date();
    }
    checkPrice() {
        return this.price > 1000 ? true : false;
    }
    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }
    isValidType() {
        if (this.type === "Buy" || this.type === "Sell") return true;
        return false;
    }
}