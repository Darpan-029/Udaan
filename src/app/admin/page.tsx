"use client"

import * as React from "react"
import { Users, CheckCircle, Clock, XCircle, TrendingUp, Award, RefreshCw } from "lucide-react"
import { Registration, RegistrationStats, RegistrationStatus } from "@/types"

export default function AdminPage() {
  const [stats, setStats] = React.useState<RegistrationStats | null>(null)
  const [registrations, setRegistrations] = React.useState<Registration[]>([])
  const [loading, setLoading] = React.useState(true)
  const [updatingId, setUpdatingId] = React.useState<string | null>(null)

  const fetchData = React.useCallback(() => {
    setLoading(true)
    Promise.all([
      fetch("/api/stats").then((res) => res.json()),
      fetch("/api/registrations").then((res) => res.json()),
    ])
      .then(([statsRes, regRes]) => {
        if (statsRes.success) setStats(statsRes.data)
        if (regRes.success) setRegistrations(regRes.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  React.useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleStatusChange = async (id: string, newStatus: RegistrationStatus) => {
    setUpdatingId(id)
    try {
      const res = await fetch(`/api/registrations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })
      if (res.ok) {
        fetchData()
      }
    } finally {
      setUpdatingId(null)
    }
  }

  if (loading && !stats) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-12 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
          <div>
            <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1">
              ADMINISTRATION PORTAL
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-foreground font-normal">
              UDAAN Registrations &amp; Metrics
            </h1>
          </div>
          <button
            onClick={fetchData}
            className="flex items-center gap-2 px-4 py-2 bg-card border border-border text-xs font-sans hover:border-foreground transition-colors"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Stats Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-card p-6 border border-border">
            <div className="flex items-center justify-between mb-3">
              <Users className="h-6 w-6 text-foreground dark:text-accent" />
              <span className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground">Total</span>
            </div>
            <div className="font-serif text-3xl text-foreground">{stats?.totalRegistrations || 0}</div>
            <div className="text-xs text-muted-foreground mt-1">Total Registrations</div>
          </div>

          <div className="bg-card p-6 border border-border">
            <div className="flex items-center justify-between mb-3">
              <Clock className="h-6 w-6 text-amber-500" />
              <span className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground">Pending</span>
            </div>
            <div className="font-serif text-3xl text-foreground">{stats?.pending || 0}</div>
            <div className="text-xs text-muted-foreground mt-1">Awaiting Review</div>
          </div>

          <div className="bg-card p-6 border border-border">
            <div className="flex items-center justify-between mb-3">
              <CheckCircle className="h-6 w-6 text-emerald-600" />
              <span className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground">Approved</span>
            </div>
            <div className="font-serif text-3xl text-foreground">{stats?.approved || 0}</div>
            <div className="text-xs text-muted-foreground mt-1">Confirmed Attendees</div>
          </div>

          <div className="bg-card p-6 border border-border">
            <div className="flex items-center justify-between mb-3">
              <XCircle className="h-6 w-6 text-rose-500" />
              <span className="text-[10px] font-sans uppercase tracking-widest text-muted-foreground">Rejected</span>
            </div>
            <div className="font-serif text-3xl text-foreground">{stats?.rejected || 0}</div>
            <div className="text-xs text-muted-foreground mt-1">Declined</div>
          </div>
        </div>

        {/* Distribution Charts & Metrics */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card p-6 border border-border">
            <h3 className="font-serif text-lg text-foreground mb-4 font-normal flex items-center">
              <TrendingUp className="h-4 w-4 mr-2 text-accent" />
              Registrations by Branch
            </h3>
            <div className="space-y-3 text-xs font-sans">
              {Object.entries(stats?.branches || {}).map(([branch, count]) => (
                <div key={branch} className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{branch}</span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full transition-all"
                        style={{
                          width: `${(Number(count) / (stats?.totalRegistrations || 1)) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-muted-foreground w-6 text-right font-mono">
                      {String(count)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 border border-border">
            <h3 className="font-serif text-lg text-foreground mb-4 font-normal flex items-center">
              <Award className="h-4 w-4 mr-2 text-accent" />
              Award Categories
            </h3>
            <div className="space-y-3 text-xs font-sans">
              {Object.entries(stats?.categories || {}).map(([category, count]) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="font-medium text-foreground capitalize">
                    {category}
                  </span>
                  <div className="flex items-center space-x-3">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full transition-all"
                        style={{
                          width: `${(Number(count) / (stats?.totalRegistrations || 1)) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-muted-foreground w-6 text-right font-mono">
                      {String(count)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live Registrations Table */}
        <div className="bg-card p-6 border border-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif text-lg text-foreground font-normal">Recent Registered Scholars</h3>
            <span className="text-xs font-sans text-muted-foreground">Showing {registrations.length} entries</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs font-sans">
              <thead>
                <tr className="border-b border-border text-muted-foreground uppercase tracking-wider text-[10px]">
                  <th className="text-left py-3 px-4">Name &amp; Email</th>
                  <th className="text-left py-3 px-4">Enrollment</th>
                  <th className="text-left py-3 px-4">Branch</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-right py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {registrations.map((reg) => (
                  <tr key={reg.id} className="hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-medium text-foreground">{reg.name}</div>
                      <div className="text-[11px] text-muted-foreground">{reg.email}</div>
                    </td>
                    <td className="py-3 px-4 font-mono text-muted-foreground">{reg.enrollmentNo}</td>
                    <td className="py-3 px-4 text-foreground">{reg.branch}</td>
                    <td className="py-3 px-4 text-foreground">{reg.category}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2.5 py-0.5 text-[10px] uppercase font-semibold tracking-wider ${
                          reg.status === "approved"
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                            : reg.status === "pending"
                            ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                            : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20"
                        }`}
                      >
                        {reg.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <select
                        value={reg.status}
                        disabled={updatingId === reg.id}
                        onChange={(e) => handleStatusChange(reg.id, e.target.value as RegistrationStatus)}
                        className="py-1 px-2 border border-border bg-background text-xs font-sans text-foreground focus:outline-none"
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approve</option>
                        <option value="rejected">Reject</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
