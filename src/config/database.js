const mongoose = require('mongoose');
const connectDatabase = async() => {
    try {
        await mongoose.connect('mongodb+srv://ergo:ergo123@cluster0.y0uijji.mongodb.net/',{useNewUrlParser:true,useUnifiedTopology:true}).then((data) => {
            console.log(`Mongodb conected with server: ${data.connection.host}`)
        });
    }catch(err){
      console.log(err)
    }
    
}

module.exports =  connectDatabase