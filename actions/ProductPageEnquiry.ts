"use server"

import { client } from "@/client"
import { ProductPageEnquiryTypes } from "@/types/ActionTypes"



export const productPageEnquiry = async (enquiryData: ProductPageEnquiryTypes) => {
    try {
        const postData = await client.productPageEnquiry.create({
            data: {
                name: enquiryData.name,
                email: enquiryData.email,
                productId: enquiryData.productId,
                phone: enquiryData.phone,
                quantity: Number(enquiryData.quantity),
                price: Number(enquiryData.price),
                requirementDetails: enquiryData.requirementDetails
            }
        })
        if(postData.id){
            return {
                type: 1,
                data: "Enquiry Send Sucessfully."
            }
        }
        return {
            type: 0,
            data: "Enquiry Send Failed."
        }
    } catch (error: any) {
        console.log(error.message)
        return {
            type: 0,
            data: "Enquiry Send Failed."
        }
    }
}