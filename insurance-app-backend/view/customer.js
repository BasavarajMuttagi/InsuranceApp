const uuid = require('uuid');
const DatabaseMongoose = require('../repository/DB');
const Credential = require('./credential');
const Helper = require('./Helper');
const DB = new DatabaseMongoose()


class Customer{
    constructor(agentUserName,role,firstName,lastName,DOB,age,credential,phone,email,state,country,address,city){
        this.agentUserName = agentUserName
        this.customerId = uuid.v4()
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
        this.policies = []
        this.documents = []
        this.isActive = true
        this.transactions = []
    }




    static async createCustomer(agentUserName,role,firstName,lastName,DOB,age,userName,password,phone,email,state,country,address,city){
        const newCredentialRecord = await Credential.createCredential(userName,password)
        console.log(newCredentialRecord);
        const newCustomer = new Customer(agentUserName,role,firstName,lastName,DOB,age,newCredentialRecord._id,phone,email,state,country,address,city)
        const newCustomerRecord = await DB.createCustomer(newCustomer)
        return newCustomerRecord
    }
    static async getAllCustomers(){
        const AllCustomersRecord = await DB.getAllCustomers()
        return AllCustomersRecord
    }
    static async getOneCustomer(userName){
        const currentUser = await DB.findUserInCollection(userName)
        return currentUser
    }
    static async UpdateOneCustomer(userName,property,value){
        const currentUser = await DB.findUserInCollection(userName)
        const updateRecord = await DB.updateCustomer(currentUser._id,property,value)
        return updateRecord
    }

    static async UpdateOneCustomerPayment(userName,property,value){
        // const currentUser = await DB.findUserInCollection(userName)
        const updateRecord = await DB.pushPayment(userName,property,value)
        return updateRecord
    }
    static async UpdateOneCustomerPolicy(userName,property,value){
        console.log(userName,property,value);
        const currentUser = await DB.findUserInCollection(userName)
        const updateRecord = await DB.pushPolicy(currentUser._id,property,value)
        return updateRecord
    }
    
    static async toggleSwitchCustomer(customerObjectId,currentState){
        const CustomersRecord  = await DB.toggleSwitchCustomer(customerObjectId,currentState)
        return CustomersRecord 
    }
    static async changePassword(userName,oldPassword,newPassword,confirmPassword){
        const user  = await DB.findUserInCollection(userName)
        const credentialObjectId = user.credential._id
        console.log(credentialObjectId + "credentialObjectId");
        const  hashedconfirmPassword = await Helper.getHashPassword(confirmPassword)
        const OneCustomerRecord = await DB.changePassword(credentialObjectId,hashedconfirmPassword)
        return OneCustomerRecord
    }
    
}

module.exports = Customer