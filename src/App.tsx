import { useState } from 'react'

type Section = 'home' | 'work' | 'events' | 'now' | 'archive' | 'contact'

const HERO_IMG = 'https://images.unsplash.com/photo-1590677481249-19b1afb5af8d?w=1920&h=1200&fit=crop&auto=format'

// ─── data ────────────────────────────────────────────────────────────────────

const work = [
  { year: '2026', title: 'Entrika - Reading the Fine Print', type: 'Web Application & Browser Extension', location: 'Meguro, Tokyo' },
  { year: '2026', title: 'Am I the Villain?', type: 'Web Application', location: 'Meguro, Tokyo' },
  { year: '2026', title: 'Resident @ OUCH - Exhibiton', type: 'Installation', location: 'Zollgarage, Berlin' },
  { year: '2023', title: 'Live Painting for Earthquake Relief Event', type: 'Performance w/ Batikan Kilicaslan', location: 'Gazhane Museum, Istanbul' },
  { year: '2022', title: 'Photographer - Altin Gun', type: 'Comission Work', location: 'Kucukciftlik Park, Istanbul' },
  { year: '2022', title: 'Photographer - Franz Ferdinand', type: 'Comission Work', location: 'LifePark, Istanbul' },
]

const events = [
  { date: 'Aug 09', title: 'Workshop: Feedback Loops', venue: 'CTM Festival', city: 'Berlin' },
  { date: 'Aug 22', title: 'Live Set', venue: 'Tresor', city: 'Berlin' },
  { date: 'Sep 14', title: 'Panel: DIY Distribution', venue: 'Unsound', city: 'Kraków' },
  { date: 'Oct 03', title: 'Residency Open Studio', venue: 'Monom', city: 'Berlin' },
]

const now = {
  film: [
    { title: 'Pulse (Cairo)', dir: 'Kiyoshi Kurasawa', year: '1999' },
    { title: 'In the Mood for Love', dir: 'Wong Kar-wai', year: '2000' },
  ],
  books: [
    { title: 'Tombs of Atuan', author: 'Ursula K. Le Guin' },
    { title: 'Left Hand of Darkness', author: 'John Berger' },
    { title: 'Dune: Messiah', author: 'Frank Herbert' },
  ],
  music: [
    { title: 'Blood Orange - Essex Honey' },
    { title: 'Headache — Thank You for Almost Everything' },
    { title: 'Bassvictim — Basspunk' },
  ],
}

const archive = [
  { year: '2022', title: 'Tape Loop Evening', type: 'event' },
  { year: '2022', title: 'Collaborations Vol. 2', type: 'release' },
  { year: '2021', title: 'RADIO PIECE #001', type: 'media' },
  { year: '2021', title: 'Open Air — Parking Lot Sessions', type: 'event' },
  { year: '2020', title: 'Isolation Recordings', type: 'release' },
  { year: '2019', title: 'First Live Set', type: 'event' },
]

// ─── nav ─────────────────────────────────────────────────────────────────────

