class Analyzer {
    constructor(file) {
        this.clientQuantity = 0;
        this.salesmenQuantity = 0;
        this.mostExpensiveSale = null;
        this.worstSalesman = '';
        this.file = file;
    }

    analyzeClientQuantity = (clients = []) => {
        console.log('Analyzing clients...');
        this.clientQuantity = clients.length;
    }

    analyzeSalesmenQuantity = (salesmen = []) => {
        console.log('Analyzing salesmen...');
        this.salesmenQuantity = salesmen.length;
    }

    analyzeMostExpensiveSale = (sales = []) => {
        console.log('Analyzing most expensive sale...');
        var unsortedSales = [];
        sales.forEach(sale => {
            unsortedSales.push({
                ...sale,
                totalValue: sale.getSaleTotalPrice()
            })
        });
        var sortedSales = this.sortSales(unsortedSales);
        this.mostExpensiveSale = sortedSales[0];
        console.log(this.mostExpensiveSale);
    }

    analyzeWorstSalesman = (sales) => {
        console.log('Analyzing worst salesman...');
        var sortedSales = this.sortSales(sales);
        this.worstSalesman = sortedSales[sortedSales.length - 1].salesman;
        console.log(this.worstSalesman)
    }

    printAnalysisResults() {
        return (`
        ------- ${this.file} -------
        Quantity of clients: ${this.clientQuantity}
        Quantity of salesmen: ${this.salesmenQuantity}
        Most Expensive Sale: saleId ${this.mostExpensiveSale.id} 
        Worst Salesman: ${this.worstSalesman}
        `)
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