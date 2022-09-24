const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
    role :{type: String,required:true},
    isActive :{type: Boolean,required:true}
    },
    {
        timestamps: true 
    }
)

const  RoleModel = new mongoose.model('Roles', RoleSchema)
module.exports = RoleModel