const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        unique:[true, "User name already exists"],
        required: [true, "User name is required"]
    },
    email:{
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [ true, "Password is required"]
    },
    bio:String,
    profileImage:{
        type:String,
        default: "https://ik.imagekit.io/2v9i0qatl/avatar-photo-default-user-icon-picture-face-vector-48139643.webp"
    }
})


const userModel = mongoose.model("users", userSchema)

module.exports = userModel