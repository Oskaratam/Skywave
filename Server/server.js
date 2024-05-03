const express = require("express");
const cors = require("cors");

const { createConnection } = require("mysql");

const app = express();
app.use(cors());

let allTariffs = [];


const connection = createConnection({
    host : "localhost",
    user : "root",
    password : "root1",
    database : "skywave", 
})

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to database as ID ' + connection.threadId);
});

app.get('/api/tariffs', (req, res) => {

    connection.query("SELECT * FROM tariffPlans", (err, result, fields) => {
        if(err){
            return console.log("Querry error: " + err)
        }
        console.log(result)
        allTariffs = result;
    } )

    console.log('Request received for /api/tariffs')
    res.send(allTariffs);
    console.log('Response sent for /api/tariffs');
})
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000")
});


