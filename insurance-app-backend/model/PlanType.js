const mongoose = require('mongoose');

const PlanTypeSchema = mongoose.Schema({
    plantype :{type: String ,unique : true,required:true},
    plans :{type: [mongoose.SchemaTypes.ObjectId],ref:"Plans"},
    isActive :{type: Boolean,required:true}
    },
    {
        timestamps: true 
    }
)

const  PlanTypeModel = new mongoose.model('PlanTypes', PlanTypeSchema)
module.exports = PlanTypeModel