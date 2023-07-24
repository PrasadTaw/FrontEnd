const { json } = require("body-parser")
var mysql = require("mysql")

const mysqlConnection = mysql.createConnection(
    {
        "host": "localhost",
        "port" : 3306,
        "user":"root",
        "password": "root123",
        "database": "expresscrud"
    }
)

mysqlConnection.connect((error) => {
    if(error){
        console.log("error in getting db connection"+ JSON.stringify(error));

    }
    else{
        console.log("database connection established successfully");
    }
})

module.exports = mysqlConnection;