const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema=new Schema(
{
    name:{
        type:String,
        required:[true,'Name is required'],
        minLength:[6,'Name should be greater than 6 characters'],
        maxLength:[30,'Name should not be greater than 30 characters'],
        trim:true
    },
    username:{
        type:String,
        required:[true,'UserName is required'],
        minLength:[2,'Name should be greater than 6 cahracters'],
        maxLength:[30,'Name should not be greater than 30 characters'],
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'password is required'],
        select:false,
        
    },
    bio:{
        type:String,
        minLength:[6,'Name should be greater than 6 characters'],
        maxLength:[150,'bio should be less than 150 characters'],
        
    }

},{ timestamps: true }

    )

    const userModel=mongoose.model('User',userSchema);
    module.exports=userModel;