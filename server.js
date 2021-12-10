let express = require('express')
let api_routes = require('./routes/api.js')
let path = require('path')

// Create web application
let app = express() 

let vueClientPath = path.join(__dirname, 'student-sign-in-client', 'dist')
app.use(express.static(vueClientPath))

// be able to handle JSON requests, convert data to JavaScript
app.use(express.json())

app.use('/api', api_routes) // this will handle the request and returns a response 

app.use(function(req, res, next) {
    // respond with a 404 to any other requests
    res.status(404).send('Not found') // responds anything else 
})

app.use(function(err, req, res, next){ //
    console.error(err.stack)
    res.status(500).send('Server error')
})

// Start server running 
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})
