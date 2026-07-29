import { NextRequest, NextResponse } from "next/server"

// Mock data - in production, this would come from a database
let registrations: any[] = []

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get("status")
  
  // Filter by status if provided
  const filteredRegistrations = status
    ? registrations.filter((r) => r.status === status)
    : registrations
  
  return NextResponse.json({
    success: true,
    data: filteredRegistrations,
    total: filteredRegistrations.length,
  })
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  
  if (!id) {
    return NextResponse.json(
      { success: false, message: "ID is required" },
      { status: 400 }
    )
  }
  
  registrations = registrations.filter((r) => r.id !== id)
  
  return NextResponse.json({
    success: true,
    message: "Registration deleted successfully",
  })
}
