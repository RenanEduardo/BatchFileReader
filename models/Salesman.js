module.exports = class Salesman {
    constructor(cpf, name, salary) {
        this.cpf = cpf;
        this.name = name;
        this.salary = salary;
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

    toString() {
        return `Name: ${this.getName()}, CPF: ${this.getCPF()}, Salary: ${this.getSalary()}` 
    }
     
}
