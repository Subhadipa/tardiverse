const mongoose=require("mongoose")
const objectId=mongoose.Schema.Types.ObjectId
const studentDetailsSchema=new mongoose.Schema({
    roll_no:{
        type:objectId,
        ref:"Student",
        required:true
    },
    Mother_name:{
        type:String,
        required:true
    },
    Father_name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
},

 {timestamps:true}
)

module.exports=mongoose.model("Student Detail",studentDetailsSchema)

