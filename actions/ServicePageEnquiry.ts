"use server"

import { client } from "@/client"
import { ServicePageEnquiryTypes } from "@/types/ActionTypes"



export const servicePageEnquiry = async (enquiryData: ServicePageEnquiryTypes) => {
    try {
        const postData = await client.servicePageEnquiry.create({
            data: enquiryData
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
        console.log(error.message)
        return {
            type: 0,
            data: "Query Send Failed."
        }
    }
}