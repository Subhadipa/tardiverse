const express=require("express")
const router=express.Router()

const studentController=require("../controllers/student")

router.post("/createStudent",studentController.createStudent)

router.post("/createStudentDetails",studentController.createStudentDetails)

router.get("/student/:id",studentController.fullDetails)








module.exports=router