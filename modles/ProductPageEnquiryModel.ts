import mongoose from "mongoose";

const productPageEnquirySchema = new mongoose.Schema({
    productId: {
        require: true,
        type: String
    },
    name: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String
    },
    phone: {
        require: true,
        type: String
    },
    quantity: {
        require: true,
        type: Number
    },
    price: {
        require: true,
        type: Number
    },
    requirementDetails: {
        require: true,
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
})

export default mongoose.models.productpageenquiry || mongoose.model("productpageenquiry", productPageEnquirySchema);