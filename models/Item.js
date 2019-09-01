module.exports = class Item {
    constructor(itemId, itemQuantity, price) {
        this.itemId = itemId;
        this.itemQuantity = itemQuantity;
        this.price = price;
    }

    toString = () => {
        return `
        ${this.itemId} | ${this.itemQuantity} | ${this.price}
        `
    }
}