const uuid = require('uuid');
const Credential = require('./credential');
const DatabaseMongoose = require('../repository/DB');
const Helper = require('./Helper');
const DB = new DatabaseMongoose()

class Admin{
    constructor(role,firstName,lastName,DOB,age,credential,phone,email,state,country,address,city){
        this.adminId = uuid.v4()
        this.role = role
        this.firstName = firstName
        this.lastName = lastName
        this.credential = credential
        this.DOB = DOB
        this.age = age
        this.city = city
        this.state = state
        this.country = country
        this.phone = phone
        this.email = email
        this.address = address
        this.isActive = true
        this.commissionWithdrawalRequests=[]
    }

    static async createAdmin(role,firstName,lastName,DOB,age,userName,password,phone,email,state,country,address,city){
       console.log(role,firstName,lastName,DOB,age,userName,password,phone,email,state,country,address,city);
        const newCredentialRecord = await Credential.createCredential(userName,password)
        console.log(newCredentialRecord + "jjeee");
        const newAdmin = new Admin(role,firstName,lastName,DOB,age,newCredentialRecord._id,phone,email,state,country,address,city)
        console.log(newAdmin + "fdg");
        const newAdminRecord = await DB.createAdmin(newAdmin)
        console.log(newAdminRecord);
        return newAdminRecord
    }
    
    static async getAllAdmins(){
        const AllAdminRecord = await DB.getAllAdmins()
        return AllAdminRecord
    }
    static async getOneAdmin(userName){
        const AllAdminRecord = await DB.findUserInCollection(userName)
        return AllAdminRecord
    }
    static async updateOneAdmin(adminObjectId,property,value){
        const OneAdminRecord = await DB.updateAdmin(adminObjectId,property,value)
        return OneAdminRecord
    }
    static async updateAdminPush(adminObjectId,property,value){
        console.log(adminObjectId,property,value);
        const OneAdminRecord = await DB.updateAdminPush(adminObjectId,property,value)
        return OneAdminRecord
    }
    static async changePassword(userName,oldPassword,newPassword,confirmPassword){
        const user  = await DB.findUserInCollection(userName)
        const credentialObjectId = user.credential._id
        console.log(credentialObjectId + "credentialObjectId");
        const  hashedconfirmPassword = await Helper.getHashPassword(confirmPassword)
        const OneAdminRecord = await DB.changePassword(credentialObjectId,hashedconfirmPassword)
        return OneAdminRecord
    }
}

module.exports = Admin