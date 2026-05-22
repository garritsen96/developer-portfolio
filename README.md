# Tuna Hacıoğlu — Developer Portfolio

Personal portfolio website for **Tuna Hacıoğlu**, Java Developer. Built with Next.js, React, and Tailwind CSS, deployed on Vercel.

**Live site:** [https://tunahacioglu-cv.vercel.app](https://tunahacioglu-cv.vercel.app)

---

## Overview

A single-page portfolio showcasing professional background, skills, projects, education, and a working contact form. Content is driven by JSON-like data files under `utils/data/`, so updates rarely require touching UI components.

This project is based on the open-source [developer-portfolio](https://github.com/said7388/developer-portfolio) template and customized for this profile.

---

## Features

- Responsive layout with dark gradient theme and Lottie animations
- Sections: Hero, About, Experience, Skills, Projects, Education, Contact
- **Contact form** — sends messages to Gmail via Nodemailer (`/api/contact`)
- SEO metadata via Next.js Metadata API
- Optional Google Tag Manager (`NEXT_PUBLIC_GTM`)
- Docker support for local/production containers

### Currently disabled (kept in codebase)

| Feature | Status | Notes |
| -------- | ------ | ----- |
| **Blog (dev.to)** | Off | Commented out in `app/page.js` and `navbar.jsx`; components remain under `app/components/homepage/blog/` |
| **Telegram notifications** | Off | Commented out in `app/api/contact/route.js`; contact uses **email only** |

---

## Tech stack

| Technology | Version | Purpose |
| ---------- | ------- | ------- |
| Next.js | 16.x | App Router, SSR, API routes |
| React | 19.x | UI |
| Tailwind CSS | 4.x | Styling |
| SASS | — | Global/component styles |
| Nodemailer | — | Contact form emails (Gmail SMTP) |
| Lottie React | — | Hero/section animations |
| Axios | — | Contact form HTTP client |

---

## Project structure

```
developer-portfolio/
├── app/
│   ├── api/contact/route.js    # Contact API (Gmail)
│   ├── components/
│   │   ├── homepage/           # Page sections (about, projects, contact, …)
│   │   └── navbar.jsx
│   ├── layout.js               # Root layout, metadata, GTM
│   └── page.js                 # Home page sections
├── public/                     # Images, resume PDF, static assets
├── utils/data/                 # Portfolio content (edit these)
│   ├── personal-data.js
│   ├── experience.js
│   ├── projects-data.js
│   ├── skills.js
│   └── educations.js
├── .env.example                # Environment variable template
└── .env.local                  # Local secrets (not committed)
```

---

## Getting started

### Prerequisites

- **Node.js** 18.17+ (20+ recommended)
- **npm**, **pnpm**, or **yarn**

### Installation

```bash
git clone https://github.com/garritsen96/developer-portfolio.git
cd developer-portfolio
npm install
```

### Environment variables

Copy the example file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
| -------- | -------- | ----------- |
| `NEXT_PUBLIC_APP_URL` | Yes | Public site URL. Local: `http://localhost:3000` — Production: `https://tunahacioglu-cv.vercel.app` (no trailing slash) |
| `EMAIL_ADDRESS` | Yes | Gmail address that receives contact messages |
| `GMAIL_PASSKEY` | Yes | Google [App Password](https://myaccount.google.com/apppasswords) (16 characters) |
| `NEXT_PUBLIC_GTM` | No | Google Tag Manager ID |

Example `.env.local`:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
EMAIL_ADDRESS=your.email@gmail.com
GMAIL_PASSKEY=your16charapppassword
```

> Use `.env.local` for local development. Next.js loads it automatically and it is gitignored.

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # Production build
npm run start   # Run production build
npm run lint    # ESLint
```

---

## Customizing content

Edit files in `utils/data/`:

| File | Content |
| ---- | ------- |
| `personal-data.js` | Name, bio, email, phone, social links, resume path |
| `experience.js` | Work history |
| `projects-data.js` | Project cards |
| `skills.js` | Skills list |
| `educations.js` | Education entries |

**Profile image:** place the file in `public/` and set `profile` in `personal-data.js` (e.g. `'/profile.jpeg'`).

**Resume:** add PDF under `public/` and update `resume` in `personal-data.js`.

**Site title & description:** `app/layout.js` → `metadata`.

---

## Contact form

1. Visitor fills name, email, and message on the home page.
2. Client POSTs to `{NEXT_PUBLIC_APP_URL}/api/contact`.
3. Server sends email to `EMAIL_ADDRESS` with `replyTo` set to the visitor’s email.

### Gmail App Password setup

1. Enable **2-Step Verification** on your Google account.
2. Go to [App Passwords](https://myaccount.google.com/apppasswords).
3. Create a password for **Mail** → copy the 16-character code.
4. Set `GMAIL_PASSKEY` in `.env.local` (spaces optional).

### Troubleshooting contact form

| Symptom | Fix |
| ------- | --- |
| `Email configuration is missing` | Set `EMAIL_ADDRESS` and `GMAIL_PASSKEY` on Vercel and redeploy |
| Works locally, fails on Vercel | Add the same env vars in Vercel → Settings → Environment Variables, then **Redeploy** |
| Form errors after deploy | Ensure `NEXT_PUBLIC_APP_URL` matches your live domain (no trailing `/`) |
| Invalid credentials | Regenerate App Password; normal Gmail password will not work |

---

## Deployment (Vercel)

This project is deployed at **https://tunahacioglu-cv.vercel.app**.

1. Push the repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Add environment variables (Production + Preview):

   - `NEXT_PUBLIC_APP_URL` = `https://tunahacioglu-cv.vercel.app`
   - `EMAIL_ADDRESS`
   - `GMAIL_PASSKEY`
   - `NEXT_PUBLIC_GTM` (optional)

4. Deploy. Redeploy after any env change.

`.env.local` is **not** uploaded to Vercel — configure variables in the Vercel dashboard.

### Docker (optional)

```bash
# Development
docker-compose up --build

# Production image
docker build -t portfolio:prod -f Dockerfile.prod .
docker run -p 3000:3000 portfolio:prod
```

---

## Re-enabling optional features

### Blog (dev.to)

1. Uncomment `Blog` import and section in `app/page.js` (and `getData` if removed).
2. Uncomment the BLOGS link in `app/components/navbar.jsx`.
3. Restore or add `app/blog/page.js` if you need a full blog listing page.
4. Set `devUsername` in `personal-data.js` to your dev.to username.

### Telegram notifications

1. Uncomment Telegram code in `app/api/contact/route.js`.
2. Add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` to `.env.local` and Vercel.
3. Restore success check to require both Telegram and email if desired.

---

## Security notes

- Never commit `.env.local` or real App Passwords to Git.
- Keep secrets only in `.env.local` (local) and Vercel Environment Variables (production).
- `.env.example` should contain **placeholders only**.

---

## Credits

- Template: [said7388/developer-portfolio](https://github.com/said7388/developer-portfolio)
- Portfolio owner: **Tuna Hacıoğlu** — [GitHub](https://github.com/garritsen96) · [LinkedIn](https://www.linkedin.com/in/tuna-hac%C4%B1o%C4%9Flu/)

---

## License

MIT — see [LICENSE](LICENSE).
