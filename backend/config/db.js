const mongoose=require('mongoose')

const MONGO_URL="mongodb://localhost:27017/authProject"

const databaseConnect=()=>{
    mongoose.connect(MONGO_URL)
    .then((conn)=>{console.log(conn.connection.host)})
    .catch((err)=>{console.log(err)});

}

module.exports=databaseConnect;