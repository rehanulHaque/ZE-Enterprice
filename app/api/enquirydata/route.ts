/* eslint-disable  @typescript-eslint/no-explicit-any */
import { connectToDatabase } from "@/db";
import { EnquiryData } from "@/modles/EnquiryDataModel";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        await connectToDatabase()
        await EnquiryData.create({
            name: body.name,
            email: body.email,
            productId: body.productId,
            phone: body.phone,
            location: body.location,
            message: body.message
        })
        return NextResponse.json({message: "Query Send Sucessfully", success: true})
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({message: "Query Send Failed", success: false})
    }
}
