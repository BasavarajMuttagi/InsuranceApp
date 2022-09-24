const mongoose = require('mongoose');

const CountrySchema = mongoose.Schema({
    country :{type: String, unique : true,required:true},
    states :{type: [mongoose.SchemaTypes.ObjectId],ref:"States"},
    isActive :{type: Boolean,required:true}
    },
    {
        timestamps: true 
    }
)

const  CountryModel = new mongoose.model('Countries', CountrySchema)
module.exports = CountryModel