const mongoose = require('mongoose');

const CredentialSchema = mongoose.Schema({
    credentialId : {type: String,required:true},
    userName : {type: String,unique :true,required:true},
    password : {type: String,required:true}
    },{
        timestamps: true 
    }
)

const  CredentialModel = new mongoose.model('Credentials', CredentialSchema)
module.exports = CredentialModel