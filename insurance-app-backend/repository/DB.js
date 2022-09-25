const  mongoose  = require("mongoose")
const AdminModel = require("../model/Admin")
const AgentModel = require("../model/Agents")
const CityModel = require("../model/City")
const CountryModel = require("../model/Countries")
const CredentialModel = require("../model/Credentials")
const CustomerModel = require("../model/Customers")
const EmployeeModel = require("../model/Employees")
const PlanModel = require("../model/Plans")
const PlanTypeModel = require("../model/PlanType")
const PolicyModel = require("../model/Policy")
const QueryModel = require("../model/Queries")
const RoleModel = require("../model/Role")
const StateModel = require("../model/States")
const TaxModel = require("../model/Tax")
const TransactionModel = require("../model/Transaction")




class DatabaseMongoose {
    constructor() {
        this._connect()
    }
    _connect() {
        mongoose.connect("mongodb://127.0.0.1:27017/InsuranceApp")
            .then(() => {
                console.log('Database connection successful')
            })
            .catch(err => {
                console.error(err)
            })
    }


    async createCredential(credentialObject){
        try{
            const newRecord = await CredentialModel.create(credentialObject)
            return newRecord
        }
        catch (error) {
            return false
        }
    }

    async createCustomer(customerObject){
        try{

            const newRecord = await CustomerModel.create(customerObject)
            return newRecord

        } catch (error) {
            return error
        }
    }

    async createCountry(countryObject){
        try{

            const newRecord = await CountryModel.create(countryObject)
            return newRecord

        } catch (error) {
            return error
        }
    }

    async createState(stateObject){
        try{

            const newRecord = await StateModel.create(stateObject)
            return newRecord

        } catch (error) {
            return error
        }
    }

    async createAdmin(adminObject){
        try{

            const newRecord = await AdminModel.create(adminObject)
            return newRecord

        } catch (error) {
            return error
        }
    }

    async createAgent(agentObject){
        try{

            const newRecord = await AgentModel.create(agentObject)
            return newRecord

        } catch (error) {
            return error
        }
    }

    async createEmployee(employeeObject){
        try{

            const newRecord = await EmployeeModel.create(employeeObject)
            return newRecord

        } catch (error) {
            return error
        }
    }
    async createPlan(planObject){
        try{
            console.log(planObject);
            const newRecord = await PlanModel.create(planObject)
            return newRecord

        } catch (error) {
            return error
        }
    }

    async createPoilcy(poilcyObject){
        try{
            console.log(poilcyObject);
            const newRecord = await PolicyModel.create(poilcyObject)
            return newRecord

        } catch (error) {
            return error
        }
    }

    async createTransaction(transactionObject){
        try{
            console.log(transactionObject);
            const newRecord = await TransactionModel.create(transactionObject)
            return newRecord

        } catch (error) {
            return error
        }
    }

