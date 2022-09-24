const DatabaseMongoose = require("../repository/DB")
const DB = new DatabaseMongoose()

class Country{
    constructor(country){
        this.country = country
        this.states = []
        this.isActive = true
    }

  static async createCountry(country){
        const newCountry = new Country(country)
        const newCountryRecord = await DB.createCountry(newCountry)
        return newCountryRecord
    }

    static async getAllCountries(){
        const newCountryRecord = await DB.getAllCountries()
        return newCountryRecord
    }
    static async getOneCountry(countryObjectId){
        const newCountryRecord = await DB.getOneCountry(countryObjectId)
        return newCountryRecord
    }

    static async findOneCountry(country){
        const record = await DB.findOneCountry(country)
        return record
    }
}

module.exports = Country