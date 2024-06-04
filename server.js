const app = require('./app')
const mongoose = require('mongoose');
require('dotenv').config();

(()=>{
    mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('connected to database');
    })
    .catch(err => {
        console.log(err)
    })
})()


app.listen(process.env.PORT , () => {
    console.log('server started on port ' + process.env.PORT);
})