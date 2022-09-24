const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
    DateCreated:{type: String,required:true},
    MaturityDate:{type: String,required:true},
    interestRate:{type: String,required:true},
    SumAssured:{type: String,required:true},
    plantype:{type: String,required:true},
    plan:{type: String,required:true},
    customer:{type: String,required:true},
    totalInvestment:{type: String,required:true},
    InstallmentPeriod:{type: String,required:true},
    NumberOfInstallments:{type: [{type: Object}],required:true},
    InstallmentAmount:{type: String,required:true},
    InterestAmount:{type: String,required:true},
    TotalAmount:{type: String,required:true},
    planName:{type: String,required:true},
    planType:{type: String,required:true},
    agent:{type: String},
    agentCommissionForImt:{type: String,required:true},
    agentCommissionForReg:{type: String,required:true},
    comissionAmount:{type: String},
    premiumType:{type: String},
    comissionAmountPaymentStatus:{type: Boolean,required:true},
    taxAmount:{type: String,required:true},
    paymentMode:{type: String,required:true},
    requestSent:{type: Boolean,required:true}
    },{
        timestamps: true 
    }
)

const  TransactionModel = new mongoose.model('Transactions', TransactionSchema)
module.exports = TransactionModel