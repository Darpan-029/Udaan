import { NextRequest, NextResponse } from "next/server"

// Mock data - in production, this would come from a database
let registrations: any[] = []

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { id } = params
    
    const index = registrations.findIndex((r) => r.id === id)
    
    if (index === -1) {
      return NextResponse.json(
        { success: false, message: "Registration not found" },
        { status: 404 }
      )
    }
    
    // Update the registration
    registrations[index] = {
      ...registrations[index],
      ...body,
      updatedAt: new Date().toISOString(),
    }
    
    return NextResponse.json({
      success: true,
      message: "Registration updated successfully",
      data: registrations[index],
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
