class Analyzer {
    constructor() {
        this.clientQuantity = 0;
        this.salesmenQuantity = 0;
        this.idMostExpensiveSale = 0;
        this.worstSalesman = '';
    }

    analyzeClientQuantity = (clients = []) => {
        console.log('Analyzing clients...');
        this.clientQuantity = clients.length;
    }

    analyzeSalesmenQuantity = (salesmen = []) => {
        console.log('Analyzing salesmen...');
        this.salesmenQuantity = salesmen.length;
    }

    analyzeMostExpensiveSale = (sales) => {
        console.log('Analyzing most expensive sale...');
        var totalSales = [];
        sales.forEach(sale => {
            totalSales.push({
                saleId: sale.getId(),
                totalValue: sale.getSaleTotalPrice()
            })
        });
        console.log(totalSales);
        totalSales.sort(this.compareValue);
        console.log(totalSales);
    }

    analyzeWorstSalesman = (sales) => {
        console.log('Analyzing worst salesman...');

    }

    getResultados = () => {

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