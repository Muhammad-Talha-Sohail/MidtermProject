const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({

id : {type: String,required:true},
name : {type: String,required:true},
category : {type: String,required:true},
age : {type: String,required:true},
color : {type: String,required:true},
price : {type: String,required:true},
book : {type:Boolean,required:true}

})






module.exports = mongoose.model('pet', petSchema);   
 