const DatabaseMongoose = require("../repository/DB")
const DB = new DatabaseMongoose()

class City{
    constructor(city){
        this.city = city
        this.isActive = true
    }

    static async createCity(city){
        const newcity = new City(city)
        const newcityRecord = await DB.createCity(newcity)
        return newcityRecord
    }

    static async addCityToState(stateObjectId,cityObjectId){
        const newAddCityToState = await DB.addCityToState(stateObjectId,cityObjectId)
        return newAddCityToState
    }

    static async getAllCities(){
        const record = await DB.getAllCities()
        return record
    }

    static async findOneCity(city){
        const record = await DB.findOneCity(city)
        return record
    }
}

module.exports = City