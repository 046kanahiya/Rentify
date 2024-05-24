import mongoose from 'mongoose';

const sellerFlow = new mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    place:{
        type: String,
        required: true,
    },
    area:{
        type: String,
        required: true,
    },
    no_of_bed:{
        type:Number,
        required:true
    },
    no_of_bathroom:{
        type:Number,
        required:true
    },
    no_of_hospitals:{
        type:Number,
        required:true
    },
    no_of_colleges:{
        type:Number,
        required:true
    }
},
{   
    timestamps: true,
});

const SellerFlowModel = mongoose.model("sellerflow",sellerFlow);
export default SellerFlowModel;
