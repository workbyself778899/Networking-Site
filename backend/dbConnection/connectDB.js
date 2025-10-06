const mongoose = require('mongoose');
const connection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connected is connected to server");
        
    } catch (error) {
        console.log('Error while connecting to DB', error);
    }
}
connection();