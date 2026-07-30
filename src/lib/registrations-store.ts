import { Registration, RegistrationStats, RegistrationStatus } from "@/types"

// Shared in-memory store for registrations. Placeholder scaffolding, not a
// real database -- resets on every cold start. Starts empty; real
// registration goes through the Google Form linked in the Registration
// section until this is wired to persistent storage.
let registrations: Registration[] = []

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
