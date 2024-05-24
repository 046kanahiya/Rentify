import SellerFlowModel from "../models/sellerFlow.js";
import EmployeeModel from "../models/sellerFlow.js";

class sellerController {
   static addTolet = async (req, res) => {
      try {
         const { place, area, no_of_bed, no_of_bathroom, no_of_hospitals, no_of_colleges,email } = req.body;
         // const author = req.user._id;
         console.log(req.body);
         if (!email || !place || !area || !no_of_bed || !no_of_bathroom || !no_of_hospitals || !no_of_colleges) {
            res.status(400).send({ status: "failed", message: "All filed are required" });
         }

         const newTolet = new SellerFlowModel({
            email,place, area, no_of_bed, no_of_bathroom, no_of_hospitals, no_of_colleges
         });
         const tolet = await newTolet.save();

         res.status(200).send({ status: "success", message: "saved successfully", tolet: tolet });
      }
      catch (err) {
         console.log(err);
         res.status(500).send({ status: "failed", message: "internal server error" });
      }
   };



   static ownerTolets = async (req, res) => {
      try {
         // const id = req.params.id;
         // const {email} =req.body;
         // console.log(req.user);
         const email=req.user.email
         // console.log(id);
         const results = await SellerFlowModel.find({ email: email });
         // console.log(results);
         res.send({ data: "data", data: results });
         // return res.status(201).send({ sataus: "success", message: " successfully registered", user: saved_user, token: token });
      }
      catch (error) {
         console.log(error);
         res.send({ error: "something is misssing in db" })
         // res.redirect("/error")
         // return res.status(500).send({ status: "failed", message: "Uable to register" });
      }
   }

   static updateTolet = async (req, res) => {
      try {
         const { place, area, no_of_bed, no_of_bathroom, no_of_hospitals, no_of_colleges } = req.body;
         // const author = req.user._id;
         console.log(req.body);
         if (!place || !area || !no_of_bed || !no_of_bathroom || !no_of_hospitals || !no_of_colleges) {
            res.status(400).send({ status: "failed", message: "All filed are required" });
         }

         const id = req.params.id;
         console.log(id);
         const updateTolet = await SellerFlowModel.findOneAndUpdate(
            { _id: id },
            { place, area, no_of_bed, no_of_bathroom, no_of_hospitals, no_of_colleges },
            { new: true }
         );

         if (!updateTolet) {
            return res.status(404).send({ status: "failed", message: "Owner not found" });
         }

         res.status(200).send({ status: "Update success", updateTolet: updateTolet });
      } catch (error) {
         console.error(error);
         res.status(500).send({ status: "failed", message: "Unable to update tolet" });
      }
   };


   static deleteTolet = async (req, res) => {
      try {
         // const userId = req.user._id;
         const id = req.params.id;
         // console.log(req.headers);
         if (!id) {
            return res.status(400).send({ status: "failed", message: "SellerId is not present in body" });
         }

         const result = await SellerFlowModel.deleteOne({ _id:id });

         if (result.deletedCount === 0) {
            return res.status(404).send({ status: "failed", message: "Seller not found" });
         }

         res.status(200).send({ status: "success", result: result, count: result.deletedCount });
      } catch (error) {
         console.error(error);
         res.status(500).send({ status: "failed", message: "unable to Delete seller" });
      }
   };

}

export default sellerController;