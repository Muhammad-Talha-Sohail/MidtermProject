const mongoose = require('mongoose');

async function conDb(){
try{

    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
    
    
    
    });
    
  
    
}
catch(error){
console.log(error);
process.exit(1);
    }
}
module.exports = conDb;