import { Registration, RegistrationStats, RegistrationStatus } from "@/types"

// Shared in-memory store for registrations
let registrations: Registration[] = [
  {
    id: "reg-001",
    name: "Rahul Sharma",
    email: "rahul.sharma@sgsits.ac.in",
    enrollmentNo: "0801CS221001",
    branch: "Computer Science (CSE)",
    category: "Gold Medalist",
    status: "approved",
    createdAt: "2026-07-20T10:30:00.000Z",
  },
  {
    id: "reg-002",
    name: "Priya Patel",
    email: "priya.patel@sgsits.ac.in",
    enrollmentNo: "0801IT221045",
    branch: "Information Technology (IT)",
    category: "Merit Certificate",
    status: "pending",
    createdAt: "2026-07-22T14:15:00.000Z",
  },
  {
    id: "reg-003",
    name: "Amit Kumar",
    email: "amit.kumar@sgsits.ac.in",
    enrollmentNo: "0801EC221012",
    branch: "Electronics & Comm (ECE)",
    category: "Gold Medalist",
    status: "approved",
    createdAt: "2026-07-25T09:00:00.000Z",
  },
  {
    id: "reg-004",
    name: "Ananya Verma",
    email: "ananya.v@sgsits.ac.in",
    enrollmentNo: "0801ME221034",
    branch: "Mechanical Eng (ME)",
    category: "Merit Certificate",
    status: "pending",
    createdAt: "2026-07-28T16:45:00.000Z",
  },
]

export function getRegistrations(status?: string | null): Registration[] {
  if (status) {
    return registrations.filter((r) => r.status === status)
  }
  return registrations
}

export function getRegistrationById(id: string): Registration | undefined {
  return registrations.find((r) => r.id === id)
}

export function addRegistration(data: Omit<Registration, "id" | "createdAt" | "status">): Registration {
  const newRegistration: Registration = {
    ...data,
    id: `reg-${Date.now()}`,
    status: "pending",
    createdAt: new Date().toISOString(),
  }
  registrations.unshift(newRegistration)
  return newRegistration
}

export function updateRegistrationStatus(id: string, status: RegistrationStatus): Registration | null {
  const reg = registrations.find((r) => r.id === id)
  if (!reg) return null
  reg.status = status
  return reg
}

export function deleteRegistration(id: string): boolean {
  const initialLength = registrations.length
  registrations = registrations.filter((r) => r.id !== id)
  return registrations.length < initialLength
}

export function getRegistrationStats(): RegistrationStats {
  const totalRegistrations = registrations.length
  let pending = 0
  let approved = 0
  let rejected = 0
  const branches: Record<string, number> = {}
  const categories: Record<string, number> = {}

  for (const reg of registrations) {
    if (reg.status === "pending") pending++
    else if (reg.status === "approved") approved++
    else if (reg.status === "rejected") rejected++

    branches[reg.branch] = (branches[reg.branch] || 0) + 1
    categories[reg.category] = (categories[reg.category] || 0) + 1
  }

  return {
    totalRegistrations,
    pending,
    approved,
    rejected,
    branches,
    categories,
  }
}
