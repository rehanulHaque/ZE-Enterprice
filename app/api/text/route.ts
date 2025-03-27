 /* eslint-disable  @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";


export async function GET() {
  try {
    return NextResponse.json({
      message: "test", 
      success: true,
    }, { status: 201 });

  } catch (error) {
    console.error(error)
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