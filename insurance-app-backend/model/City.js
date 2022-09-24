const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
    city :{type: String ,unique : true,required:true},
    isActive :{type: Boolean,required:true}
    },
    {
        timestamps: true 
    }
)

const  CityModel = new mongoose.model('Cities', CitySchema)
module.exports = CityModel