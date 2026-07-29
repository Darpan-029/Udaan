"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Users, CheckCircle, Clock, XCircle, TrendingUp, Award } from "lucide-react"

export default function AdminPage() {
  const [stats, setStats] = React.useState<any>(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    // Fetch stats
    fetch("/api/stats")
      .then((res) => res.json())
      .then((data) => {
        setStats(data.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage UDAAN registrations and statistics</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-card rounded-xl p-6 border">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-primary" />
              <span className="text-sm text-muted-foreground">Total</span>
            </div>
            <div className="text-3xl font-bold">{stats?.totalRegistrations || 0}</div>
            <div className="text-sm text-muted-foreground">Registrations</div>
          </div>

          <div className="bg-card rounded-xl p-6 border">
            <div className="flex items-center justify-between mb-4">
              <Clock className="h-8 w-8 text-yellow-500" />
              <span className="text-sm text-muted-foreground">Pending</span>
            </div>
            <div className="text-3xl font-bold">{stats?.pending || 0}</div>
            <div className="text-sm text-muted-foreground">Awaiting Review</div>
          </div>

          <div className="bg-card rounded-xl p-6 border">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="h-8 w-8 text-green-500" />
              <span className="text-sm text-muted-foreground">Approved</span>
            </div>
            <div className="text-3xl font-bold">{stats?.approved || 0}</div>
            <div className="text-sm text-muted-foreground">Confirmed</div>
          </div>

          <div className="bg-card rounded-xl p-6 border">
            <div className="flex items-center justify-between mb-4">
              <XCircle className="h-8 w-8 text-red-500" />
              <span className="text-sm text-muted-foreground">Rejected</span>
            </div>
            <div className="text-3xl font-bold">{stats?.rejected || 0}</div>
            <div className="text-sm text-muted-foreground">Declined</div>
          </div>
        </motion.div>

        {/* Branch Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          <div className="bg-card rounded-xl p-6 border">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-primary" />
              Registrations by Branch
            </h3>
            <div className="space-y-3">
              {Object.entries(stats?.branches || {}).map(([branch, count]) => (
                <div key={branch} className="flex items-center justify-between">
                  <span className="font-medium">{branch}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{
                          width: `${(Number(count) / (stats?.totalRegistrations || 1)) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8 text-right">
                      {String(count)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 border">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              Award Categories
            </h3>
            <div className="space-y-3">
              {Object.entries(stats?.categories || {}).map(([category, count]) => (
                <div key={category} className="flex items-center justify-between">
                  <span className="font-medium capitalize">
                    {category.replace("-", " ")}
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className="w-32 bg-muted rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{
                          width: `${(Number(count) / (stats?.totalRegistrations || 1)) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8 text-right">
                      {String(count)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Recent Registrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card rounded-xl p-6 border"
        >
          <h3 className="text-lg font-semibold mb-4">Recent Registrations</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Name</th>
                  <th className="text-left py-3 px-4">Branch</th>
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Rahul Sharma</td>
                  <td className="py-3 px-4">CSE</td>
                  <td className="py-3 px-4">Gold Medal</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      Approved
                    </span>
                  </td>
                  <td className="py-3 px-4">2025-01-15</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Priya Patel</td>
                  <td className="py-3 px-4">IT</td>
                  <td className="py-3 px-4">Certificate</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                      Pending
                    </span>
                  </td>
                  <td className="py-3 px-4">2025-01-14</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Amit Kumar</td>
                  <td className="py-3 px-4">ECE</td>
                  <td className="py-3 px-4">Silver Medal</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      Approved
                    </span>
                  </td>
                  <td className="py-3 px-4">2025-01-13</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
