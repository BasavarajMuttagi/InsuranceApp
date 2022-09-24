const mongoose = require('mongoose');

const QuerySchema = mongoose.Schema({
    role : {type: String,required:true},
    userName:{type: String,required:true},
    message: {type: String,required:true},
    isActive :{type: Boolean,required:true}
    },{
        timestamps: true 
    }
)

const  QueryModel = new mongoose.model('Queries', QuerySchema)
module.exports = QueryModel