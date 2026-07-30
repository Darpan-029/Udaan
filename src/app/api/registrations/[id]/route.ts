import { NextRequest, NextResponse } from "next/server"
import { getRegistrationById, updateRegistrationStatus } from "@/lib/registrations-store"
import { RegistrationStatus } from "@/types"

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const reg = getRegistrationById(params.id)
  if (!reg) {
    return NextResponse.json(
      { success: false, message: "Registration not found" },
      { status: 404 }
    )
  }
  return NextResponse.json({ success: true, data: reg })
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { status } = body

    if (!status || !["pending", "approved", "rejected"].includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid or missing status" },
        { status: 400 }
      )
    }

    const updated = updateRegistrationStatus(params.id, status as RegistrationStatus)

    if (!updated) {
      return NextResponse.json(
        { success: false, message: "Registration not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Registration status updated successfully",
      data: updated,
    })
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
