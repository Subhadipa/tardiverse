const mongoose=require("mongoose")
const objectId=mongoose.Schema.Types.ObjectId
const studentSchema=new mongoose.Schema({
    // roll_no:{
    //     type:Number,
    //     required:true
    // },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
},

 {timestamps:true}
)

module.exports=mongoose.model("Student",studentSchema)

