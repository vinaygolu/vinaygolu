const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();


const {default: mongoose} = require('mongoose');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    mongoose.connect("mongodb+srv://vktiwari:R1DmIU0YcTrrIUN6@cluster0.fgn9k.mongodb.net/vinay-DB",{
    useNewUrlParser: true
    })
.then(() => console.log("mongoDB is connected"))
.catch(err => console.log(err))


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on  with vinay ' + (process.env.PORT || 3000))
});
