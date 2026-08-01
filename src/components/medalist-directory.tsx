"use client"

import * as React from "react"
import { Search, Trophy, Medal, GraduationCap } from "lucide-react"
import { Reveal } from "@/components/reveal"

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

function useDebouncedValue<T>(value: T, delayMs: number) {
  const [debounced, setDebounced] = React.useState(value)
  React.useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delayMs)
    return () => clearTimeout(id)
  }, [value, delayMs])
  return debounced
}

export function MedalistDirectory() {
  const [selectedDept, setSelectedDept] = React.useState("ALL")
  const [selectedCategory, setSelectedCategory] = React.useState("ALL")
  const [searchQuery, setSearchQuery] = React.useState("")
  const debouncedSearch = useDebouncedValue(searchQuery, 200)

  const filteredMedalists = React.useMemo(() => {
    const query = debouncedSearch.toLowerCase()
    return medalistsData.filter((item) => {
      const matchesDept = selectedDept === "ALL" || item.branchCode === selectedDept
      const matchesCategory = selectedCategory === "ALL" || item.category === selectedCategory
      const matchesSearch =
        query === "" ||
        item.name.toLowerCase().includes(query) ||
        item.enrollment.toLowerCase().includes(query) ||
        item.branch.toLowerCase().includes(query)

      return matchesDept && matchesCategory && matchesSearch
    })
  }, [debouncedSearch, selectedDept, selectedCategory])

  return (
    <section id="medalists" className="py-16 bg-background border-t border-border-strong">
      <div className="mx-auto px-4 max-w-5xl">
        <Reveal className="text-center mb-12">
          <span className="text-[11px] font-sans tracking-[0.2em] text-accent uppercase block mb-1">
            HONORS &amp; DISTINCTIONS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-normal">
            Gold Medalists &amp; Awardees
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mt-4" />
        </Reveal>

        {/* Filters and Search Bar */}
        <div className="bg-card dark:bg-[#0D1527] p-6 border border-border dark:border-slate-800 rounded-2xl shadow-md mb-8 space-y-4 card-pop">
          <div className="grid md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-6 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <label htmlFor="medalist-search" className="sr-only">Search medalists</label>
              <input
                id="medalist-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by student name or enrollment..."
                className="w-full pl-9 pr-3 py-2 border border-border dark:border-slate-800 bg-background dark:bg-slate-900 rounded-xl text-xs font-sans text-foreground focus:outline-none focus:border-accent"
              />
            </div>

            <div className="md:col-span-4">
              <label htmlFor="medalist-category" className="sr-only">Filter by category</label>
              <select
                id="medalist-category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2 px-3 border border-border dark:border-slate-800 bg-background dark:bg-slate-900 rounded-xl text-xs font-sans text-foreground focus:outline-none focus:border-accent"
              >
                <option value="ALL">All Categories</option>
                <option value="Gold Medal">Gold Medalists Only</option>
                <option value="Merit Certificate">Merit Certificates Only</option>
              </select>
            </div>

            <div className="md:col-span-2 text-right text-xs font-sans text-muted-foreground">
              Showing <span className="font-bold text-foreground">{filteredMedalists.length}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-3 border-t border-border dark:border-slate-800">
            {departments.map((dept) => (
              <button
                key={dept.code}
                onClick={() => setSelectedDept(dept.code)}
                aria-pressed={selectedDept === dept.code}
                className={`px-3 py-1 text-[11px] font-sans tracking-wider uppercase border rounded-lg transition-all ${
                  selectedDept === dept.code
                    ? "bg-primary text-white border-primary shadow-md dark:bg-accent dark:text-background dark:border-accent"
                    : "bg-transparent text-muted-foreground border-border dark:border-slate-800 hover:border-accent"
                }`}
              >
                {dept.label}
              </button>
            ))}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedalists.map((student) => {
            const isGold = student.category === "Gold Medal"
            return (
              <div
                key={student.id}
                className="bg-card dark:bg-[#0D1527] p-6 border border-border dark:border-slate-800 rounded-2xl shadow-sm flex flex-col justify-between card-pop"
              >
                <div>
                  <div className="flex items-start justify-between mb-3 pb-3 border-b border-border dark:border-slate-800">
                    <div>
                      <span className="text-[10px] font-sans tracking-widest text-accent uppercase block font-semibold">
                        {isGold ? "★ Gold Medalist" : "Merit Certificate"}
                      </span>
                      <h3 className="font-serif text-lg text-foreground font-normal mt-0.5">
                        {student.name}
                      </h3>
                      <p className="text-[11px] font-mono text-muted-foreground mt-0.5">{student.enrollment}</p>
                    </div>
                    <div className="p-2 bg-background dark:bg-slate-900 border border-border dark:border-slate-800 rounded-xl">
                      {isGold ? <Trophy className="h-4 w-4 text-accent" /> : <Medal className="h-4 w-4 text-muted-foreground" />}
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs font-sans text-body mb-4">
                    <div className="flex justify-between py-0.5">
                      <span className="text-muted-foreground">Department:</span>
                      <span className="font-medium text-foreground">{student.branchCode}</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-muted-foreground">CGPA:</span>
                      <span className="font-bold text-accent">{student.cgpa} / 10.0</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span className="text-muted-foreground">Rank:</span>
                      <span className="font-medium text-foreground">{student.rank}</span>
                    </div>
                  </div>

                  <div className="bg-background dark:bg-slate-900/80 p-3 border border-border dark:border-slate-800 rounded-xl text-[11px] text-body mb-4">
                    <p className="font-serif text-xs text-foreground leading-snug mb-1">{student.awardTitle}</p>
                    {student.donorName && (
                      <p className="italic text-accent">Endowed by: {student.donorName}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] font-sans text-muted-foreground pt-3 border-t border-border dark:border-slate-800">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="h-3.5 w-3.5 text-foreground dark:text-accent" /> Batch {student.batch}
                  </span>
                  <span>SGSITS Indore</span>
                </div>
              </div>
            )
          })}
        </div>

        {filteredMedalists.length === 0 && (
          <div className="text-center py-12 bg-card border border-border">
            <p className="font-serif text-base text-foreground">No Awardees Found</p>
            <p className="text-xs text-muted-foreground mt-1">Try adjusting your search query or department filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}
