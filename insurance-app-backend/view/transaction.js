const DatabaseMongoose = require("../repository/DB")
const DB = new DatabaseMongoose()
class Transaction{
    constructor(DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,planName,planType,agent,agentCommissionForImt,agentCommissionForReg,comissionAmount,premiumType,comissionAmountPaymentStatus,taxAmount,paymentMode,requestSent){
        this.DateCreated = DateCreated
        this.MaturityDate = MaturityDate
        this.interestRate = interestRate
        this.SumAssured = SumAssured
        this.plantype = plantype
        this.plan = plan
        this.customer = customer
        this.totalInvestment = totalInvestment
        this.InstallmentPeriod = InstallmentPeriod
        this.NumberOfInstallments = NumberOfInstallments
        this.InstallmentAmount = InstallmentAmount
        this.InterestAmount = InterestAmount
        this.TotalAmount = TotalAmount
        this.planName = planName
        this.planType = planType
        this.agent = agent
        this.agentCommissionForImt = agentCommissionForImt
        this.agentCommissionForReg = agentCommissionForReg
        this.comissionAmount = comissionAmount
        this.premiumType = premiumType
        this.comissionAmountPaymentStatus = comissionAmountPaymentStatus
        this.taxAmount=taxAmount
        this.paymentMode=paymentMode
        this.requestSent = requestSent
    }

    static async createTransaction(DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,planName,planType,agent,agentCommissionForImt,agentCommissionForReg,comissionAmount,premiumType,comissionAmountPaymentStatus,taxAmount,paymentMode,requestSent){
            const newTransaction = new Transaction(DateCreated,MaturityDate,interestRate,SumAssured,plantype,plan,customer,totalInvestment,InstallmentPeriod,NumberOfInstallments,InstallmentAmount,InterestAmount,TotalAmount,planName,planType,agent,agentCommissionForImt,agentCommissionForReg,comissionAmount,premiumType,comissionAmountPaymentStatus,taxAmount,paymentMode,requestSent)
            const newTransactionRecord = await DB.createTransaction(newTransaction)
            return newTransactionRecord
    }

    static async getallTransactions(){
        const newTransactionRecord = await DB.getTransactions()
        return newTransactionRecord
    }

    static async getparticularTransaction(property,value){
        const newTransactionRecord = await DB.getParticularTransactions(property,value)
        return newTransactionRecord
    }
    static async updateTransaction(transactionObjectId,property,value){
        const newTransactionRecord = await DB.updateTransaction(transactionObjectId,property,value)
        return newTransactionRecord
    }
}

module.exports = Transaction