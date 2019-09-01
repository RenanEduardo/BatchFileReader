module.exports = class Salesman {
    constructor(cpf, name, salary) {
        this.cpf = cpf;
        this.name = name;
        this.salary = salary;
        this.sales = [];
        this.totalSales = 0;
    };

    getCPF() {
        return this.cpf;
    }

    getName(){
        return this.name
    }

    getSalary() {
        return this.salary;
    }

    getSales() {
        return this.sales;
    }

    getTotalSales() {
        this.calculateTotalSales();
        return this.totalSales;
    }

    calculateTotalSales() {
        this.totalSales = 0;
        this.sales.forEach(sale => {
            this.totalSales += sale.getSaleTotalPrice();
        })

    }

    toString() {
        return `Name: ${this.getName()}, CPF: ${this.getCPF()}, Salary: ${this.getSalary()}` 
    }
     
}
