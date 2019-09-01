const chalk = require('chalk');
class Analyzer {
    constructor(file) {
        this.clientQuantity = 0;
        this.salesmenQuantity = 0;
        this.mostExpensiveSale = null;
        this.worstSalesman = '';
        this.file = file;
        this.sortedSales = [];
    }

    analyzeClientQuantity = (clients = []) => {
        console.log(chalk.bold.magenta('Analyzing clients...'));
        this.clientQuantity = clients.length;
    }

    analyzeSalesmenQuantity = (salesmen = []) => {
        console.log(chalk.bold.magenta('Analyzing salesmen...'));
        this.salesmenQuantity = salesmen.length;
    }

    analyzeMostExpensiveSale = (sales = []) => {
        console.log(chalk.bold.magenta('Analyzing most expensive sale...'));
        var unsortedSales = [];
        sales.forEach(sale => {
            unsortedSales.push({
                ...sale,
                totalValue: sale.getSaleTotalPrice()
            })
        });
        this.sortedSales = this.sortSales(unsortedSales);
        this.mostExpensiveSale = this.sortedSales[0];
    }

    analyzeWorstSalesman = (sales) => {
        console.log(chalk.bold.magenta('Analyzing worst salesman...'));
        this.worstSalesman = this.sortedSales[this.sortedSales.length - 1].salesman;
    }

    printAnalysisResults() {
        const line_1 = `------- ${this.file} -------`;
        const line_2 = `Quantity of clients: ${this.clientQuantity}`
        const line_3 = `Quantity of salesmen: ${this.salesmenQuantity}`
        const line_4 = `Most Expensive Sale: saleId ${this.mostExpensiveSale.id}`
        const line_5 = `Worst Salesman: ${this.worstSalesman}`

        return `${line_1}\n${line_2}\n${line_3}\n${line_4}\n${line_5}\n`
    }

    sortSales(array) {
        return array.sort(this.compareValue);
    }
    compareValue = (saleA, saleB) => {
        if(saleA.totalValue < saleB.totalValue) {
            return 1;
        }else if(saleA.totalValue > saleB.totalValue) {
            return -1;
        }else {
            return 0;
        }
    }
}

module.exports = {
    Analyzer: Analyzer
}