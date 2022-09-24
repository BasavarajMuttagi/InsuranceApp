const mongoose = require('mongoose');

const PolicySchema = mongoose.Schema({
    plantype :{type: mongoose.SchemaTypes.ObjectId,required:true,ref:"PlanTypes"},
    plan:{type: mongoose.SchemaTypes.ObjectId,required:true,ref:"Plans"},
    customer:{type:String,required:true},
    totalInvestment:{type:String,required:true},
    InstallmentPeriod:{type:String,required:true},
    NumberOfInstallments:{type:String,required:true},
    InstallmentAmount:{type:String,required:true},
    InterestAmount:{type:String,required:true},
    TotalAmount:{type:String,required:true},
    installmentPaymentDates : {type: [{type: Object}],required:true},
    isActive :{type: Boolean,required:true},
    DateCreated:{type:String,required:true},
    MaturityDate:{type:String,required:true},
    interestRate:{type:String,required:true},
    SumAssured :{type:String,required:true},
    transactionObjectId :{type: mongoose.SchemaTypes.ObjectId,required:true,ref:"Transactions"}, 
    planType:{type:String,required:true},
    planName:{type:String,required:true}
    },{
        timestamps: true 
    }
)

const  PolicyModel = new mongoose.model('Policies', PolicySchema)
module.exports = PolicyModel