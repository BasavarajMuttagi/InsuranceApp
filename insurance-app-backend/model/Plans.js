const mongoose = require('mongoose');


const PlanSchema = mongoose.Schema({
    planType:{type:String,required:true,ref:"PlanTypes"},
    planId :{type:String,required:true},
    planName :{type:String,required:true},
    planImage :{type:String,required:true},
    planDescription :{type:String,required:true},
    policyTermMin :{type:String,required:true},
    policyTermMax :{type:String,required:true},
    minAge :{type:String,required:true},
    maxAge :{type:String,required:true},
    minInvestment :{type:String,required:true},
    maxInvestment :{type:String,required:true},
    agentCommissionForReg :{type:String,required:true},
    agentCommissionForImt :{type:String,required:true},
    documents :{type: [mongoose.SchemaTypes.ObjectId],ref:"Documents"},
    isActive :{type: Boolean,required:true},
    interestRate:{type:String,required:true}
    },{
        timestamps: true 
    })

const  PlanModel = new mongoose.model('Plans', PlanSchema)
module.exports = PlanModel