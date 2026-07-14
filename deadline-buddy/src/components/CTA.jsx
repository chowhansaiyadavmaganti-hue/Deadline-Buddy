import { motion } from 'framer-motion'
import { ArrowUpRight, Compass } from 'lucide-react'

export default function CTA() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-secondary px-8 py-16 text-center shadow-lift sm:px-16"
      >
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
          Ready to Stay Ahead of Every Deadline?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-sm text-white/80 sm:text-base">
          Join thousands of students using Deadline Buddy to stay productive
          and stress-free.
        </p>

        <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl">
            Get Started <ArrowUpRight size={16} />
          </button>
          <button className="flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10">
            <Compass size={16} /> Explore Features
          </button>
        </div>
      </motion.div>
    </section>
  )
}
