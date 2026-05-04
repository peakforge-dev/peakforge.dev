# peakforge.dev

Website for [Peakforge](https://peakforge.dev) — independent software studio building simple apps and useful tools.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Push to `main` — Vercel deploys automatically.

The `/whatsapp` redirect reads `PEAKFORGE_WHATSAPP_URL` from Vercel
environment variables so the WhatsApp number is not rendered in the public HTML.

## License

© Peakforge
