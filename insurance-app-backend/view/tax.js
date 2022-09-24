const DatabaseMongoose = require("../repository/DB")
const DB = new DatabaseMongoose()
class Tax{
    constructor(tax){
        this.tax = tax
    }
    static async createTax(tax){
        const newTax = new Tax(tax)
        const newTaxRecord   = DB.createTax(tax)
        return newTaxRecord
    }

    static async getTax(){
        const newTaxRecord   = DB.getTax()
        return newTaxRecord
    }

    static async updateTax(tax){
        const newTaxRecord   = DB.updateTax(tax)
        return newTaxRecord
    }

}
module.exports = Tax