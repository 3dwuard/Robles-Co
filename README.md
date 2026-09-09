# Robles & Co

Landing page and client intake platform for Robles & Co, a multi-practice
law firm serving clients across Mexico — with particular strength in
real estate transactions for foreign buyers in Mexico City and Cancún.

🔗 **Live site:** [roblesandco.mx](https://roblesandco.mx)

## Features

- **Six practice areas** — Real Estate, Corporate & M&A, Banking & Finance,
  Blockchain & Fintech, Tax & Trusts, and Civil/Family/Disputes, each with
  a dedicated page
- **AI-assisted intake funnel** — qualifies leads by practice area, situation,
  and urgency, routing high-priority leads to WhatsApp and storing every
  submission in Supabase
- **Bilingual (EN/ES)** — full site translation via React Context
- **Careers page** — inquiry form for prospective attorneys
- **Bilingual privacy notice** — LFPDPPP-compliant data handling disclosure
- **Email notifications** — real-time lead alerts via Resend

## Tech Stack

- **Framework:** Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Database:** Supabase (Postgres + Row Level Security)
- **Email:** Resend
- **Hosting:** Vercel
- **Domain/DNS:** Namecheap

## Local Development

```bash
npm install
npm run dev
```

Requires a `.env.local` file with Supabase and Resend credentials (see
`SPEC.md` for the full list of required environment variables).

## Deployment

Pushes to `main` auto-deploy to production via Vercel.

## Project Documentation

See `SPEC.md` for the full technical spec, feature breakdown, and
outstanding items.