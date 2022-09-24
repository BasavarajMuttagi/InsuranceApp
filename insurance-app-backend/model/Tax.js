const mongoose = require('mongoose');

const TaxSchema = mongoose.Schema({
    tax :{type: Number ,required:true}
    },
    {
        timestamps: true 
    }
)

const  TaxModel = new mongoose.model('Taxes', TaxSchema)
module.exports = TaxModel