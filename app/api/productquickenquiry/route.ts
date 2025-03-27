/* eslint-disable  @typescript-eslint/no-explicit-any */
import { connectToDatabase } from "@/db";
import { Productquickenquiry } from "@/modles/ProductQuickEnquiryModel";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod"; // Recommended for validation

// Input validation schema
const QuickEnquirySchema = z.object({
  email: z.string().email("Invalid email address"),
  productId: z.string().min(1, "Product ID is required")
});

export async function POST(req: NextRequest) {
  try {
    // Parse and validate request body
    const body = await req.json();
    const validatedData = QuickEnquirySchema.parse(body);

    // Ensure database connection
    await connectToDatabase();

    // Create quick enquiry with validated data
    const newQuickEnquiry = await Productquickenquiry.create(validatedData);

    // Successful response
    return NextResponse.json({
      message: "Query Sent Successfully", 
      success: true,
      enquiryId: newQuickEnquiry._id
    }, { status: 201 });

  } catch (error) {
    // Differentiate between validation and other errors
    if (error instanceof z.ZodError) {
      return NextResponse.json({
        message: "Validation Error",
        success: false,
        errors: error.errors
      }, { status: 400 });
    }

    // Log the full error for server-side tracking
    console.error('Quick Enquiry submission error:', error);

    // Generic error response
    return NextResponse.json({
      message: "Query Submission Failed", 
      success: false
    }, { status: 500 });
  }
}

// Optional: Configure route settings
export const config = {
  api: {
    bodyParser: true,
  },
  maxDuration: 10 // Vercel serverless function timeout
};