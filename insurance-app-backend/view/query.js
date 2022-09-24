const DatabaseMongoose = require("../repository/DB")
const DB = new DatabaseMongoose()
const uuid = require('uuid');
class Query{
    constructor(role,userName,message){
        this.role = role
        this.userName = userName
        this.message = message
        this.isActive = true
    }

    static async createQuery(role,userName,message){
        const newQuery =  new Query(role,userName,message) 
        const newQueryRecord = await DB.createQuery(newQuery)
        return newQueryRecord
    }

    
    static async getAllQueries(){
        const newQueryRecord = await DB.getAllQueries()
        return newQueryRecord
    }
}


module.exports = Query