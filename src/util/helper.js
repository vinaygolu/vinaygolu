const date =function(req,res){
    res.send("01/06/2022")
}
const getBatchInfo = function(req,res){
    res.send("Radon, W3D3, the topic for today is Nodejs module system")
}
module.exports = {date,getBatchInfo}