import { motion } from 'framer-motion'
import {
  Sparkles,
  CalendarDays,
  Flag,
  BellRing,
  BarChart3,
  SearchCheck,
} from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Smart Deadline Tracking',
    desc: 'Automatically organize all assignments and due dates.',
  },
  {
    icon: CalendarDays,
    title: 'Calendar View',
    desc: 'Visualize upcoming deadlines with an interactive calendar.',
  },
  {
    icon: Flag,
    title: 'Priority Levels',
    desc: 'High, Medium, and Low priority with color-coded labels.',
  },
  {
    icon: BellRing,
    title: 'Reminder Notifications',
    desc: 'Receive browser notifications before important deadlines.',
  },
  {
    icon: BarChart3,
    title: 'Progress Analytics',
    desc: 'Track completed tasks and productivity with charts.',
  },
  {
    icon: SearchCheck,
    title: 'Search & Filters',
    desc: 'Instantly find assignments by subject, date, or priority.',
  },
]

export default function Features() {
  return (
    <section id="features" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Features
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Everything you need to stay ahead
          </h2>
          <p className="mt-4 text-muted">
            A complete toolkit for organizing your academic life, designed to
            reduce stress and boost your productivity.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group rounded-3xl border border-ink/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-lift"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <f.icon size={22} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