function Nav({ active, go }: { active: Section; go: (s: Section) => void }) {
  const links: { label: string; key: Section }[] = [
    { label: 'work', key: 'work' },
    { label: 'events', key: 'events' },
    { label: 'now', key: 'now' },
    { label: 'archive', key: 'archive' },
    { label: 'contact', key: 'contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-baseline justify-between px-5 py-4 mix-blend-difference">
      <button
        onClick={() => go('home')}
        className="text-[#c8ff00] tracking-widest uppercase text-xs hover:opacity-70 transition-opacity"
        style={{ fontFamily: 'Fragment Mono, monospace', letterSpacing: '0.2em' }}
      >
        arha.archive ↗
      </button>
      <nav className="flex gap-8">
        {links.map(({ label, key }) => (
          <button
            key={key}
            onClick={() => go(key)}
            className="text-[#c8ff00] uppercase text-xs tracking-widest transition-opacity"
            style={{
              fontFamily: 'Fragment Mono, monospace',
              letterSpacing: '0.2em',
              opacity: active === key ? 1 : 0.55,
              borderBottom: active === key ? '1px solid #c8ff00' : 'none',
              paddingBottom: active === key ? '1px' : '2px',
            }}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}

// ─── home ────────────────────────────────────────────────────────────────────

function Home({ go }: { go: (s: Section) => void }) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={HERO_IMG}
        alt="people crossing street at night"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'grayscale(20%) contrast(1.05)' }}
      />
      {/* very light dark wash only at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: 'linear-gradient(to top, rgba(13,13,13,0.6) 0%, transparent 100%)' }} />

      {/* bottom nav overlay like feralnode */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 flex items-end justify-between">
        <p
          className="text-[#c8ff00]"
          style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontSize: 'clamp(2.8rem, 7vw, 6rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.02em' }}
        >
          arha.archive
        </p>
        <div className="flex flex-col items-end gap-1 pb-2">
          {(['work', 'events', 'now', 'archive', 'contact'] as Section[]).map(s => (
            <button
              key={s}
              onClick={() => go(s)}
              className="text-[#c8ff00] uppercase hover:opacity-60 transition-opacity text-right"
              style={{ fontFamily: 'Fragment Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.25em' }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── work ────────────────────────────────────────────────────────────────────

function Work() {
  return (
    <section className="min-h-screen px-5 pt-24 pb-20" style={{ background: '#000000', color: '#f5ff47' }}>
      <h2
        className="mb-10"
        style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.02em', color: '#f5ff47' }}
      >
        Work
      </h2>
      <div className="border-t border-[#f5ff47] border-opacity-70">
        {work.map((item, i) => (
          <div
            key={i}
            className="grid border-b border-[#f5ff47] border-opacity-30 py-4 group cursor-pointer hover:bg-[#f5ff47] hover:text-[#000000] transition-colors duration-150"
            style={{ gridTemplateColumns: '4rem 1fr auto auto', gap: '1.5rem', alignItems: 'baseline' }}
          >
            <span style={{ fontFamily: 'Fragment Mono', fontSize: '0.7rem', opacity: 0.8 }}>{item.year}</span>
            <span style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1.15rem' }}>{item.title}</span>
            <span style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', opacity: 0.8, whiteSpace: 'nowrap' }}>{item.type}</span>
            <span style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', opacity: 0.8, whiteSpace: 'nowrap' }}>{item.location}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── events ──────────────────────────────────────────────────────────────────

function Events() {
  return (
    <section className="min-h-screen px-5 pt-24 pb-20" style={{ background: '#0d0d0d', color: '#f2efe9' }}>
      <h2
        className="mb-10"
        style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.02em', color: '#c8ff00' }}
      >
        Events
      </h2>
      <div className="border-t border-[#f2efe9] border-opacity-20">
        {events.map((ev, i) => (
          <div
            key={i}
            className="grid border-b py-5 hover:bg-[#f2efe9] hover:text-[#0d0d0d] transition-colors duration-150 cursor-pointer group"
            style={{ gridTemplateColumns: '5rem 1fr auto', gap: '2rem', alignItems: 'baseline', borderColor: 'rgba(242,239,233,0.15)' }}
          >
            <span style={{ fontFamily: 'Fragment Mono', fontSize: '0.7rem', color: '#c8ff00' }} className="group-hover:text-[#0d0d0d]">{ev.date}</span>
            <div>
              <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1.2rem' }}>{ev.title}</div>
              <div style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', opacity: 0.5 }}>{ev.venue}</div>
            </div>
            <span style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', opacity: 0.5, whiteSpace: 'nowrap' }}>{ev.city}</span>
          </div>
        ))}
      </div>
      <p className="mt-12" style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', opacity: 0.35 }}>
        past dates → archive
      </p>
    </section>
  )
}

// ─── now ─────────────────────────────────────────────────────────────────────

function Now() {
  return (
    <section className="min-h-screen px-5 pt-24 pb-20" style={{ background: '#000000', color: '#f5ff47' }}>
      <h2
        className="mb-2"
        style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.02em', color: '#f5ff47' }}
      >
        Now
      </h2>
      <p className="mb-12" style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', opacity: 0.7 }}>
        what i'm into at the moment — updated irregularly
      </p>

      <div className="grid gap-12" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
        {/* film */}
        <div>
          <h3 className="border-b border-[#f5ff47] pb-2 mb-5 uppercase" style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#f5ff47' }}>
            Film
          </h3>
          {now.film.map((f, i) => (
            <div key={i} className="mb-4">
              <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1rem', fontStyle: 'italic' }}>{f.title}</div>
              <div style={{ fontFamily: 'Fragment Mono', fontSize: '0.62rem', opacity: 0.7 }}>{f.dir} · {f.year}</div>
            </div>
          ))}
        </div>

        {/* books */}
        <div>
          <h3 className="border-b border-[#f5ff47] pb-2 mb-5 uppercase" style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#f5ff47' }}>
            Books
          </h3>
          {now.books.map((b, i) => (
            <div key={i} className="mb-4">
              <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1rem', fontStyle: 'italic' }}>{b.title}</div>
              <div style={{ fontFamily: 'Fragment Mono', fontSize: '0.62rem', opacity: 0.7 }}>{b.author}</div>
            </div>
          ))}
        </div>

        {/* music */}
        <div>
          <h3 className="border-b border-[#f5ff47] pb-2 mb-5 uppercase" style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#f5ff47' }}>
            Music
          </h3>
          {now.music.map((m, i) => (
            <div key={i} className="mb-3">
              <div style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1rem' }}>{m.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── archive ─────────────────────────────────────────────────────────────────

function Archive() {
  const [filter, setFilter] = useState<string | null>(null)
  const types = ['event', 'release', 'media']
  const filtered = filter ? archive.filter(a => a.type === filter) : archive

  return (
    <section className="min-h-screen px-5 pt-24 pb-20" style={{ background: '#0d0d0d', color: '#f2efe9' }}>
      <h2
        className="mb-8"
        style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.02em', color: '#c8ff00' }}
      >
        arha.archive
      </h2>

      {/* filter pills */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => setFilter(null)}
          style={{
            fontFamily: 'Fragment Mono',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            borderBottom: filter === null ? '1px solid #c8ff00' : '1px solid transparent',
            color: filter === null ? '#c8ff00' : 'rgba(242,239,233,0.4)',
            background: 'none',
            cursor: 'pointer',
            paddingBottom: '2px',
          }}
        >
          all
        </button>
        {types.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t === filter ? null : t)}
            style={{
              fontFamily: 'Fragment Mono',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              borderBottom: filter === t ? '1px solid #c8ff00' : '1px solid transparent',
              color: filter === t ? '#c8ff00' : 'rgba(242,239,233,0.4)',
              background: 'none',
              cursor: 'pointer',
              paddingBottom: '2px',
            }}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="border-t" style={{ borderColor: 'rgba(242,239,233,0.15)' }}>
        {filtered.map((item, i) => (
          <div
            key={i}
            className="grid border-b py-4 hover:bg-[#f2efe9] hover:text-[#0d0d0d] transition-colors duration-150 cursor-pointer group"
            style={{ gridTemplateColumns: '4rem 1fr auto', gap: '2rem', alignItems: 'baseline', borderColor: 'rgba(242,239,233,0.15)' }}
          >
            <span style={{ fontFamily: 'Fragment Mono', fontSize: '0.7rem', color: '#c8ff00' }} className="group-hover:text-[#0d0d0d]">{item.year}</span>
            <span style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1.05rem' }}>{item.title}</span>
            <span style={{ fontFamily: 'Fragment Mono', fontSize: '0.62rem', opacity: 0.4, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{item.type}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── contact ─────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section className="min-h-screen px-5 pt-24 pb-20 flex flex-col justify-between" style={{ background: '#000000', color: '#f5ff47' }}>
      <div>
        <h2
          className="mb-16"
          style={{ fontFamily: 'Big Shoulders Display, sans-serif', fontSize: 'clamp(3rem, 8vw, 7rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.02em', color: '#f5ff47' }}
        >
          Contact
        </h2>

        <div className="grid gap-16" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
          {/* direct */}
          <div>
            <h3 className="border-b border-[#f5ff47] pb-2 mb-6 uppercase" style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#f5ff47' }}>
              Direct
            </h3>
            <a
              href="mailto:hello@yourname.com"
              className="block hover:text-[#000000] hover:bg-[#f5ff47] -mx-2 px-2 py-1 transition-colors duration-150"
              style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1.1rem', fontStyle: 'italic' }}
            >
              hello@yourname.com ↗
            </a>
            <p className="mt-3" style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', opacity: 0.7 }}>
              bookings, collabs, questions
            </p>
          </div>

          {/* elsewhere */}
          <div>
            <h3 className="border-b border-[#f5ff47] pb-2 mb-6 uppercase" style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#f5ff47' }}>
              Elsewhere
            </h3>
            {[
              { label: 'Bandcamp', href: '#' },
              { label: 'SoundCloud', href: '#' },
              { label: 'Letterboxd', href: '#' },
              { label: 'Are.na', href: '#' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-baseline justify-between border-b py-3 hover:bg-[#f5ff47] hover:text-[#000000] -mx-2 px-2 transition-colors duration-150 group"
                style={{ borderColor: 'rgba(245,255,71,0.35)' }}
              >
                <span style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1rem' }}>{label}</span>
                <span style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', opacity: 0.7 }} className="group-hover:opacity-100">↗</span>
              </a>
            ))}
          </div>

          {/* based */}
          <div>
            <h3 className="border-b border-[#f5ff47] pb-2 mb-6 uppercase" style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', letterSpacing: '0.2em', color: '#f5ff47' }}>
              Based
            </h3>
            <p style={{ fontFamily: 'Instrument Serif, serif', fontSize: '1.1rem' }}>Berlin, DE</p>
            <p className="mt-1" style={{ fontFamily: 'Fragment Mono', fontSize: '0.65rem', opacity: 0.7 }}>
              available for travel
            </p>
          </div>
        </div>
      </div>

      <p style={{ fontFamily: 'Fragment Mono', fontSize: '0.6rem', opacity: 0.6 }}>
        no instagram. this is the place.
      </p>
    </section>
  )
}

// ─── root ────────────────────────────────────────────────────────────────────

export default function App() {
  const [section, setSection] = useState<Section>('home')

  return (
    <div style={{ background: '#0d0d0d', minHeight: '100vh' }}>
      <Nav active={section} go={setSection} />
      {section === 'home'    && <Home go={setSection} />}
      {section === 'work'    && <Work />}
      {section === 'events'  && <Events />}
      {section === 'now'     && <Now />}
      {section === 'archive' && <Archive />}
      {section === 'contact' && <Contact />}
    </div>
  )
}
