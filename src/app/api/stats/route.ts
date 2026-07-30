import { NextResponse } from "next/server"
import { getRegistrationStats } from "@/lib/registrations-store"

export async function GET() {
  const stats = getRegistrationStats()
  return NextResponse.json({
    success: true,
    data: stats,
  })
}
