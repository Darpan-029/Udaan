"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Search, Trophy, Medal, GraduationCap, Filter, Star, Sparkles } from "lucide-react"

interface Medalist {
  id: string
  name: string
  enrollment: string
  branch: string
  branchCode: string
  cgpa: string
  rank: string
  category: "Gold Medal" | "Merit Certificate"
  awardTitle: string
  batch: string
  donorName?: string
}

const medalistsData: Medalist[] = [
  {
    id: "m1",
    name: "Aditya Sharma",
    enrollment: "0801CS201012",
    branch: "Computer Science & Engineering",
    branchCode: "CSE",
    cgpa: "9.84",
    rank: "1st Rank",
    category: "Gold Medal",
    awardTitle: "Shri G.S. Seksaria Memorial Gold Medal for Academic Excellence in CSE",
    batch: "2020 - 2024",
    donorName: "SGSITS Alumni Trust",
  },
  {
    id: "m2",
    name: "Ananya Verma",
    enrollment: "0801IT201025",
    branch: "Information Technology",
    branchCode: "IT",
    cgpa: "9.78",
    rank: "1st Rank",
    category: "Gold Medal",
    awardTitle: "Institute Gold Medal for Overall Highest Scorer in IT",
    batch: "2020 - 2024",
    donorName: "Late Shri B.D. Toshniwal Endowment",
  },
  {
    id: "m3",
    name: "Rohan Kulkarni",
    enrollment: "0801EC201048",
    branch: "Electronics & Telecommunication",
    branchCode: "ECE",
    cgpa: "9.65",
    rank: "1st Rank",
    category: "Gold Medal",
    awardTitle: "Prof. S.M. Dasgupta Memorial Gold Medal in ECE",
    batch: "2020 - 2024",
    donorName: "Prof. Dasgupta Family Fund",
  },
  {
    id: "m4",
    name: "Siddharth Jain",
    enrollment: "0801ME201092",
    branch: "Mechanical Engineering",
    branchCode: "ME",
    cgpa: "9.58",
    rank: "1st Rank",
    category: "Gold Medal",
    awardTitle: "SGSITS Diamond Jubilee Gold Medal for Mechanical Discipline",
    batch: "2020 - 2024",
    donorName: "SGSITS Golden Jubilee Committee",
  },
  {
    id: "m5",
    name: "Pooja Gupta",
    enrollment: "0801CE201034",
    branch: "Civil Engineering",
    branchCode: "CE",
    cgpa: "9.52",
    rank: "1st Rank",
    category: "Gold Medal",
    awardTitle: "Er. K.L. Chhabra Gold Medal for Best Graduate in Civil Engineering",
    batch: "2020 - 2024",
    donorName: "Chhabra Foundation",
  },
  {
    id: "m6",
    name: "Vikramaditya Singh",
    enrollment: "0801EE201088",
    branch: "Electrical Engineering",
    branchCode: "EE",
    cgpa: "9.61",
    rank: "1st Rank",
    category: "Gold Medal",
    awardTitle: "Shri N.L. Joshi Gold Medal for Academic Distinction in Electrical",
    batch: "2020 - 2024",
    donorName: "Joshi Family Trust",
  },
  {
    id: "m7",
    name: "Megha Agarwal",
    enrollment: "0801PY201015",
    branch: "Pharmacy",
    branchCode: "Pharmacy",
    cgpa: "9.72",
    rank: "1st Rank",
    category: "Gold Medal",
    awardTitle: "Dr. C.P. Trivedi Gold Medal for Best All-Round B.Pharm Student",
    batch: "2020 - 2024",
    donorName: "Pharmacy Alumni Network",
  },
  {
    id: "m8",
    name: "Rahul Saxena",
    enrollment: "0801CS201075",
    branch: "Computer Science & Engineering",
    branchCode: "CSE",
    cgpa: "9.45",
    rank: "2nd Rank",
    category: "Merit Certificate",
    awardTitle: "Merit Certificate for 2nd Rank in Computer Science",
    batch: "2020 - 2024",
  },
  {
    id: "m9",
    name: "Divya Tiwari",
    enrollment: "0801IT201018",
    branch: "Information Technology",
    branchCode: "IT",
    cgpa: "9.41",
    rank: "2nd Rank",
    category: "Merit Certificate",
    awardTitle: "Merit Certificate for High Academic Performance in IT",
    batch: "2020 - 2024",
  },
  {
    id: "m10",
    name: "Harsh Vardhan",
    enrollment: "0801EC201031",
    branch: "Electronics & Telecommunication",
    branchCode: "ECE",
    cgpa: "9.38",
    rank: "2nd Rank",
    category: "Merit Certificate",
    awardTitle: "Merit Certificate for Excellence in Electronics",
    batch: "2020 - 2024",
  },
]

