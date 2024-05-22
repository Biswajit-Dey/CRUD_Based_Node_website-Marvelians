const mongoose = require('mongoose');

const MongoDbConnection = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB connected");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {MongoDbConnection};