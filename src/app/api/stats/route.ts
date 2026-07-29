import { NextResponse } from "next/server"

// Mock data - in production, this would come from a database
const mockStats = {
  totalRegistrations: 347,
  pending: 45,
  approved: 289,
  rejected: 13,
  branches: {
    "CSE": 89,
    "IT": 67,
    "ECE": 54,
    "ME": 72,
    "CE": 45,
    "EE": 20,
  },
  categories: {
    "certificate": 245,
    "gold-medal": 52,
    "silver-medal": 38,
    "bronze-medal": 12,
  },
}

export async function GET() {
  return NextResponse.json({
    success: true,
    data: mockStats,
  })
}
