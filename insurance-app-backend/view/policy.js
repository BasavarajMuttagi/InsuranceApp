const DatabaseMongoose = require("../repository/DB")
const DB = new DatabaseMongoose()

class Policy{
    constructor(DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,installmentPaymentDates,transactionObjectId,planType,planName,requestSent){
     this.plantype = plantype
     this.plan = plan
     this.customer = customer
     this.totalInvestment = totalInvestment
     this.InstallmentPeriod = InstallmentPeriod
     this.NumberOfInstallments = NumberOfInstallments
     this.InstallmentAmount = InstallmentAmount
     this.InterestAmount   =  InterestAmount
     this.TotalAmount     = TotalAmount
     this.installmentPaymentDates = installmentPaymentDates
     this.isActive  = true
     this.DateCreated  = DateCreated 
     this.MaturityDate = MaturityDate
     this.interestRate = interestRate
     this.SumAssured   = SumAssured
     this.transactionObjectId = transactionObjectId
     this.planType=planType
     this.planName=planName
    }

    static async createPolicy(DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,installmentPaymentDates,transactionObjectId,planType,planName,requestSent){
            const newcreatePolicy = new Policy(DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,installmentPaymentDates,transactionObjectId,planType,planName,requestSent)
            const createPolicyRecord = await DB.createPoilcy(newcreatePolicy)
            return createPolicyRecord
    }

    static async getOnePolicy(policyObjectId){
        const createPolicyRecord = await DB.getOnePoilcy(policyObjectId)
        return createPolicyRecord
    }
     
    static async getAllPolicies(){
        const createPolicyRecord = await DB.getAllPolicies()
        return createPolicyRecord
    }

    static async findPolicyByUserName(userName){
        const createPolicyRecord = await DB.findPolicyUsingUserName(userName)
        return createPolicyRecord
    }

    static async updatePolicy(policyObjectId,property,value){
            const updateRecord = await DB.updatePolicyClaim(policyObjectId,property,value)
            return updateRecord
    }

}


module.exports = Policy