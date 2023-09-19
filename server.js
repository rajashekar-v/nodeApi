const express = require("express");
const cors = require("cors");



const app = express();

var corOptions = {
    origin:'http://localhost:9000'
}

//Middleware

app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({extended : true}));

//Test API

app.get('/',(req,res) =>{
    res.writeHead(200,{"Content-Type":"application/json"});
    res.write(JSON.stringify({ "nodepai": `Welcome To Node API's` }));
    res.end();
})

// PORT
const PORT = process.env.PORT || 9000;


//Server
app.listen(PORT,console.log(`Server is up and running on ${PORT}`));
