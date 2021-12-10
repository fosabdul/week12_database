const { Sequelize, DataTypes } = require("sequelize/dist");

module.exports = (Sequelize, DataTypes) => { // this is function that provides 

    let Student = Sequelize.define('Student', {  // 

        name: {  // how student data is structured 
            type = DataTypes.STRING
        },
        starID:{
            type: DataTypes.STRING 
        },
        present: {
            type: DataTypes.BOOLEN
        }

        //force specifies whether to drop the table or not 
        //true = drop table every time app restarts. need this setting if table schema changed.
        // false = keep table 

    })// force: true = means it will overwrite all databases , if you change it will updated 
    Student.sync ({force: true} ).then( () => {
        console.log('Synced student table')  // log a msg 
    })

    return Student   /// return the student model 
}