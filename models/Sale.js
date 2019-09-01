module.exports = class Sale {
    constructor(id, items = [], salesman) {
        this.id = id;
        this.items = items;
        this.salesman = salesman;
    };

    getId() {
        return this.id;
    }

    getItems(){
        return this.items
    }

    getSaleTotalPrice() {
        let totalPrice = 0;
        this.getItems().forEach(item => {
            console.log(item)
            totalPrice += item.price * item.itemQuantity;
        })
        return totalPrice;
    }

    getSalesman() {
        return this.salesman;
    }

    toString() {
        let itemsString = ''
        this.getItems().forEach(item => {
            itemsString += item.toString();
        })
        return `id Venda: ${this.getId()}, salesman: ${this.getSalesman()},
        items : ${itemsString}`
    }

  
     
}
