const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    bookName:{
type: String,
required: true
    },
    prices: {
        indianPrice: {type: String},
        euroPrice: {type: String}
    },

     
    year:{
        type: Number,
        default: 2021
    },
    tags: [String],
    authorName: {type: String},
    totalPage: {type : Number},
    stockavailable: {type: Boolean},
    sales: {type:Number, default:10}
}, {timestamps: true});

    module.exports = mongoose.model("Book",bookSchema)

