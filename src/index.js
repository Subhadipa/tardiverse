const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const _=require("underscore")
const route=require("./routes/route")
const mongoose=require("mongoose")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

let connection_string='mongodb+srv://Subhadipa:Subha2022@subhadipa-cluster.qy3xxtm.mongodb.net/dummy-api-db?authSource=admin&replicaSet=atlas-iogo5c-shard-0&readPreference=primary&ssl=true'

mongoose.
        connect(connection_string,{useNewUrlParser:true})
        .then(()=>console.log("mongoose is running in port 3000"))
        .catch((err)=>console.log(err))

app.use("/",route)

app.listen(process.env.PORT||3000,function(){
     console.log("Express is running on port "+(process.env.PORT||3000));
})
