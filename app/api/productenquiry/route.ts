/* eslint-disable  @typescript-eslint/no-explicit-any */
import { connectToDatabase } from "@/db";
import ProductPageEnquiryModel from "@/modles/ProductPageEnquiryModel";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        await connectToDatabase()
        await ProductPageEnquiryModel.create({
            name: body.name,
            email: body.email,
            productId: body.productId,
            phone: body.phone,
            price: body.price,
            quantity: body.quantity,
            requirementDetails: body.requirementDetails
        })
        return NextResponse.json({message: "Query Send Sucessfully", success: true})
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({message: "Query Send Failed", success: false})
    }
}
