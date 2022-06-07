const trim = function(req,res){
    let k = "functionUp"
    let x = k.toLowerCase()
    res.send (x)
}
const up = function(req,res){
    let a = "functionUp"
    let b = a.toUpperCase()
    res.send(b)
}

module.exports ={trim,up}