const studentModel = require("../models/student");
const studentDetailsModel = require("../models/studentDetails");

const outerFunc = {
  createStudent: async (req, res) => {
    try {
      let arr=Array(10)
      for(let i=0;i<arr.length;i++){
        let studentDbDetails = await studentModel.create(req.body);
        console.log(studentDbDetails)
      }
      
      return res.status(200).send({
        status: true,
        message: "Student created Successfully!",
       // data: studentDbDetails,
      });
    } catch (error) {
      res.status(500).send({ status: false, message: error.message });
    }
  },
  createStudentDetails: async (req, res) => {
    try {
      let studentDbDetails = await studentDetailsModel.create(req.body);
      return res.status(200).send({
        status: true,
        message: "Student Details created Successfully!",
        data: studentDbDetails,
      });
    } catch (error) {
      res.status(500).send({ status: false, message: error.message });
    }
  },
  fullDetails: async (req, res) => {
    try {
        let studentDetails={}
      let studentDbDetails = await studentDetailsModel
        .findOne({ roll_no: req.params.id })
        .populate("roll_no");

        studentDetails={
            roll_no:studentDbDetails.roll_no._id,
            name:studentDbDetails.roll_no.name,
            email:studentDbDetails.roll_no.email,
            "Mother's name":studentDbDetails.Mother_name,
            "Father's name":studentDbDetails.Father_name,
            city:studentDbDetails.city
        }
      return res.status(200).send({
        status: true,
        message: "Student Details created Successfully!",
        data: studentDetails,
      });
    } catch (error) {
      res.status(500).send({ status: false, message: error.message });
    }
  },

};

module.exports = outerFunc;
