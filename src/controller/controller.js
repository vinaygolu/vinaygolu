 const mongoose = require("mongoose");

 const bookSchema = new mongoose.Schema({
bookNam
e: {
    type: String,
    required: true

},
prices: {
    indianPrice: String,
    euroPrice: String,
},
year: {
    type: Number,
    default: 2021
},
tags:[String],
authorName: String,
totalPages: Number,

stockAvailable: Boolean,
// sales: {type: Number, default:10}

     }, {timestamp: true});
 

        module.exports = mongoose.model('Book', bookSchema)
 