"use server"

import { client } from "@/client"
import { EnquiryData } from "@/types/ActionTypes"



export const HomePageQuickEnquiry = async (enquiryData: EnquiryData) => {
    try {
        const postData = await client.homePageQuickEnquiry.create({
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
        return {
            type: 0,
            data: "Query Send Failed."
        }
    }
}