 
const BookModel = require("../models/bookmodel")
const createBooks = async function(req,res){
    let data = req.body
    let savedData = await BookModel.create(data)
   return res.send ({status: true, msg: "book Created", data:savedData})

}
const getBooksData = async function (req,res){
    let allBooks = await BookModel.find ({authorName:"chetan bhagat"})
    res.send({msg:allBooks})
}
module.exports.createBooks = createBooks
module.exports.getBooksData = getBooksData