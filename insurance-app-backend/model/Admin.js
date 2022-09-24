const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    adminId : {type: String,required:true},
    role :{type: String,required:true,ref:"Roles"},
    firstName :{type: String,required:true},
    lastName :{type: String,required:true},
    credential: {type: mongoose.SchemaTypes.ObjectId,ref:"Credentials"},
    DOB :{type: String,required:true},
    age :{type: String,required:true},
    city :{type: String,required:true},
    state :{type: String,required:true},
    country :{type: String,required:true},
    phone :{type: Number,required:true},
    email :{type: String,required:true},
    address :{type: String,required:true},
    isActive :{type: Boolean,required:true},
    commissionWithdrawalRequests:{type: [mongoose.SchemaTypes.ObjectId],ref:"Transactions"}
    },{
        timestamps: true 
    }
)

const  AdminModel = new mongoose.model('Admins', AdminSchema)
module.exports = AdminModel