const departments = [
  { label: "All Departments", code: "ALL" },
  { label: "CSE", code: "CSE" },
  { label: "IT", code: "IT" },
  { label: "ECE", code: "ECE" },
  { label: "ME", code: "ME" },
  { label: "CE", code: "CE" },
  { label: "EE", code: "EE" },
  { label: "Pharmacy", code: "Pharmacy" },
]

export function MedalistDirectory() {
  const [selectedDept, setSelectedDept] = React.useState("ALL")
  const [selectedCategory, setSelectedCategory] = React.useState("ALL")
  const [searchQuery, setSearchQuery] = React.useState("")

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredMedalists = medalistsData.filter((item) => {
    const matchesDept = selectedDept === "ALL" || item.branchCode === selectedDept
    const matchesCategory = selectedCategory === "ALL" || item.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.enrollment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.branch.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesDept && matchesCategory && matchesSearch
  })

  return (
    <section id="medalists" className="py-20 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Trophy className="h-4 w-4" />
            <span>Honors & Awards</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Gold Medalists & Awardees</h2>
          <p className="text-lg text-muted-foreground">
            Browse the directory of SGSITS Gold Medal recipients and Merit Certificate awardees for the graduating batch.
          </p>
        </motion.div>

        {/* Filters and Search Bar */}
        <div className="max-w-6xl mx-auto mb-10 bg-card rounded-2xl p-6 border shadow-sm space-y-4">
          <div className="grid md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by student name or enrollment no (e.g. 0801CS...)..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Category Select */}
            <div className="md:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-3 px-4 rounded-xl border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="ALL">All Categories</option>
                <option value="Gold Medal">Gold Medalists Only</option>
                <option value="Merit Certificate">Merit Certificates Only</option>
              </select>
            </div>

            {/* Department Quick Badges count */}
            <div className="md:col-span-3 text-right text-sm font-medium text-muted-foreground">
              Showing <span className="text-foreground font-bold">{filteredMedalists.length}</span> awardees
            </div>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t">
            {departments.map((dept) => (
              <button
                key={dept.code}
                onClick={() => setSelectedDept(dept.code)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedDept === dept.code
                    ? "bg-amber-500 text-white shadow-md"
                    : "bg-muted hover:bg-accent text-muted-foreground hover:text-foreground"
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedalists.map((student) => {
            const isGold = student.category === "Gold Medal"
            return (
              <motion.div
                key={student.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl p-6 border relative overflow-hidden flex flex-col justify-between transition-all hover:shadow-xl ${
                  isGold
                    ? "bg-gradient-to-b from-amber-500/10 via-card to-card border-amber-500/40 shadow-amber-500/5"
                    : "bg-card border-border"
                }`}
              >
                {isGold && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-white text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider flex items-center gap-1 shadow-md">
                    <Sparkles className="h-3 w-3" /> Gold Medalist
                  </div>
                )}

                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-2xl ${isGold ? "bg-amber-500 text-white shadow-md shadow-amber-500/30" : "bg-primary/10 text-primary"}`}>
                      {isGold ? <Trophy className="h-6 w-6" /> : <Medal className="h-6 w-6" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground leading-snug">{student.name}</h3>
                      <p className="text-xs text-muted-foreground font-mono">{student.enrollment}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4 text-xs">
                    <div className="flex items-center justify-between py-1 border-b border-border/50">
                      <span className="text-muted-foreground">Department</span>
                      <span className="font-semibold text-foreground">{student.branch}</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-border/50">
                      <span className="text-muted-foreground">Cumulative CGPA</span>
                      <span className="font-bold text-amber-600 dark:text-amber-400 text-sm">{student.cgpa} / 10.0</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-border/50">
                      <span className="text-muted-foreground">Academic Rank</span>
                      <span className="font-semibold text-foreground">{student.rank}</span>
                    </div>
                  </div>

                  <div className="bg-muted/40 rounded-xl p-3 text-xs text-muted-foreground mb-4">
                    <p className="font-semibold text-foreground mb-1">{student.awardTitle}</p>
                    {student.donorName && (
                      <p className="text-[11px] italic text-amber-600/90 dark:text-amber-400/90">
                        Endowed by: {student.donorName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t">
                  <span className="inline-flex items-center gap-1">
                    <GraduationCap className="h-4 w-4 text-primary" /> Batch {student.batch}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary font-medium">
                    SGSITS Indore
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {filteredMedalists.length === 0 && (
          <div className="text-center py-16 bg-card rounded-3xl border max-w-md mx-auto">
            <Search className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-1">No Awardees Found</h3>
            <p className="text-sm text-muted-foreground">
              Try adjusting your search query or department filter.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
