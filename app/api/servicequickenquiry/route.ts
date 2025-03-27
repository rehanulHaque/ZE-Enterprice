/* eslint-disable  @typescript-eslint/no-explicit-any */
import { connectToDatabase } from "@/db";
import { Servicequickenquiry } from "@/modles/ServiceQuickEnquiryModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await connectToDatabase();
    await Servicequickenquiry.create({
      email: body.email,
      serviceId: body.serviceId,
    });
    return NextResponse.json({
      message: "Query Send Sucessfully",
      success: true,
    });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json({ message: "Query Send Failed", success: false });
  }
}
