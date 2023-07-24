const express = require("express")
const router = express.Router()
const connection = require("../dbconnect/dbconnect.js")

router.get("/employees", (req, resp) =>{
    connection.query("select * from employees", (err, data) =>{
        if(err){
            console.log(JSON.stringify(err));
            resp.status(500).send("{'message': err}");
        }
        else{
            resp.send(data);
        }

    })
})

router.get("/employees/:id", (req, resp) =>{
    var id = req.params.id;
    
    connection.query("select * from employees where id = ?",[id], (err, data) =>{
        if(err){
            console.log(JSON.stringify(err));
            resp.status(500).send("{'message': err}");
        }
        else{
            resp.send(data);
        }

    })
})

router.post("/employees", (req, resp) => {
    var id = req.body.id;
    var fn = req.body.firstname;
    var ln = req.body.lastname;
    var sal = req.body.salary;

    connection.query("insert into employees values(?, ?, ?, ?)", [id, fn, ln, sal], (err, data) =>{
        console.log(data);
        if(err){
            resp.status(500).send("{'message': "+JSON.stringify(err)+"}")
        }
        else{
           if(data.affectedRows > 0){
            resp.status(200).send("{'message': 'Employee added successfully'} ")            
           }
           else{
            resp.status(500).send("{'message' : 'Data insertion failed'} ")
           }
        }
    } )
})

router.put("/employees/:id", (req, resp) =>{
    var id = req.params.id;

    var fn = req.body.firstname;
    var ln = req.body.lastname;
    var sal = req.body.salary;

    connection.query("update employees set firstname=?, lastname=?, salary=? where id = ?", [fn, ln, sal,id], (err, data) =>{
        if(err){
            resp.status(500).send("{'message: "+JSON.stringify(err)+"}")
        }
        else{
            resp.status(200).send("{ 'message': 'Employee updated successfully'} ")
        }
    })
})

router.delete("/employees/:id", (req, resp) =>{
    var id = req.params.id;

    connection.query("delete from employees where id = ?", [id], (err, data) =>{
        if(err){
            resp.status(500).send("{'message' :"+JSON.stringify(err)+"}")
        }
        else{
            resp.status(200).send("{'message': 'Employee deleted successfully'} ")
        }
    })
})

module.exports = router;


