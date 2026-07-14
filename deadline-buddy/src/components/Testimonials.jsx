import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Maya Chen',
    school: 'UC Berkeley',
    rating: 5,
    quote:
      'Deadline Buddy completely changed how I manage my semester. I finally feel in control of my workload instead of chasing due dates.',
    color: '#7C3AED',
  },
  {
    name: 'Jordan Lee',
    school: 'University of Michigan',
    rating: 5,
    quote:
      'The reminders alone have saved me from at least three late submissions this semester. The calendar view is beautifully simple.',
    color: '#A78BFA',
  },
  {
    name: 'Priya Nair',
    school: 'NYU',
    rating: 5,
    quote:
      'I love the progress analytics. Seeing my completion rate climb every week actually keeps me motivated to keep going.',
    color: '#22C55E',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Loved by students everywhere
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col rounded-3xl border border-ink/5 bg-white p-7 shadow-card transition-all hover:-translate-y-1.5 hover:shadow-lift"
            >
              <div className="flex gap-1 text-warning">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-ink/5 pt-5">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: t.color }}
                >
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.school}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
