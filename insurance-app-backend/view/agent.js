const uuid = require('uuid');
const Credential = require('./credential');
const DatabaseMongoose = require('../repository/DB');
const DB = new DatabaseMongoose()

class Agent{
    constructor(role,firstName,lastName,DOB,age,credential,phone,email,state,country,address,city){
        this.agentId = uuid.v4()
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
        this.transactions = []
    }

    static async createAgent(role,firstName,lastName,DOB,age,userName,password,phone,email,state,country,address,city){
        const newCredentialRecord = await Credential.createCredential(userName,password)
        const newAgent = new Agent(role,firstName,lastName,DOB,age,newCredentialRecord._id,phone,email,state,country,address,city)
        const newAgentRecord = await DB.createAgent(newAgent)
        return newAgentRecord
    }
    
    static async getAllAgents(){
        const AllAgentRecord = await DB.getAllAgents()
        return AllAgentRecord
    }
    static async getOneAgent(agentObjectId){
        const oneAgentRecord = await DB.getOneAgent(agentObjectId)
        return oneAgentRecord
    }
    static async updateOneAgent(agentObjectId,property,value){
        const oneAgentRecord = await DB.updateAgent(agentObjectId,property,value)
        return oneAgentRecord
    }
    static async getOneAgentUsingUserName(userName){
        const currentUser = await DB.findUserInCollection(userName)
        const oneAgentRecord = await DB.getOneAgent(currentUser._id)
        return oneAgentRecord
    }
    static async updateOneAgentUsingUserName(userName,property,value){
        const currentUser = await DB.findUserInCollection(userName)
        const oneAgentRecord = await DB.updateAgent(currentUser._id,property,value)
        return oneAgentRecord
    }
    static async updateOneAgentPushPayment(userName,property,value){
        console.log(userName,property,value);
        const currentUser = await DB.findUserInCollection(userName)
        console.log("yes bro " + currentUser);
        const oneAgentRecord = await DB.updateAgentPushPayment(currentUser._id,property,value)
        return oneAgentRecord
    }


}

module.exports = Agent