    async getTransactions(){
        try {
            const newRecord = await TransactionModel.find({})
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async getParticularTransactions(property,value){
        try {
            const newRecord = await TransactionModel.find({[property]:value})
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async createRole(roleObject){
        try{

            const newRecord = await RoleModel.create(roleObject)
            return newRecord

        } catch (error) {
            return error
        }
    }

    
    async createCity(cityObject){
        try{

            const newRecord = await CityModel.create(cityObject)
            return newRecord

        } catch (error) {
            return error
        }
    }

    async addStateToCountry(countryObjectId,stateObjectId){
        try {
            const newRecord = await CountryModel.updateOne(
                {
                    _id:countryObjectId
                },
                {
                    $push :{ states : stateObjectId}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async addCityToState(stateObjectId,cityObjectId){
        try {
            const newRecord = await StateModel.updateOne(
                {
                    _id:stateObjectId
                },
                {
                    $push :{ cities : cityObjectId}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async getAllCountries(){
        try {
            const newRecord = await CountryModel.find({}).populate('states')
            return newRecord
        }
        catch (err) {
            return false
        }
    }
    async getOneCountry(countryObjectId){
        try {
            const newRecord = await CountryModel.findOne({ _id:countryObjectId}).populate('states')
            return newRecord
        }
        catch (err) {
            return false
        }
    }
    async getOneState(stateObjectId){
        try {
            const newRecord = await StateModel.find({_id : stateObjectId}).populate('cities')
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async createPlanType(planTypeObject){
        try{

            const newRecord = await PlanTypeModel.create(planTypeObject)
            return newRecord

        } catch (error) {
            return error
        }
    }

    async getAllPlanTypes(){
        try {
            const newRecord = await PlanTypeModel.find({})
            return newRecord
        }
        catch (err) {
            return false
        }
    }
    async getAllPlans(){
        try {
            const newRecord = await PlanModel.find({}).populate('planType')
            return newRecord
        }
        catch (err) {
            return false
        }
    }
    async getOnePlan(planObjectId){
        try {
            const newRecord = await PlanModel.findOne({_id:planObjectId}).populate('planType')
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async getOnePlanType(planTypeObjectId){
        try {
            const newRecord = await PlanTypeModel.findOne({_id:planTypeObjectId}).populate('plans')
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async getOneAgent(agentObjectId){
        try {
            const newRecord = await AgentModel.findOne({_id:agentObjectId}).populate('role').populate('transactions')
            return newRecord
        }
        catch (err) {
            return false
        }
    }


    async getOneEmployee(employeeObjectId){
        try {
            const newRecord = await EmployeeModel.findOne({_id:employeeObjectId}).populate('role')
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async addPlanToPlanType(planTypeObjectId,planObjectId){
        try {
            const newRecord = await PlanTypeModel.updateOne(
                {
                    _id:planTypeObjectId
                },
                {
                    $push :{ plans : planObjectId}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }
    async toggleSwitch(planTypeObjectId,currentState){
        try {
            const newRecord = await PlanTypeModel.updateOne(
                {
                    _id:planTypeObjectId
                },
                {
                    $set :{ isActive : currentState}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }
    async toggleSwitchPlan(planId,currentState){
        try {
            const newRecord = await PlanModel.updateOne(
                {
                    _id:planId
                },
                {
                    $set :{ isActive : currentState}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async getAllRoles(){
        try {
            const newRecord = await RoleModel.find({})
            return newRecord
        } catch (error) {
            return false
        }
    }

    async toggleSwitchRole(roleObjectId,currentState){
        try {
            const newRecord = await RoleModel.updateOne(
                {
                    _id:roleObjectId
                },
                {
                    $set :{ isActive : currentState}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }
    async toggleSwitchCustomer(customerObjectId,currentState){
        try {
            const newRecord = await CustomerModel.updateOne(
                {
                    _id:customerObjectId
                },
                {
                    $set :{ isActive : currentState}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async getAllAgents(){
        try {
            const newRecord = await AgentModel.find({}).populate('role')
            return newRecord
        } catch (error) {
            return false
        }
    }
    async getAllEmployees(){
        try {
            const newRecord = await EmployeeModel.find({}).populate('role')
            return newRecord
        } catch (error) {
            return false
        }
    }
    async getAllCustomers(){
        try {
            const newRecord = await CustomerModel.find({}).populate('role')
            return newRecord
        } catch (error) {
            return false
        }
    }
    async getOneCustomer(customerObjectId){
        try {
            const newRecord = await CredentialModel.find({_id:customerObjectId})
            console.log(newRecord);
            return newRecord
        } catch (error) {
            return false
        }
    }
    async getAllAdmins(){
        try {
            const newRecord = await AdminModel.find({}).populate('commissionWithdrawalRequests')
            return newRecord
        } catch (error) {
            return false
        }
    }

    async getAdmin(adminObjectId){
        try {
            const newRecord = await AdminModel.find({_id:adminObjectId})
            return newRecord
        } catch (error) {
            return false
        }
    }

    async getOnePoilcy(policyObjectId){
        try {
            const newRecord = await PolicyModel.find({_id:policyObjectId}).populate('transactionObjectId')
            return newRecord
        } catch (error) {
            return false
        }
    }
    
    async getAllPolicies(){
        try {
            const newRecord = await PolicyModel.find({}).populate('transactionObjectId').populate('plan').populate('plantype')
            return newRecord
        } catch (error) {
            return false
        }
    }
    async gettax(){
        try {
            const newRecord = await TaxModel.find({})
            return newRecord
        } catch (error) {
            return false
        }
    }

    async createTax(taxObject){
        try {
            const newRecord = await TaxModel.create(taxObject)
            return newRecord
        } catch (error) {
            return false
        }
    }

    async updateTax(taxObjectId,tax){
        try {
            const newRecord = await TaxModel.updateOne(
                {
                    _id:taxObjectId
                },
                {
                    $set :{ tax : tax}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }



    
    async findUserInCollection(userName){
        try {
            const currentUser = await CredentialModel.findOne({userName : userName})
            console.log(currentUser);
            if(currentUser === null){

                console.log('early Exit');
                return false
            }

            const currentUserID = currentUser._id

            let record = await CustomerModel.findOne({credential:currentUserID}).populate('credential').populate('role').populate('policies').populate('transactions')
            if(record !== null){
                return record
            }
            record = await EmployeeModel.findOne({credential:currentUserID}).populate('credential').populate('role')
            if(record !== null){
                return record
            }
            record = await AgentModel.findOne({credential:currentUserID}).populate('credential').populate('role')
            if(record !== null){
                console.log("Im agent");
                return record
            }
            record = await AdminModel.findOne({credential:currentUserID}).populate('credential').populate('role')
            if(record !== null){
                return record
            }
            console.log(' Exit End');
            return false
            
            
        } catch (error) {
            return false
        }
   
    }

    async updatePlanProperties(planId,property,value){
        try {
            const newRecord = await PlanModel.updateOne(
                {
                    _id:planId
                },
                {
                    $set :{ [property] : value}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }


    async updatePlanType(planTypeId,property,value){
        try {
            const newRecord = await PlanTypeModel.updateOne(
                {
                    _id:planTypeId
                },
                {
                    $set :{ [property] : value}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async updateAgent(agentObjectId,property,value){
        try {
            const newRecord = await AgentModel.updateOne(
                {
                    _id:agentObjectId
                },
                {
                    $set :{ [property] : value}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async updateAgentPushPayment(agentObjectId,property,value){
    
        console.log(agentObjectId,property,value + "yes bro");
        try {
            const newRecord = await AgentModel.updateOne(
                {
                    _id:agentObjectId
                },
                {
                    $push :{ [property] : value}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async updateEmployee(employeeObjectId,property,value){
        try {
            const newRecord = await EmployeeModel.updateOne(
                {
                    _id:employeeObjectId
                },
                {
                    $set :{ [property] : value}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }



    async updateAdmin(adminObjectId,property,value){
        try {
            const newRecord = await AdminModel.updateOne(
                {
                    _id:adminObjectId
                },
                {
                    $push :{ [property] : value}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async updateAdminPush(adminObjectId,property,value){
        try {
            const newRecord = await AdminModel.updateOne(
                {
                    _id:adminObjectId
                },
                {
                    $push :{ [property] : value}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async updateCustomer(customerObjectId,property,value){
        try {
            const newRecord = await CustomerModel.updateOne(
                {
                    _id:customerObjectId
                },
                {
                    $set :{ [property] : value}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async pushPolicy(customerObjectId,property,value){

        try {
            const newRecord = await CustomerModel.updateOne(
                {
                    _id:customerObjectId
                },
                {
                    $push :{ [property] : value}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }
    async pushPayment(customerObjectId,property,value){
        console.log(customerObjectId,property,value);
        try {
            const newRecord = await PolicyModel.updateOne(
                {
                    _id:customerObjectId,"installmentPaymentDates.paymentId":property
                },
                {
                    $set :{ "installmentPaymentDates.$.isActive" : value }
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }
    
    async changePassword(ObjectId,hashedconfirmPassword){
        try {
            const newRecord = await CredentialModel.updateOne(
                {
                    _id:ObjectId
                },
                {
                    $set :{ password : hashedconfirmPassword}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }




    async createQuery(queryObject){
        try{

            const newRecord = await QueryModel.create(queryObject)
            return newRecord

        } catch (error) {
            return error
        }
    }

    async addReplyQuery(queryObjectId,replyObjectId){
        try {
            const newRecord = await QueryModel.updateOne(
                {
                    _id:queryObjectId
                },
                {
                    $set :{ isActive : false}
                },
                {
                    $push :{ replies : replyObjectId}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async getAllQueries(){
        try {
            const newRecord = await QueryModel.find({})
            return newRecord
        } catch (error) {
            return false
        }
    }

    async updateTransaction(transactionObjectId,property,value){
        try {
            const newRecord = await TransactionModel.updateOne(
                {
                    _id:transactionObjectId
                },
                {
                    $set :{ [property] : value}
                }
                )
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async findOneCountry(country){
        try {
            const newRecord = await CountryModel.find({country:country})
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async findOneState(state){
        try {
            const newRecord = await StateModel.find({state:state})
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async findOneCity(city){
        try {
            const newRecord = await CityModel.find({city:city})
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async getAllCities(){
        try {
            const newRecord = await CityModel.find({})
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    
    async getAllStates(){
        try {
            const newRecord = await StateModel.find({})
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async findOnePlanType(PlanType){
        try {
            const newRecord = await PlanTypeModel.find({plantype:PlanType})
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async findOnePlan(planName){
        try {
            const newRecord = await PlanModel.find({planName:planName})
            return newRecord
        }
        catch (err) {
            return false
        }
    }

    async findPolicyUsingUserName(userName){
        try {
            const newRecord = await PolicyModel.find({customer:userName})
            return newRecord
        }
        catch (err) {
            return false
        }
    }



}

module.exports=DatabaseMongoose