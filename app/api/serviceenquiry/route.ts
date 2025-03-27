/* eslint-disable  @typescript-eslint/no-explicit-any */
import { connectToDatabase } from "@/db";
import { servicepageenquiry } from "@/modles/ServicePageEnquiryModel";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        await connectToDatabase()
        await servicepageenquiry.create({
            name: body.name,
            email: body.email,
            serviceId: body.serviceId,
            phone: body.phone,
            details: body.details
        })
        return NextResponse.json({message: "Query Send Sucessfully", success: true})
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({message: "Query Send Failed", success: false})
    }
}
