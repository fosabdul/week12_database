let { Sequelize, DataTypes } = require('sequelize')// 


// this will figure out which one is running whether is develper or production
let env = process.env.NODE_ENV || 'development'
// if app is running at Heroku, Heroku will have set an environment 
// variable called NODE_ENV which will have the value 'production'
// so the env variable in this code will be 'production'

// if the app is running on your computer, then env will be 'development'
// app will use SQLite

let config = require(__dirname + '/../config.json')[env]

let db = {} // database 

let sequelize 

if (config.use_env_variable) {
  // at Heroku, use postgres
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  // running locally, development mode, use SQLite
  sequelize = new Sequelize(config)
}

let studentModel = require('./student')(sequelize, DataTypes)

db[studentModel.name] = studentModel

db.sequelize = sequelize  // information on how to connect to the database
db.Sequelize = Sequelize  // reference to sequelize library 

module.exports = db