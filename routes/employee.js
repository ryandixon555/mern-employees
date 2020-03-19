const express = require('express');
const employeeRouter  = express.Router();
const Employee = require('../model/Employee');

//CRUD

//read
employeeRouter.get('/', (req, res) => {
    Employee.find({},(err, response)=>{
        if (err)
            res.status(500).json({message: {
                msgBody: "Unable to get employees",
                msgError: true
            }});
        else 
            res.status(200).json(response)
    });
})

//create
employeeRouter.post('/', (req, res) =>{
    const employee = new Employee(req.body);
    employee.save((err,document)=>{
        if(err)
            res.status(500).json({message: {
                msgBody: "Unable to add employees",
                msgError: true
            }});
        else 
            res.status(200).json({message: {
                msgBody: "added employees",
                msgError: false
            }});
    });
});

//delete
employeeRouter.delete('/:id', (req, res)=> {
    Employee.findByIdAndDelete(req.params.id, err => {
        if (err)
            res.status(500).json({message: {
                msgBody: "Unable to delete",
                msgError: true
            }});
        else 
            res.status(200).json({message: {
                msgBody: "deleted employees",
                msgError: false
            }});
    })
});

//update
employeeRouter.put(':id', (req, res)=> {
    Employee.findOneAndUpdate(req.params.id, req.body,{runValidators: true}, (err, response)=> {
        if (err)
        res.status(500).json({message: {
            msgBody: "Unable to update",
            msgError: true
        }});
    else 
        res.status(200).json({message: {
            msgBody: "Updated employees",
            msgError: false
        }});
    })
});

module.exports = employeeRouter;