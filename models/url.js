const mongoose = require('mongoose');

//schema
const urlSchema = mongoose.Schema({
    shortid:{
        type: String,
        required: true,
        unique: true
    },
    redirecturl:{
        type: String,
        required: true,
    },
    visithistory:[{
        timestamp:{
            type: Number,
        }
}]},{timestamps:true})

    //model
    const URL=mongoose.model("url", urlSchema);

    
module.exports = URL; 