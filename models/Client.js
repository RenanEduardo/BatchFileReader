module.exports = class Client {
    constructor(cnpj, nome, businessArea) {
        this.cnpj = cnpj;
        this.nome = nome;
        this.businessArea = businessArea;
    };

    getCNPJ = () => {
        return this.cnpj;
    }

    getName = () => {
        return this.nome
    }

    getBusinessArea = () => {
        return this.businessArea;
    }

    toString = () => {
        return `Nome: ${this.getName()}, CNPJ: ${this.getCNPJ()}, Area de Atuação: ${this.getBusinessArea()}` 
    }
     
}
