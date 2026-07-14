import { useState } from 'react'
import { CalendarCheck2, Twitter, Instagram, Linkedin, Github, ArrowRight } from 'lucide-react'

const linkGroups = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'How It Works'],
  },
  {
    title: 'Company',
    links: ['Privacy Policy', 'Terms', 'Contact'],
  },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <footer className="border-t border-ink/5 px-6 pt-16 pb-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Logo + blurb */}
          <div>
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white">
                <CalendarCheck2 size={20} strokeWidth={2.4} />
              </span>
              <span className="font-display text-lg font-bold text-ink">
                Deadline Buddy
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted">
              The smart productivity dashboard that helps students stay
              organized and stress-free, one deadline at a time.
            </p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {linkGroups.map((g) => (
            <div key={g.title}>
              <p className="text-sm font-semibold text-ink">{g.title}</p>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-primary"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <p className="text-sm font-semibold text-ink">Stay in the loop</p>
            <p className="mt-4 text-sm text-muted">
              Get product tips and study hacks in your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="mt-4 flex items-center overflow-hidden rounded-full border border-ink/10 bg-white pl-4 focus-within:border-primary"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@school.edu"
                className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-muted/70"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-105 m-1"
              >
                <ArrowRight size={15} />
              </button>
            </form>
            {submitted && (
              <p className="mt-2 text-xs font-medium text-success">
                Thanks — check your inbox to confirm.
              </p>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink/5 pt-8 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Deadline Buddy. All rights reserved.</p>
          <p>Made for students who refuse to miss a deadline.</p>
        </div>
      </div>
    </footer>
  )
}
