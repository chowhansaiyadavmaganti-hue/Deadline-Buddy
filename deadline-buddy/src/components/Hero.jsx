import { motion } from 'framer-motion'
import {
  Calendar,
  Clock,
  Bell,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  Play,
  ArrowUpRight,
  Flame,
} from 'lucide-react'

const floatIcons = [
  { Icon: Calendar, className: 'top-6 left-2 lg:-left-6', delay: 0, size: 22 },
  { Icon: Clock, className: 'top-1/3 -right-2 lg:-right-8', delay: 1.2, size: 24 },
  { Icon: Bell, className: 'bottom-24 -left-4 lg:-left-10', delay: 0.6, size: 20 },
  { Icon: GraduationCap, className: 'bottom-4 right-6 lg:right-0', delay: 1.8, size: 26 },
  { Icon: BookOpen, className: 'top-1/2 left-1/2 hidden lg:block', delay: 2.4, size: 20 },
]

const deadlines = [
  { subject: 'Data Structures', task: 'Problem Set 4', due: 'Today, 11:59 PM', level: 'High' },
  { subject: 'Marketing 201', task: 'Case Study Draft', due: 'Tomorrow', level: 'Medium' },
  { subject: 'Chemistry Lab', task: 'Lab Report #3', due: 'In 3 days', level: 'Low' },
]

const levelStyles = {
  High: 'bg-danger/10 text-danger',
  Medium: 'bg-warning/10 text-warning',
  Low: 'bg-success/10 text-success',
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-16 pb-24 lg:px-8 lg:pt-20 lg:pb-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
            <Flame size={14} /> Built for students, by students
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Never Miss Another <span className="text-gradient">Deadline</span> Again.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            Stay on top of assignments, exams, projects, and submissions with one
            smart productivity dashboard built for students.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button className="group relative overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Free <ArrowUpRight size={16} />
              </span>
              <span className="absolute inset-0 -z-0 scale-0 rounded-full bg-white/20 transition-transform duration-500 group-hover:scale-150" />
            </button>
            <button className="flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-all hover:border-primary/30 hover:text-primary">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Play size={12} fill="currentColor" />
              </span>
              Watch Demo
            </button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {['#7C3AED', '#A78BFA', '#C4B5FD', '#111827'].map((c, i) => (
                <span
                  key={i}
                  className="h-9 w-9 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
            <p className="text-sm text-muted">
              Joined by <span className="font-semibold text-ink">5,000+</span> students
            </p>
          </div>
        </motion.div>

        {/* Right dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/* floating icons */}
          {floatIcons.map(({ Icon, className, delay, size }, i) => (
            <motion.span
              key={i}
              className={`absolute z-20 flex h-12 w-12 items-center justify-center rounded-2xl glass text-primary shadow-card ${className}`}
              animate={{ y: [0, -14, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
            >
              <Icon size={size} />
            </motion.span>
          ))}

          {/* Main card */}
          <div className="relative rounded-3xl border border-white/60 bg-white p-6 shadow-lift">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-muted">Good afternoon, Maya</p>
                <p className="font-display text-base font-bold text-ink">Today's Deadlines</p>
              </div>
              <ProgressRing percent={68} />
            </div>

            <div className="mt-5 space-y-3">
              {deadlines.map((d) => (
                <div
                  key={d.task}
                  className="flex items-center justify-between rounded-2xl border border-ink/5 bg-bg/70 p-3.5 transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <CheckCircle2 size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{d.task}</p>
                      <p className="text-xs text-muted">{d.subject} · {d.due}</p>
                    </div>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${levelStyles[d.level]}`}>
                    {d.level}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              <StatMini value="12" label="Active" />
              <StatMini value="47" label="Done" />
              <StatMini value="98%" label="On-time" />
            </div>
          </div>

          {/* Mini calendar floating card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-8 -left-8 hidden w-48 rounded-2xl border border-white/60 bg-white p-4 shadow-lift sm:block"
          >
            <p className="text-xs font-semibold text-ink">March</p>
            <div className="mt-2 grid grid-cols-7 gap-1 text-center">
              {Array.from({ length: 21 }).map((_, i) => (
                <span
                  key={i}
                  className={`flex h-4 w-4 items-center justify-center rounded text-[8px] ${
                    [4, 11, 17].includes(i)
                      ? 'bg-primary text-white font-bold'
                      : 'text-muted'
                  }`}
                >
                  {i + 1}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ProgressRing({ percent }) {
  const r = 22
  const c = 2 * Math.PI * r
  const offset = c - (percent / 100) * c
  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <svg width="56" height="56" className="-rotate-90">
        <circle cx="28" cy="28" r={r} stroke="#F3F0FF" strokeWidth="5" fill="none" />
        <circle
          cx="28"
          cy="28"
          r={r}
          stroke="#7C3AED"
          strokeWidth="5"
          fill="none"
          strokeDasharray={c}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-xs font-bold text-ink">{percent}%</span>
    </div>
  )
}

function StatMini({ value, label }) {
  return (
    <div className="rounded-xl bg-primary/5 py-2.5 text-center">
      <p className="font-display text-base font-bold text-primary">{value}</p>
      <p className="text-[10px] font-medium text-muted">{label}</p>
    </div>
  )
}
