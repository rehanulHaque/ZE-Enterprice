"use server"

import { client } from "@/client"
import { ServiceQuickEnquiryType } from "@/types/ActionTypes"

export const serviceQuickEnquiry = async (formData: ServiceQuickEnquiryType) => {
    try {
        const postData = await client.serviceQuickEnquiry.create({
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
