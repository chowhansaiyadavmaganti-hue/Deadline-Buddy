import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Everything you need to get organized.',
    features: ['Unlimited tasks', 'Calendar view', 'Basic reminders', '1 device sync'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$4',
    period: '/ month',
    desc: 'For students who want the full picture.',
    features: [
      'Everything in Free',
      'Progress analytics',
      'Priority + smart reminders',
      'Unlimited device sync',
      'Priority support',
    ],
    highlight: true,
  },
  {
    name: 'Campus',
    price: 'Custom',
    period: 'per institution',
    desc: 'For universities and student organizations.',
    features: ['Everything in Pro', 'Admin dashboard', 'Bulk onboarding', 'Dedicated support'],
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Pricing
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Simple pricing, built for student budgets
          </h2>
          <p className="mt-4 text-muted">Start free. Upgrade only if you need more.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all hover:-translate-y-1.5 ${
                p.highlight
                  ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lift'
                  : 'border border-ink/5 bg-white text-ink shadow-card hover:shadow-lift'
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[11px] font-bold text-primary shadow-sm">
                  Most Popular
                </span>
              )}
              <p className="text-sm font-semibold">{p.name}</p>
              <div className="mt-3 flex items-end gap-1">
                <span className="font-display text-4xl font-extrabold">{p.price}</span>
                <span className={`pb-1 text-sm ${p.highlight ? 'text-white/70' : 'text-muted'}`}>
                  {p.period}
                </span>
              </div>
              <p className={`mt-2 text-sm ${p.highlight ? 'text-white/80' : 'text-muted'}`}>
                {p.desc}
              </p>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={p.highlight ? 'text-white' : 'text-primary'}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-full py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  p.highlight
                    ? 'bg-white text-primary shadow-lg hover:shadow-xl'
                    : 'bg-primary text-white shadow-glow hover:shadow-lift'
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
