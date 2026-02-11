# Royal Orchard Imports – Landing Page

A modern, mobile-first landing page for **Royal Orchard Imports** (Rohru, Himachal Pradesh): European premium apple plants (M9, MM106, MM111 rootstocks) for Indian farmers.

## Tech Stack

- **React** (Vite)
- **Tailwind CSS** v4
- Mobile-first, responsive layout

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Production build: `npm run build`.

## Before going live

1. **WhatsApp** – In `src/App.jsx`, set `WHATSAPP_NUMBER` to your business number (e.g. `919812345678` with country code, no `+`).
2. **Contact form** – Wire the form to your backend or a service (e.g. Formspree, EmailJS) or rely on WhatsApp only.
3. **Images** – Replace the Unsplash placeholders in `src/App.jsx` (`IMG` object) with your own:
   - **Hero**: European orchard or HP hills.
   - **Nursery**: European nurseries / greenhouses.
   - **Rootstocks**: Macro of certified saplings with tags.
   - **Local**: Rohru facility or farmers with planted trees.
   - **Logistics**: Cold-chain / temperature-controlled transport.

## Design

- **Colours**: Forest green (primary), deep apple red (secondary), European blue (accent), off-white/cream (background).
- **Typography**: Cormorant Garamond (headings), Source Sans 3 (body).
- **Sections**: Hero, Import Journey (3 steps), Cold Chain story, Variety catalog, Rootstock education, Why Us, Contact, floating WhatsApp button.
