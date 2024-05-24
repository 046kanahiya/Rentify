import transporter from "../config/mailing.js";
import SellerFlowModel from "../models/sellerFlow.js";
import UserModel from "../models/User.js";

class buyerController {

   static sortEmployeetable = async (req, res) => {
      try {
         const {type} = req.body;
         // const author = req.user._id;
         console.log(req.body);
         if (!type) {
            res.status(400).send({ status: "failed", message: "Enter a Empty space" });
         }
      
         let employees;
         if (type=="fullname") {
            employees=await EmployeeModel.find({}).sort({fullname:1});
         } else if(type=="age"){
            employees=await EmployeeModel.find({}).sort({age:1});
         } else if(type=="department"){
            employees=await EmployeeModel.find({}).sort({department:1});
            
         } else if(type=="salary"){
            employees=await EmployeeModel.find({}).sort({salary:1});
         }else{
            employees=await EmployeeModel.find({}).sort({dob:1});
         }

         res.status(200).send({ status: "success", employees: employees });
      } catch (error) {
         console.log(error);
         res.status(500).send({ status: "failed", message: "Unable to Sort The Employee Data" });
      }
   };


   static sortGroupEmployeetable = async (req, res) => {
      try {
         const  {department}  = req.body;
         // const author = req.user._id;
         console.log(req.body);
         if (!department) {
            res.status(400).send({ status: "failed", message: "Enter a Empty space" });
         }
 
         // In a each Department sort data on based on salary
         const sortedGroupDept = await EmployeeModel.find({ department: department }).sort({salary:1});
         
         res.status(200).send({ status: "success", sortedGroupDept: sortedGroupDept });
      } catch (error) {
         console.log(error);
         res.status(500).send({ status: "failed", message: "unable to Sort Group of Employee Data" });
      }
   };


   static getAllTolets = async (req, res) => {
      try {
         // const author = req.user._id;
         //  const blogs = await BlogModel.find({ author: author });
         const sellers = await SellerFlowModel.find({});
         // console.log(employees);
         
         res.status(200).send({ status: "success", sellers: sellers });
      } catch (error) {
         console.log(error);
         res.status(500).send({ status: "failed", message: "unable to get All Employee" });
      }
   };

   static updateEmployee = async (req, res) => {
      try {
         const { fullname, age, dob, salary, department, _id } = req.body;
         // const author = req.user._id;
         console.log(req.body);
         if (!fullname || !age || !dob || !salary || !department) {
            res.status(400).send({ status: "failed", message: "All filed are required" });
         }
         const updatedEmployee = await EmployeeModel.findOneAndUpdate(
            { _id: _id },
            { fullname, age, dob, salary, department },
            { new: true }
         );

         if (!updatedEmployee) {
            return res.status(404).send({ status: "failed", message: "Employee not found" });
         }

         res.status(200).send({ status: "Update success", blog: updatedEmployee });
      } catch (error) {
         console.error(error);
         res.status(500).send({ status: "failed", message: "Unable to update Employee" });
      }
   };


   static searchTolets = async (req, res) => {
      try {
         const { place } = req.body;//jo client likhega
         // const author = req.user._id;
         console.log(req.body); 
        //  if (!fullname) {
        //     res.status(400).send({ status: "failed", message: "Enter a Empty space" });
        //  }
         const searchTolet = await SellerFlowModel.find({ place: { $regex: place } });

         if (!searchTolet) {
            return res.status(404).send({ status: "failed", message: "Tolet not found" });
         }

         res.status(200).send({ status: "Update success", searchTolet: searchTolet });
      } catch (error) {
         console.error(error);
         res.status(500).send({ status: "failed", message: "Unable to search Employee" });
      }
   };

   static sendDetailsToSeller = async (req, res) => {
      try {
         // const userId = req.user._id;
         const { selleremail,buyeremail } =req.body;
         const buyerdetails = await UserModel.findOne({email:buyeremail})
         const sellerdetail = await UserModel.findOne({email:selleremail})
         console.log(buyerdetails['firstname']);
         const buyertext =`
           name: ${buyerdetails['firstname']},
            email: ${buyerdetails['email']},
            phoneNo:${buyerdetails['phoneNo']},
         `;
         const sellertext =`Hello This is from rentify
           name: ${sellerdetail['firstname']},
            email: ${sellerdetail['email']},
            phoneNo:${sellerdetail['phoneNo']},
         `;
         // data sent 
               
         let buyermailOptions = {
            from: '"Nitt Chat Application Verification " <kanhaiyatripathi046@gmail.com>', // sender address
            to:selleremail, // list of receivers
            subject:"Verification mail",
            text:buyertext, // plain text body
         };
         let sellermailOptions = {
            from: '"Nitt Chat Application Verification " <kanhaiyatripathi046@gmail.com>', // sender address
            to:buyeremail, // list of receivers
            subject:"Verification mail",
            text:sellertext, // plain text body
         };

         // // Send email
         const info1 = transporter.sendMail(buyermailOptions);
         const info2 = transporter.sendMail(sellermailOptions);
         console.log('Message sent: %s', info1,info2);
   //  console.log('Message sent: %s', info.messageId);
      
         const sellerdetails =await UserModel({email:selleremail})
         res.status(200).send({ status: "success", sellerdetails: sellerdetails});
      } catch (error) {
         console.error(error);
         res.status(500).send({ status: "failed", message: "unable to Delete Employee" });
      }
   };

}

export default buyerController;