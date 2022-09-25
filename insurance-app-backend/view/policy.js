const DatabaseMongoose = require("../repository/DB")
const DB = new DatabaseMongoose()

class Policy{
    constructor(DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,installmentPaymentDates,transactionObjectId,planType,planName){
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

    static async createPolicy(DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,installmentPaymentDates,transactionObjectId,planType,planName){
            const newcreatePolicy = new Policy(DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,installmentPaymentDates,transactionObjectId,planType,planName)
            const createPolicyRecord = await DB.createPoilcy(newcreatePolicy)
            return createPolicyRecord
    }

    static async getOnePolicy(policyObjectId){
        console.log(policyObjectId + "Hello");
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

}


module.exports = Policy