# Robles & Co — Spec

Multi-practice law firm site (Next.js 14, TypeScript, Tailwind, Supabase, Resend, Vercel), roblesandco.mx.

Pages: / (hero+video, stats, partners, AI intake, services, cases, footer) · /team · /practice-areas/[slug] (6 areas) · /careers · /aviso-de-privacidad

Funnel: 6 intake categories → describe → value/timeline → contact. WhatsApp shown only if high-value AND urgent (real estate) or just urgent (others). Saves to Supabase, emails via Resend.

Bilingual: EN/ES via React Context, covers whole site.

Outstanding: admin leads dashboard, real business email, npm audit fixes, careers form doesn't submit yet, legal review of privacy page, real headcount numbers.

Marketing (free/low-cost): Google Business Profile, Search Console/SEO, LinkedIn (partner posts), WhatsApp Business, Google Ads trial credit, referral network (developers/notaries), Instagram.

Deploy: git push → Vercel auto-deploys. Env vars needed in both .env.local and Vercel dashboard.

## Integrations & Services

- GitHub — repo / version control
- Vercel — hosting / deploy
- Supabase — database
- Resend — email notifications
- Namecheap — domain / DNS
- Zoho Mail — business email (contacto@roblesandco.mx, live)
