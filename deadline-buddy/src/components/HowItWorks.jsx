import { motion } from 'framer-motion'
import { UserPlus, ListPlus, BellRing, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Create your account',
    desc: 'Sign up in seconds and set up your student profile.',
  },
  {
    icon: ListPlus,
    title: 'Add assignments and deadlines',
    desc: 'Import or create tasks for every class in one place.',
  },
  {
    icon: BellRing,
    title: 'Receive reminders before due dates',
    desc: 'Get timely nudges so nothing slips through the cracks.',
  },
  {
    icon: TrendingUp,
    title: 'Complete tasks and monitor your progress',
    desc: 'Check things off and watch your productivity grow.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            How It Works
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Up and running in four simple steps
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-[2px] bg-gradient-to-r from-accent via-secondary to-primary lg:block" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-primary shadow-lift ring-4 ring-bg">
                <s.icon size={26} />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-bold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 max-w-[220px] text-sm text-muted">{s.desc}</p>

              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.3, duration: 0.4 }}
                  className="absolute right-[-1.25rem] top-8 hidden text-primary lg:block"
                >
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                    <path
                      d="M1 8H22M22 8L16 2M22 8L16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
