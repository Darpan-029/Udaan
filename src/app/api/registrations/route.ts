import { NextRequest, NextResponse } from "next/server"
import { getRegistrations, addRegistration, deleteRegistration } from "@/lib/registrations-store"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get("status")
  
  const filteredRegistrations = getRegistrations(status)
  
  return NextResponse.json({
    success: true,
    data: filteredRegistrations,
    total: filteredRegistrations.length,
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, enrollmentNo, branch, category } = body

    if (!name || !email || !enrollmentNo || !branch || !category) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    const newReg = addRegistration({
      name,
      email,
      enrollmentNo,
      branch,
      category,
    })

    return NextResponse.json({
      success: true,
      data: newReg,
      message: "Registration created successfully",
    }, { status: 201 })
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid JSON input" },
      { status: 400 }
    )
  }
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
  
  const deleted = deleteRegistration(id)
  
  if (!deleted) {
    return NextResponse.json(
      { success: false, message: "Registration not found" },
      { status: 404 }
    )
  }

  return NextResponse.json({
    success: true,
    message: "Registration deleted successfully",
  })
}
