"use server"

import { client } from "@/client"
import { ProductQuickEnquiryType } from "@/types/ActionTypes"

export const ProductQuickEnquiry = async (formData: ProductQuickEnquiryType) => {
    try {
        const postData = await client.productQuickEnquiry.create({
            data: formData
        })
        if(postData.id){
            return {
                type: 1,
                data: "Query Send Sucessfully."
            }
        }
        return {
            type: 0,
            data: "Query Send Failed."
        }
    } catch (error: any) {
        return {
            type: 0,
            data: "Query Send Failed."
        }
    }
}
