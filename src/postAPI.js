const express = ('express');
const router = express.Router();
router.post ('/text-post', function(req,res)) {
let players = [
    {
"name" : "manish",
"dob" : "1/1/1995",
"gender" : "male",
"city" : "jalandhar",
"sports" : [
    "swimming"
]
    },
    {
        "name" : "gopal",
        "dob" : "1 /9/1995",
        "gender" : "male",
        "city" : "delhi",
        "sports" :[
            "soccer"
        ],
    },
{
    "name" : "lokesh",
    "dob" : "1/1/1990",
    "gender" : "male",
    "city" : "mumbai",
    "sports" : [
        "soccer"
        let x = req.body.element
        players.push(x)
        

        res.send ( {data: players , status: true})
    ],
},
]
}
module.exports = router;


