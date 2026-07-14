import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  Calendar,
  ListTodo,
  BarChart3,
  Settings,
  MoreHorizontal,
  TrendingUp,
} from 'lucide-react'

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Calendar, label: 'Calendar' },
  { icon: ListTodo, label: 'Deadlines' },
  { icon: BarChart3, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
]

const subjects = [
  { name: 'Data Structures', tasks: 4, color: '#7C3AED' },
  { name: 'Marketing 201', tasks: 2, color: '#A78BFA' },
  { name: 'Chemistry Lab', tasks: 3, color: '#22C55E' },
  { name: 'World History', tasks: 1, color: '#F59E0B' },
]

const activity = [
  'Submitted "Problem Set 3" — Data Structures',
  'Added new deadline — Chemistry Lab Report',
  'Completed "Reading Response 2" — World History',
]

const bars = [40, 65, 50, 80, 60, 90, 70]

export default function DashboardPreview() {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Product Preview
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Your entire semester, one screen
          </h2>
          <p className="mt-4 text-muted">
            A clean, focused workspace that keeps every class, deadline, and
            achievement within reach.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-14 overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-lift"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr]">
            {/* Sidebar */}
            <aside className="border-b border-ink/5 bg-bg/60 p-5 lg:border-b-0 lg:border-r">
              <div className="mb-6 flex items-center gap-2 px-2">
                <span className="h-3 w-3 rounded-full bg-danger" />
                <span className="h-3 w-3 rounded-full bg-warning" />
                <span className="h-3 w-3 rounded-full bg-success" />
              </div>
              <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
                {sidebarItems.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className={`flex shrink-0 items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                      item.active
                        ? 'bg-primary text-white shadow-glow'
                        : 'text-muted hover:bg-primary/5 hover:text-primary'
                    }`}
                  >
                    <item.icon size={17} />
                    <span className="whitespace-nowrap">{item.label}</span>
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main content */}
            <div className="p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-lg font-bold text-ink">
                    Upcoming Deadlines
                  </p>
                  <p className="text-xs text-muted">Tuesday, March 4</p>
                </div>
                <ProgressRing percent={74} />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                {/* Today's tasks */}
                <div className="rounded-2xl border border-ink/5 bg-bg/50 p-4 lg:col-span-2">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-semibold text-ink">Today's Tasks</p>
                    <MoreHorizontal size={16} className="text-muted" />
                  </div>
                  <div className="space-y-2.5">
                    {['Problem Set 4', 'Lab Report Draft', 'Reading Ch. 7'].map(
                      (t, i) => (
                        <div
                          key={t}
                          className="flex items-center gap-3 rounded-xl bg-white p-2.5 shadow-sm"
                        >
                          <input
                            type="checkbox"
                            defaultChecked={i === 0}
                            readOnly
                            className="h-4 w-4 accent-[#7C3AED]"
                          />
                          <span
                            className={`text-sm ${
                              i === 0 ? 'text-muted line-through' : 'text-ink'
                            }`}
                          >
                            {t}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Mini calendar */}
                <div className="rounded-2xl border border-ink/5 bg-bg/50 p-4">
                  <p className="mb-3 text-sm font-semibold text-ink">March</p>
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-muted">
                    {Array.from({ length: 28 }).map((_, i) => (
                      <span
                        key={i}
                        className={`flex h-5 w-5 items-center justify-center rounded-full ${
                          [3, 8, 15, 22].includes(i)
                            ? 'bg-primary font-bold text-white'
                            : ''
                        }`}
                      >
                        {i + 1}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Productivity graph */}
                <div className="rounded-2xl border border-ink/5 bg-bg/50 p-4 lg:col-span-2">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-ink">
                      Productivity
                    </p>
                    <span className="flex items-center gap-1 text-xs font-semibold text-success">
                      <TrendingUp size={13} /> +12%
                    </span>
                  </div>
                  <div className="flex h-24 items-end gap-2">
                    {bars.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.08 }}
                        className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-accent"
                      />
                    ))}
                  </div>
                </div>

                {/* Subject cards */}
                <div className="rounded-2xl border border-ink/5 bg-bg/50 p-4">
                  <p className="mb-3 text-sm font-semibold text-ink">Subjects</p>
                  <div className="space-y-2.5">
                    {subjects.map((s) => (
                      <div key={s.name} className="flex items-center gap-2.5">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: s.color }}
                        />
                        <span className="flex-1 truncate text-xs text-ink">
                          {s.name}
                        </span>
                        <span className="text-xs font-semibold text-muted">
                          {s.tasks}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent activity */}
                <div className="rounded-2xl border border-ink/5 bg-bg/50 p-4 lg:col-span-3">
                  <p className="mb-3 text-sm font-semibold text-ink">
                    Recent Activity
                  </p>
                  <ul className="space-y-2">
                    {activity.map((a) => (
                      <li
                        key={a}
                        className="flex items-start gap-2 text-xs text-muted"
                      >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ProgressRing({ percent }) {
  const r = 26
  const c = 2 * Math.PI * r
  const offset = c - (percent / 100) * c
  return (
    <div className="relative flex h-16 w-16 items-center justify-center">
      <svg width="64" height="64" className="-rotate-90">
        <circle cx="32" cy="32" r={r} stroke="#F3F0FF" strokeWidth="6" fill="none" />
        <circle
          cx="32"
          cy="32"
          r={r}
          stroke="#7C3AED"
          strokeWidth="6"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-sm font-bold text-ink">{percent}%</span>
    </div>
  )
}
