console.log("Welcome to Node js");
//importar módulos
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
//Database configuration

const dbConfig=require('./config/database.config.js');
const mongoose=require('mongoose');
mongoose.Promise=global.Promise;

require('./app/routes/product.routes.js')(app);
app.use(express.json());
//Connect to the database
mongoose.connect(dbConfig.url,dbConfig.options).then(()=>{
    console.log("Conexión correcta");
}).catch(err=>{
    console.log("Conexión incorrecta");
    process.exit();
})


var port = process.env.PORT || 3000;
 
app.get('/', (req, res) => {
    res.json({
        "message": "This is a JSON response to a HTTP GET request."
    });
});
 
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
