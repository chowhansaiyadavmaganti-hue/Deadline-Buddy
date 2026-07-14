import { motion } from 'framer-motion'
import { ListChecks, Smile, Users, School } from 'lucide-react'

const stats = [
  { icon: ListChecks, value: '10,000+', label: 'Tasks Managed' },
  { icon: Smile, value: '98%', label: 'Student Satisfaction' },
  { icon: Users, value: '5,000+', label: 'Active Users' },
  { icon: School, value: '50+', label: 'Colleges' },
]

export default function TrustSection() {
  return (
    <section className="px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-center font-display text-2xl font-bold text-ink sm:text-3xl"
        >
          Helping Students Stay Organized
        </motion.h2>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-ink/5 bg-white p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon size={20} />
              </span>
              <p className="mt-4 font-display text-2xl font-extrabold text-ink sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm font-medium text-muted">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
