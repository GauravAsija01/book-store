const express = require('express');
const app = express();
var router = express.Router();

let Todo = require('../models/todos');

// Defined get data(index or listing) route
router.route('/').get(function (req, res) {
  Todo.find(function (err, todos){
    if(err){
      console.log(err);
    }
    else {
      console.log('Retriving todos');
      res.json(todos);
    }
  });
});

// For Add record in database collection
router.route('/add').post(function (req, res) {
  let todo = new Todo(req.body);
  todo.save()
    .then(todo => {
    res.status(200).json({'todos': 'todo in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// For Delete Record
router.route('/delete/:id').get(function (req, res) {
  Todo.findByIdAndRemove({_id: req.params.id}, function(err, todo){
      if(err) res.json(err);
      else res.json('Successfully removed');
  });
});

// // Defined edit route
// router.route('/edit/:id').get(function (req, res) {
//   let id = req.params.id;
//   Employee.findById(id, function (err, employee){
//       res.json(employee);
//   });
// });

// //  Defined update route
// router.route('/update/:id').post(function (req, res) {
//   Employee.findById(req.params.id, function(err, employee) {
//   if (!employee)
//     return next(new Error('Could not load Document'));
//   else {
//       employee.employee_name = req.body.employee_name;
//       employee.employee_position = req.body.employee_position;
//       employee.employee_office = req.body.employee_office;
//       employee.employee_salary = req.body.employee_salary;

//       employee.save().then(employee => {
//         res.json('Update complete');
//     })
//     .catch(err => {
//           res.status(400).send("unable to update the database");
//     });
//   }
// });
// });

// For Delete Record
// router.route('/delete/:id').get(function (req, res) {
//   Employee.findByIdAndRemove({_id: req.params.id}, function(err, employee){
//       if(err) res.json(err);
//       else res.json('Successfully removed');
//   });
// });






// For Get Single Record
// router.get('/:id', (req, res) => {
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send('No record with given id : $(req.params.id)');
//     Employee.findById(req.params.id, (err, doc) => {
//         if(!err){ res.send(doc); }
//         else{ console.log('Error in retriving Employee :' + JSON.stringify(err, undefined, 2)); }
//     });  
// });



// For Add record in database collection
// router.post('/', (req, res) => {
//     var emploYee = new Employee({
//         employee_name: req.body.employee_name,
//         employee_position: req.body.employee_position,
//         employee_office: req.body.employee_office,
//         employee_salary: req.body.employee_salary
//     });
//     emploYee.save((err, doc) => {
//         if(!err){ res.send(doc);}
//         else{console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); } 
//     });
// });
// Defined store route WORKING
// router.route('/add').post(function (req, res) {
//     let employee = new Employee(req.body);
//     employee.save(employee, function(err, employee){
//         if(err){
//             res.status(400).send("unable to save to database");
//         }
//         res.status(200).json({'employee': 'Employee added successfully'});
//     });
//   });



 
  

// For Update Record
// router.put('/:id', (req, res) => {
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send('No record with given id : $(req.params.id)');
//     var emp = {
//         name: req.body.name,
//         position: req.body.position,
//         office: req.body.office,
//         salary: req.body.salary,
//     };
//     Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
//         if(!err){ res.send(doc);}
//         else{console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); } 
//     });
// });





// For Delete Record
// router.delete('/:id', (req, res) => {
//     if(!ObjectId.isValid(req.params.id))
//     return res.status(400).send('No record with given id : $(req.params.id)');

//     Employee.findByIdAndRemove(req.params.id, (err, doc) =>{
//         if(!err){ res.send(doc);}
//         else{console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); } 
//     });
// });



module.exports = router;