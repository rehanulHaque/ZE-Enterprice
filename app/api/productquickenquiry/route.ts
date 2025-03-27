/* eslint-disable  @typescript-eslint/no-explicit-any */
import { connectToDatabase } from "@/db";
import { Productquickenquiry } from "@/modles/ProductQuickEnquiryModel";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        await connectToDatabase()
        await Productquickenquiry.create({
            email: body.email,
            productId: body.productId
        })
        return NextResponse.json({message: "Query Send Sucessfully", success: true})
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({message: "Query Send Failed", success: false})
    }
}
