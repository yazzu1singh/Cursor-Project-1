import { useState } from 'react'

// Placeholder image URLs – replace with your own high-res assets
const IMG = {
  hero: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=1920&q=80',
  nursery: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80',
  rootstocks: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800&q=80',
  local: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
  logistics: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&q=80',
}

const WHATSAPP_NUMBER = '919876543210' // Replace with real business number
const WHATSAPP_MSG = encodeURIComponent("Hi, I'm interested in European apple plants for my orchard in HP. Can you share details on varieties and rootstocks?")

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f6f1]/95 backdrop-blur-sm border-b border-[#ebe8e0]">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">
        <a href="#" className="font-serif text-xl sm:text-2xl font-semibold text-[#1b4d3e]">Royal Orchard Imports</a>
        <button type="button" className="sm:hidden p-2 text-[#1b4d3e]" onClick={() => setOpen(!open)} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">{open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}</svg>
        </button>
        <ul className={`absolute top-full left-0 right-0 bg-[#f8f6f1] border-b border-[#ebe8e0] sm:border-0 sm:static sm:flex sm:gap-8 ${open ? 'block' : 'hidden'} sm:flex py-4 sm:py-0 px-4 sm:px-0`}>
          {['Journey', 'Varieties', 'Why Us', 'Contact'].map((label) => (
            <li key={label}>
              <a href={`#${label.toLowerCase().replace(' ', '-')}`} className="block py-2 sm:py-0 text-[#1a1a1a] hover:text-[#1b4d3e] font-medium" onClick={() => setOpen(false)}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMG.hero} alt="Apple orchard in the mountains" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>
      <div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 pb-12 sm:pb-20 pt-24 sm:pt-28">
        <p className="font-serif text-sm sm:text-base uppercase tracking-widest text-white/90 mb-2">Rohru, Himachal Pradesh</p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl">
          Bringing Europe’s Finest Apple Varieties to the Heart of HP.
        </h1>
        <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white/95 max-w-2xl">
          Certified M9, MM106 &amp; MM111 rootstocks from European nurseries—delivered to your orchard with cold-chain care.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#varieties" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#1b4d3e] hover:bg-[#0f3329] font-medium transition-colors">View Varieties</a>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white/80 hover:bg-white/10 font-medium transition-colors">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}

function ImportJourney() {
  const steps = [
    { title: 'Selection in Europe', desc: 'We partner with certified nurseries in France, Italy & the Netherlands. Every plant is traceable and certified for rootstock and variety.', img: IMG.nursery },
    { title: 'Cold Chain Logistics', desc: 'Temperature-controlled shipping and handling from port to Rohru. Plants stay dormant and healthy throughout the journey.', img: IMG.logistics },
    { title: 'Distribution in Rohru', desc: 'Local storage and handover at our Rohru facility. We support with planting guidance and follow-up for establishment.', img: IMG.local },
  ]
  return (
    <section id="journey" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1b4d3e] text-center mb-4">The Import Journey</h2>
        <p className="text-center text-[#4a5568] max-w-2xl mx-auto mb-12 sm:mb-16">From European nurseries to your orchard—every step designed to protect quality.</p>
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="relative text-center">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#ebe8e0] mb-4">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
              </div>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1b4d3e] text-white font-serif text-lg font-semibold">{i + 1}</span>
              <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mt-3">{step.title}</h3>
              <p className="mt-2 text-[#4a5568] text-sm sm:text-base">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#2c5282]/30" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ColdChainStory() {
  return (
    <section className="py-16 sm:py-24 bg-[#f8f6f1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="flex-1">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1b4d3e] mb-4">The Cold Chain Story</h2>
          <p className="text-[#4a5568] mb-4">
            Live plants cannot survive long-haul travel without careful temperature and humidity control. We work with specialised logistics so your saplings stay <strong>dormant and hydrated</strong> from the European nursery until they reach Rohru.
          </p>
          <p className="text-[#4a5568] mb-4">
            Every consignment is tracked and handled in climate-controlled environments. Upon arrival, we acclimatise and distribute so you receive plants ready for planting in HP conditions.
          </p>
          <ul className="space-y-2 text-[#4a5568]">
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#2c5282]" /> Certified packaging for live plant transport</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#2c5282]" /> Temperature monitoring from origin to Rohru</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#2c5282]" /> Quick turnaround to minimise time in transit</li>
          </ul>
        </div>
        <div className="flex-1 w-full max-w-lg">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#ebe8e0]">
            <img src={IMG.logistics} alt="Temperature-controlled plant logistics" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

const varieties = [
  { name: 'Gala', rootstocks: 'M9, MM106', origin: 'New Zealand (EU clones)', note: 'Early, sweet, ideal for HP elevations.' },
  { name: 'Fuji', rootstocks: 'M9, MM106, MM111', origin: 'Japan (EU clones)', note: 'Crisp, stores well; strong demand.' },
  { name: 'Red Delicious', rootstocks: 'M9, MM106', origin: 'USA (EU clones)', note: 'Classic variety, proven in hills.' },
  { name: 'Golden Delicious', rootstocks: 'M9, MM106', origin: 'Europe', note: 'Pollinator and dual-purpose.' },
  { name: 'Honeycrisp', rootstocks: 'M9, MM106', origin: 'USA (EU clones)', note: 'Premium market, cold-hardy.' },
  { name: 'Granny Smith', rootstocks: 'MM106, MM111', origin: 'Australia (EU clones)', note: 'Late season, good for storage.' },
]

function VarietyCatalog() {
  return (
    <section id="varieties" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1b4d3e] text-center mb-4">Variety Catalog</h2>
        <p className="text-center text-[#4a5568] max-w-2xl mx-auto mb-12">European-grade varieties on certified rootstocks, suited to Himachal conditions.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {varieties.map((v) => (
            <article key={v.name} className="rounded-xl border border-[#ebe8e0] bg-[#f8f6f1] p-5 hover:border-[#1b4d3e]/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-xl font-semibold text-[#8b2942]">{v.name}</h3>
              <p className="mt-1 text-sm text-[#2c5282] font-medium">Rootstocks: {v.rootstocks}</p>
              <p className="mt-2 text-sm text-[#4a5568]">Origin: {v.origin}</p>
              <p className="mt-2 text-[#1a1a1a]">{v.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function RootstockEducation() {
  return (
    <section className="py-16 sm:py-24 bg-[#1b4d3e] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="flex-1 w-full max-w-lg order-2 lg:order-1">
          <div className="aspect-[4/3] rounded-xl overflow-hidden bg-white/10">
            <img src={IMG.rootstocks} alt="Certified rootstocks and saplings" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex-1 order-1 lg:order-2">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4">Why Rootstock Matters in Rohru</h2>
          <p className="text-white/90 mb-4">
            Planting from seed gives unpredictable trees: late fruiting, variable size, and poor disease resistance. <strong>Grafted plants on M9 or MM111</strong> give you known vigour, early bearing, and uniformity—critical for commercial orchards in HP.
          </p>
          <p className="text-white/90 mb-4">
            <strong>M9</strong> is dwarfing: ideal for high-density planting and easier harvest on slopes. <strong>MM106</strong> is semi-dwarf and adaptable. <strong>MM111</strong> is more vigorous and suits tougher soils and higher elevations around Rohru. We help you choose the right combination for your site.
          </p>
          <ul className="space-y-2 text-white/90">
            <li>• Early fruiting and consistent quality</li>
            <li>• Better disease and pest tolerance</li>
            <li>• Suited to HP terrain and climate</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

const whyUs = [
  { title: 'Authentic Certified Rootstocks', desc: 'Every plant is sourced from certified European nurseries with full traceability and variety assurance.', icon: '✓' },
  { title: 'Climate Adaptation', desc: 'We select varieties and rootstocks that perform in Himachal’s elevations and seasonal patterns.', icon: '✓' },
  { title: 'Expert Support', desc: 'From selection to planting and early care, our team supports you with practical, local advice.', icon: '✓' },
]

function WhyUs() {
  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#f8f6f1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1b4d3e] text-center mb-4">Why Royal Orchard Imports</h2>
        <p className="text-center text-[#4a5568] max-w-2xl mx-auto mb-12">Trust, quality, and local expertise—from Europe to your orchard.</p>
        <div className="grid sm:grid-cols-3 gap-8">
          {whyUs.map((item) => (
            <div key={item.title} className="text-center sm:text-left p-6 rounded-xl bg-white border border-[#ebe8e0] hover:border-[#1b4d3e]/30 transition-colors">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1b4d3e] text-white text-xl font-serif font-semibold">{item.icon}</span>
              <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mt-4">{item.title}</h3>
              <p className="mt-2 text-[#4a5568]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#1b4d3e] text-center mb-4">Get in Touch</h2>
          <p className="text-center text-[#4a5568] mb-8">Send a message or reach us on WhatsApp for a quick response—we know farmers prefer a chat.</p>
          {sent ? (
            <div className="rounded-xl bg-[#1b4d3e]/10 border border-[#1b4d3e]/30 p-6 text-center text-[#1b4d3e] font-medium">Thank you. We’ll get back to you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1a1a1a] mb-1">Name</label>
                <input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-[#ebe8e0] bg-[#f8f6f1] focus:outline-none focus:ring-2 focus:ring-[#1b4d3e] focus:border-transparent" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1a1a1a] mb-1">Phone / WhatsApp</label>
                <input id="phone" name="phone" type="tel" required className="w-full px-4 py-3 rounded-lg border border-[#ebe8e0] bg-[#f8f6f1] focus:outline-none focus:ring-2 focus:ring-[#1b4d3e] focus:border-transparent" placeholder="10-digit mobile number" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1a1a1a] mb-1">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-[#ebe8e0] bg-[#f8f6f1] focus:outline-none focus:ring-2 focus:ring-[#1b4d3e] focus:border-transparent resize-none" placeholder="Village, district, and what you’re looking for (varieties, quantity)…" />
              </div>
              <button type="submit" className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#1b4d3e] hover:bg-[#0f3329] text-white font-medium transition-colors">Send message</button>
            </form>
          )}
          <p className="mt-6 text-center text-sm text-[#4a5568]">Prefer to chat? Use the green WhatsApp button on this page for instant contact.</p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-10 bg-[#1a1a1a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center sm:flex sm:justify-between sm:items-center">
        <p className="font-serif text-lg font-semibold text-[#f8f6f1]">Royal Orchard Imports</p>
        <p className="mt-2 sm:mt-0 text-sm text-white/80">Rohru, Himachal Pradesh • European apple plants for Indian farmers</p>
      </div>
    </footer>
  )
}

function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Chat on WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    </a>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ImportJourney />
        <ColdChainStory />
        <VarietyCatalog />
        <RootstockEducation />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
