import mongoose from "mongoose";
const userSchema = new mongoose.Schema({ //attribute for user schema(is a method define for decelare in)
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,//for not spaces separated
    },
    usertype: {
        type: Boolean,
        required: true,
        default: false
    },
    password: {
        type: String,
        required: true,

    },
    phoneNo: {
        type: Number,
        require: true,
    },
})
const UserModel = mongoose.model("user", userSchema);//convert schema to model object
export default UserModel;