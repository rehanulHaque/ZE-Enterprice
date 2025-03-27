import mongoose from "mongoose";

const productQuickEnquirySchema = new mongoose.Schema({
    productId: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String
    },
});

export const Productquickenquiry = mongoose.models.productquickenquiry || mongoose.model("productquickenquiry", productQuickEnquirySchema);