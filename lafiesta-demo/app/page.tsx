'use client'
import React from 'react'
import { Phone, MapPin, Clock, Instagram, Facebook, UtensilsCrossed, Sparkles, Star, Mail, Menu as MenuIcon, X, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const HOURS = [
  { day: 'Mon', hours: '11:00 AM – 9:00 PM' },
  { day: 'Tue', hours: '11:00 AM – 9:00 PM' },
  { day: 'Wed', hours: '11:00 AM – 9:00 PM' },
  { day: 'Thu', hours: '11:00 AM – 9:00 PM' },
  { day: 'Fri', hours: '11:00 AM – 10:00 PM' },
  { day: 'Sat', hours: '11:00 AM – 10:00 PM' },
  { day: 'Sun', hours: '11:00 AM – 8:00 PM' },
]

const MENU = [
  {
    section: 'Signature Plates',
    items: [
      { name: 'Carne Asada Plate', desc: 'Marinated skirt steak, grilled onions, guacamole, pico, rice & beans.', price: 19.5 },
      { name: 'Pollo en Mole', desc: 'Chicken in rich house mole, sesame, rice & beans.', price: 17.0 },
      { name: 'Camarones a la Diabla', desc: 'Spicy red-chile prawns, rice, beans & tortillas.', price: 20.0 },
    ],
  },
  {
    section: 'Street Tacos (3)',
    items: [
      { name: 'Al Pastor', desc: 'Adobo pork, pineapple, cilantro & onion.', price: 12.0 },
      { name: 'Asada', desc: 'Grilled steak, cilantro & onion.', price: 13.0 },
      { name: 'Veggie', desc: 'Seasonal vegetables, avocado, salsa verde.', price: 11.0 },
    ],
  },
  {
    section: 'Shareables',
    items: [
      { name: 'Queso Fundido', desc: 'Melted cheese, poblano, house chorizo, tortillas.', price: 11.0 },
      { name: 'Guacamole', desc: 'Hass avocado, lime, cilantro, serrano, chips.', price: 9.5 },
      { name: 'Street Corn', desc: 'Grilled corn, cotija, lime, chile.', price: 7.5 },
    ],
  },
]

const GALLERY = [
  'https://s3-media0.fl.yelpcdn.com/bphoto/XMkhtkDdLOjMS3GMK0IdJg/l.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/mV6uXap8fLFqq6hlFBMw4Q/l.jpg',
  'https://s3-media0.fl.yelpcdn.com/bphoto/6oRWhWgBpiHEKH0EhjhD9g/l.jpg',
  'https://media-cdn.tripadvisor.com/media/photo-m/1280/2d/98/96/11/delicious-mangonada-margarita.jpg',
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/19/29/0f/fiesta-mexicana.jpg?w=1600&h=1200&fit=crop',
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/d4/d4/28/la-fiesta-grande-restaurante.jpg?w=1600&h=1200&fit=crop',
  'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/a6/0d/c3/la-fiesta.jpg?w=1600&h=1200&fit=crop',
  'https://s3-media0.fl.yelpcdn.com/bphoto/Sl0fMX1cqFQpAE0wSab00g/l.jpg',
]

const PHONE_NUMBER = '+1 (541) 963-3474'
const ADDRESS = '1802 Adams Ave, La Grande, OR 97850'

const Section = ({ id, title, subtitle, children }: any) => (
  <section id={id} className="py-16 md:py-24" aria-labelledby={`${id}-title`}>
    <div className="container px-4 max-w-7xl mx-auto">
      <div className="mb-8 md:mb-12">
        <h2 id={`${id}-title`} className="text-3xl md:text-4xl font-extrabold tracking-tight">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
)

const NavLink = ({ href, label, onClick }: any) => (
  <a href={href} onClick={onClick} className="text-sm font-medium text-foreground/90 hover:opacity-80">
    {label}
  </a>
)

export default function Page(){
  const [open, setOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <div className="w-full bg-primary text-primary-foreground text-sm">
        <div className="container px-4 py-2 max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4" />{PHONE_NUMBER}</span>
            <span className="hidden sm:inline-flex items-center gap-2"><Clock className="h-4 w-4" /> Open today • 11a–9p</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/" aria-label="Instagram" className="hover:opacity-80"><Instagram className="h-4 w-4"/></a>
            <a href="https://www.facebook.com/" aria-label="Facebook" className="hover:opacity-80"><Facebook className="h-4 w-4"/></a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b">
        <div className="container px-4 max-w-7xl mx-auto h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <UtensilsCrossed className="h-6 w-6 text-primary"/>
            <span className="font-bold tracking-tight">La Fiesta Mexican Restaurant & Lounge</span>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#menu" label="Menu"/>
            <NavLink href="#specials" label="Specials"/>
            <NavLink href="#hours" label="Hours"/>
            <NavLink href="#photos" label="Photos"/>
            <NavLink href="#visit" label="Visit"/>
          </nav>
          <div className="flex items-center gap-2">
            <Button size="sm" className="hidden sm:inline-flex" asChild>
              <a href={`tel:${PHONE_NUMBER.replace(/[^\\d+]/g, '')}`}><Phone className="mr-2 h-4 w-4"/> Call</a>
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
              {open ? <X className="h-5 w-5"/> : <MenuIcon className="h-5 w-5"/>}
            </Button>
          </div>
        </div>
        {open && (
          <div className="md:hidden border-t bg-background">
            <div className="container px-4 py-3 mx-auto flex flex-col gap-3">
              <NavLink href="#menu" label="Menu" onClick={() => setOpen(false)} />
              <NavLink href="#specials" label="Specials" onClick={() => setOpen(false)} />
              <NavLink href="#hours" label="Hours" onClick={() => setOpen(false)} />
              <NavLink href="#photos" label="Photos" onClick={() => setOpen(false)} />
              <NavLink href="#visit" label="Visit" onClick={() => setOpen(false)} />
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="absolute inset-0">
          <img
            src="https://s3-media0.fl.yelpcdn.com/bphoto/kh7joFJQYQYozazTl2un0A/l.jpg"
            alt="La Fiesta Mexican Restaurant exterior in La Grande, Oregon"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/90"/>
        </div>
        <div className="relative container px-4 max-w-7xl mx-auto py-28 md:py-40">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground mb-6">
              <Sparkles className="h-4 w-4"/>
              <span className="text-sm font-semibold">La Grande’s Favorite Mexican Since 1995</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Bold, Fresh, & Fiesta-Ready</h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">Family-owned Mexican classics, margaritas that sparkle, and a warm La Grande welcome. Dine-in, takeout, or call ahead.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#menu"><UtensilsCrossed className="mr-2 h-5 w-5"/> View Menu</a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href={`tel:${PHONE_NUMBER.replace(/[^\\d+]/g, '')}`}><Phone className="mr-2 h-5 w-5"/> Call to Order</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specials */}
      <Section id="specials" title="Weekly Specials" subtitle="Rotating deals on tacos, margaritas, and family trays. Ask about today’s chef special!">
        <div className="grid md:grid-cols-3 gap-6">
          {["Taco Tuesday • $2 off", "Fajita Friday • Sizzle Platter", "Weekend Margaritas • 2 for $12"].map((txt, i) => (
            <Card key={i} className="border-muted/40">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-bold">{txt.split(" • ")[0]}</CardTitle>
                <Star className="h-5 w-5"/>
              </CardHeader>
              <CardContent className="text-muted-foreground">{txt.split(" • ")[1]}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Menu */}
      <Section id="menu" title="Menu" subtitle="Hand‑pressed tortillas • House salsas • Local ingredients where possible">
        <div className="grid md:grid-cols-3 gap-6">
          {MENU.map((group) => (
            <Card key={group.section} className="border-muted/40">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{group.section}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {group.items.map((it) => (
                  <div key={it.name} className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold leading-tight">{it.name}</h4>
                      <p className="text-sm text-muted-foreground">{it.desc}</p>
                    </div>
                    <div className="shrink-0 font-semibold">${it.price.toFixed(2)}</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-sm text-muted-foreground">* Menu & prices are sample content for demo. Replace with current items.</div>
      </Section>

      {/* Hours & Amenities */}
      <Section id="hours" title="Hours & Amenities" subtitle="We’re open seven days a week. Walk‑ins welcome; call ahead for large groups.">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-muted/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5"/> Today’s Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 text-sm">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex items-center justify-between">
                    <span className="font-medium">{h.day}</span>
                    <span className="text-muted-foreground">{h.hours}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-muted/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5"/> Good to Know</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><UtensilsCrossed className="h-4 w-4"/> Dine‑In & Takeout</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4"/> House Margaritas</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Easy Parking</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4"/> Family‑Friendly</div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Photos / Gallery */}
      <Section id="photos" title="Photo Gallery" subtitle="A peek at the plates, drinks, and vibes">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {GALLERY.map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-2xl shadow-lg">
              <img src={src} alt={`Dish ${i+1}`} className="h-44 md:h-56 w-full object-cover hover:scale-105 transition-transform"/>
            </div>
          ))}
        </div>
      </Section>

      {/* Visit / Map & Contact */}
      <Section id="visit" title="Visit Us" subtitle="We can’t wait to welcome you!">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Card className="border-muted/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5"/> Find Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{ADDRESS}</p>
              <div className="aspect-video w-full overflow-hidden rounded-2xl border">
                <iframe
                  title="Google Map to La Fiesta Mexican Restaurant"
                  src="https://www.google.com/maps?q=1802%20Adams%20Ave%2C%20La%20Grande%2C%20OR%2097850&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild><a href={`tel:${PHONE_NUMBER.replace(/[^\\d+]/g, '')}`}><Phone className="mr-2 h-4 w-4"/> Call</a></Button>
                <Button variant="secondary" asChild><a href="https://maps.google.com/?q=La+Fiesta+Mexican+Restaurant+%26+Lounge+La+Grande+OR"><MapPin className="mr-2 h-4 w-4"/> Directions</a></Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-muted/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Mail className="h-5 w-5"/> Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4" onSubmit={(e)=> e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your name" required />
                  <Input type="email" placeholder="Email address" required />
                </div>
                <Input placeholder="Phone (optional)" />
                <Textarea placeholder="What can we help you with? (catering, reservation, large party, feedback)" rows={5} />
                <Button type="submit">Send Message</Button>
                <p className="text-xs text-muted-foreground">* Demo form – connect to email or CRM for production.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container px-4 max-w-7xl mx-auto py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <UtensilsCrossed className="h-5 w-5 text-primary"/>
              <span className="font-bold">La Fiesta Mexican Restaurant & Lounge</span>
            </div>
            <p className="text-sm text-muted-foreground">{ADDRESS}</p>
            <a className="text-sm inline-flex items-center gap-2 mt-2 hover:underline" href={`tel:${PHONE_NUMBER.replace(/[^\\d+]/g, '')}`}>
              <Phone className="h-4 w-4"/> {PHONE_NUMBER}
            </a>
          </div>
          <div className="text-sm">
            <p className="font-semibold mb-2">Quick Links</p>
            <ul className="space-y-2">
              <li><a className="hover:underline" href="#menu">Menu</a></li>
              <li><a className="hover:underline" href="#specials">Specials</a></li>
              <li><a className="hover:underline" href="#hours">Hours</a></li>
              <li><a className="hover:underline" href="#visit">Visit</a></li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="font-semibold mb-2">Stay in touch</p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/" aria-label="Instagram" className="hover:opacity-80"><Instagram className="h-5 w-5"/></a>
              <a href="https://www.facebook.com/" aria-label="Facebook" className="hover:opacity-80"><Facebook className="h-5 w-5"/></a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">© {new Date().getFullYear()} La Fiesta. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-4 inset-x-0 px-4 md:hidden">
        <div className="mx-auto max-w-md rounded-2xl shadow-lg border bg-background/95 backdrop-blur p-3 flex items-center justify-between">
          <a href={`tel:${PHONE_NUMBER.replace(/[^\\d+]/g, '')}`} className="flex items-center gap-2 font-semibold"><Phone className="h-5 w-5"/> Call</a>
          <a href="#menu" className="flex items-center gap-2 font-semibold"><UtensilsCrossed className="h-5 w-5"/> Menu</a>
          <a href="https://maps.google.com/?q=La+Fiesta+Mexican+Restaurant+%26+Lounge+La+Grande+OR" className="flex items-center gap-2 font-semibold"><MapPin className="h-5 w-5"/> Directions</a>
        </div>
      </div>

      {/* JSON-LD Schema (Restaurant) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "La Fiesta Mexican Restaurant & Lounge",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1802 Adams Ave",
              addressLocality: "La Grande",
              addressRegion: "OR",
              postalCode: "97850",
              addressCountry: "US",
            },
            telephone: "+15419633474",
            servesCuisine: ["Mexican", "Latin"],
            url: "https://example.com/la-fiesta",
            openingHoursSpecification: HOURS.map(h => ({
              "@type": "OpeningHoursSpecification",
              dayOfWeek: h.day,
              opens: "11:00",
              closes: h.day === 'Fri' || h.day === 'Sat' ? '22:00' : (h.day === 'Sun' ? '20:00' : '21:00')
            })),
            priceRange: "$$",
          }),
        }}
      />
    </div>
  )
}
