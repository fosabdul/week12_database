let express = require('express') //
let db = require('../models')
let Student = db.Student  // student model

let router = express.Router()   // must match the request that is made

router.get('/students', function(req, res, next){ // request student forces this function to run
    Student.findAll( {order: [ // all the student = findAll
        'name',                                          // order by present
        db.Sequelize.fn('lower', db.Sequelize.col('name'))  // and then by lowercase versions of names - a case-insensive sort
    ]} ).then( students => {
        return res.json(students)
    })
})

router.post('/students', function(req, res, next){ // create a 
    Student.create(req.body).then( (data) => { // req.body = contains any json that vue client has sent in the request
        return res.status(201).send('ok')  // 404 = not found/ status(201) =  created and 500 = error in server
    }).catch( err => {
        // handle user errors, e.g. missing starID or name
        if ( err instanceof db.Sequelize.ValidationError ) {
            // respond with 400 Bad Request eror code, include error messages
            let messages = err.errors.map( e => e.message )
            return res.status(400).json(messages) /// return in json form
        } 

        // otherwise, something unexpected has gone wrong, pass to error hander in server.js
        return next(err)
    })
})

router.patch('/students/:id', function(req, res, next){ // .patch is to update 
    // if request is to /students/100 
    // studentID will be 100 
    let studentID = req.params.id // get student id 
    let updatedStudent = req.body 
    Student.update( updatedStudent, { where: { id: studentID } } )
        .then( (rowsModified) => {
            // what about student not found or modification that violates a constraint?
            //

            let numberOfRowsModified = rowsModified[0]  // number of rows changed  first row

            if (numberOfRowsModified == 1) {   // exactly one row 
                return res.send('ok')
            }
            
            // no rows - student not found - return 404
            else {
                return res.status(404).json(['Student with that Star ID not found'])
            }
        })
        .catch( err => {
            // if validation error, that's a bad request - e.g. modify student to have no name 
            if (err instanceof db.Sequelize.ValidationError) {
                let messages = err.errors.map( e => e.message ) //
                return res.status(400).json(messages)
            } else {
                // unexpected error 
                return next(err)
            }
        })
})

router.delete('/students/:id', function(req, res, next){ // delete the student with choosen id.
    let studentID = req.params.id
    Student.destroy( {where: { id: studentID } } ) // delete in the database
        .then( (rowsDeleted) => {
            if (rowsDeleted == 1) {
                return res.send('ok') // says it is been deleted
            } else {
                return res.status(404).json(['Not Found'])
            }
        })
        .catch( err => next(err) )  // unexpected errors.
})

// to do edit a student
// to delete student

module.exports = router

// don't write code here - it will be ignored