/* eslint-disable  @typescript-eslint/no-explicit-any */
import { connectToDatabase } from "@/db";
import ProductPageEnquiryModel from "@/modles/ProductPageEnquiryModel";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod"; // Recommended for validation

// Input validation schema
const ProductEnquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  productId: z.string().min(1, "Product ID is required"),
  phone: z.string()
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number is too long"),
  price: z.number().positive("Price must be a positive number"),
  quantity: z.number().int().positive("Quantity must be a positive integer"),
  requirementDetails: z.string().max(500, "Requirement details too long").optional()
});

export async function POST(req: NextRequest) {
  try {
    // Parse and validate request body
    const body = await req.json();
    const validatedData = ProductEnquirySchema.parse(body);

    // Ensure database connection
    await connectToDatabase();

    // Create product enquiry with validated data
    const newProductEnquiry = await ProductPageEnquiryModel.create(validatedData);

    // Successful response
    return NextResponse.json({
      message: "Query Sent Successfully", 
      success: true,
      enquiryId: newProductEnquiry._id
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
    console.error('Product Enquiry submission error:', error);

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