const Salesman = require("../models/Salesman");
const Clients = require("../models/Client");
const Sale = require("../models/Sale");
const Item = require("../models/Item");
const Analyzer = require('./Analyzer').Analyzer;


const SALESMAN = "001";
const CLIENT = "002";
const SALE = "003";

class Interpreter {
  constructor() {
    this.salesmen = [];
    this.clients = [];
    this.sales = [];
    this.currentFile = null;
    this.analyzer = new Analyzer();
  }

  createSalesman = (cpf, nome, salario = 0) => {
    return new Salesman(cpf, nome, salario);
  };

  createSalesmanFromData = data => {
    this.salesmen.push(this.createSalesman(data[1], data[2], data[3]));
  };

  createClient = (cnpj, nome, areaAtuacao = 0) => {
    return new Clients(cnpj, nome, areaAtuacao);
  };

  createClientsFromData = data => {
    this.clients.push(this.createClient(data[1], data[2], data[3]));
  };

  createItem = itemData => {
    const formattedItem = itemData.split('-');
    return new Item(formattedItem[0], formattedItem[1], formattedItem[2]);
  };

  createSale = (id, items, vendedor) => {
      return new Sale(id, items, vendedor);
  };

  createSaleFromData = data => {
    let itemsData = data[2].substring(1,data[2].length - 1).split(',');
    let items = [];
    itemsData.forEach(itemData => {
        items.push(this.createItem(itemData));
    })
    
    this.sales.push(this.createSale(data[1],items, data[3]));

  };

  processFile = (file,lines) => {
    this.currentFile = file;
    lines.forEach(line => {
      this.processLine(line);
    });

    this.analyzer.analyzeMostExpensiveSale(this.sales);
  };

  processLine = line => {
    const data = line.split("ç");
    const type = data[0];
    switch (type) {
      case SALESMAN:
        
        this.createSalesmanFromData(data);
        break;
      case CLIENT:
        this.createClientsFromData(data);
        break;
      case SALE:
          this.createSaleFromData(data);
        break;
      default:
        console.log("ENTRY NOT VALID");
    }
  };
}

module.exports = {
  Interpreter: Interpreter
};
