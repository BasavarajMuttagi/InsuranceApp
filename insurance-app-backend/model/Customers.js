const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    agentUserName : {type: String},
    customerId : {type: String,required:true},
    role :{type: String,required:true,ref:"Roles"},
    firstName :{type: String,required:true},
    lastName :{type: String,required:true},
    credential: {type: mongoose.SchemaTypes.ObjectId,required:true,ref:"Credentials"},
    DOB :{type: String,required:true},
    age :{type: String,required:true},
    city :{type: String,required:true},
    state :{type: String,required:true},
    country :{type: String,required:true},
    phone :{type: Number,required:true},
    email :{type: String,required:true},
    address :{type: String,required:true},
    policies :{type: [mongoose.SchemaTypes.ObjectId],ref:"Policies"},
    documents :{type: [{type: Object}]},
    isActive :{type: Boolean,required:true},
    transactions :{type: [mongoose.SchemaTypes.ObjectId],ref:"Transactions"}
    },{
        timestamps: true 
    }
)

const  CustomerModel = new mongoose.model('Customers', CustomerSchema)
module.exports = CustomerModel