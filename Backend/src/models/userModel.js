const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: { type: "string", required: true },
    lastName: { type: "string", required: true },
    email: { type: "string", required: true },
    password: { type: "string", required: true },
},
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = new mongoose.model("user", userSchema);
