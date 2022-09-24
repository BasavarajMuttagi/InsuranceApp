const mongoose = require('mongoose');

const StateSchema = mongoose.Schema({
    state :{type: String ,unique : true,required:true},
    cities :{type: [mongoose.SchemaTypes.ObjectId],ref:"Cities"},
    isActive :{type: Boolean,required:true}
    },
    {
        timestamps: true 
    }
)

const  StateModel = new mongoose.model('States', StateSchema)
module.exports = StateModel