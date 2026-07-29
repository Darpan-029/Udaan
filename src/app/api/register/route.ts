import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const registrationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  enrollment: z.string().min(1),
  branch: z.string().min(1),
  year: z.string().min(1),
  category: z.string().min(1),
  guests: z.string().optional(),
  address: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = registrationSchema.parse(body)
    
    // In production, this would save to a database
    // For now, we'll simulate a successful registration
    console.log("Registration received:", validatedData)
    
    // Simulate database save
    const registration = {
      id: Date.now().toString(),
      ...validatedData,
      createdAt: new Date().toISOString(),
      status: "pending",
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Registration successful",
        data: registration 
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: "Validation error",
          errors: error.errors 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: "Internal server error" 
      },
      { status: 500 }
    )
  }
}
