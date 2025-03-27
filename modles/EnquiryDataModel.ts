import mongoose from "mongoose";

const enquiryDataSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String
    },
    productId: {
        require: true,
        type: String
    },
    phone: {
        require: true,
        type: String
    },
    location: {
        require: true,
        type: String
    },
    message: {
        require: true,
        type: String
    },
})

export const EnquiryData = mongoose.models.enquirydata || mongoose.model("enquirydata", enquiryDataSchema);