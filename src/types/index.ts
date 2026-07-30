export type RegistrationStatus = "pending" | "approved" | "rejected"

export interface Registration {
  id: string
  name: string
  email: string
  enrollmentNo: string
  branch: string
  category: string
  status: RegistrationStatus
  createdAt: string
}

export interface RegistrationStats {
  totalRegistrations: number
  pending: number
  approved: number
  rejected: number
  branches: Record<string, number>
  categories: Record<string, number>
}
