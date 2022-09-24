const DatabaseMongoose = require("../repository/DB")
const DB = new DatabaseMongoose()
const bcrypt = require('bcrypt')
class Helper{
    constructor(){

    }

    static async findCustomerInCollection(userName){
        const newUserRecord = await DB.findUserInCollection(userName)
        console.log(newUserRecord +"kk");
        return newUserRecord
    }
    static async getHashPassword(password){
        return bcrypt.hash(password,10);
    }

}

module.exports = Helper