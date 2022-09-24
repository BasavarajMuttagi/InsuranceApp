const uuid = require('uuid');
const bcrypt = require('bcrypt');
const DatabaseMongoose = require('../repository/DB');
const DB = new DatabaseMongoose()
class Credential{
    constructor(userName,password) {
        this.credentialId = uuid.v4()
        this.userName = userName
        this.password = password
    }

    async getHashPassword(){
        return bcrypt.hash(this.password,10);
    }

    static async createCredential(userName,password){
        const  newcredential = new Credential(userName,password)
        newcredential.password = await newcredential.getHashPassword()
        const  newcredentialRecord = await DB.createCredential(newcredential)
        return newcredentialRecord
   }
}


module.exports = Credential