# 🎨 Anna Stoliarova — UX/UI Designer Portfolio

A portfolio website for Anna Stoliarova, a UX/UI designer based in Hamburg, showcasing her
design case studies. Built with Next.js 16, React 19 and TypeScript.

## 🔗 Live Demo
https://portfolio-ann-designer.vercel.app/

## 📖 Overview
This is a personal project, not paid client work. The design, content, and case studies
are Anna's own work. My contribution is the frontend engineering: I built the Next.js
codebase from her design and deployed it to production on Vercel.

The site presents four design case studies — Mikro, EasyKitchen, Vintage clothing, and a
Literary podcast — alongside an about page and a working contact form.

## 🚀 Tech Stack
- **Next.js 16** (App Router, Turbopack) – React-based full-stack framework
- **React 19** – frontend UI library
- **TypeScript** – type safety and maintainability
- **Sass** – component-scoped styling (CSS Modules)
- **Swiper** – interactive carousels & sliders
- **MDX / gray-matter / next-mdx-remote** – content authored as Markdown/MDX
- **Nodemailer + Google APIs (OAuth2)** – contact-form email delivery via Gmail
- **react-google-recaptcha** – bot protection for form submissions

## 🎨 Features
- 🖼️ **Design case studies** – four in-depth project pages (Mikro, EasyKitchen, Vintage
  clothing, Literary podcast) rendered from MDX content
- 📱 **Responsive layout** – mobile-first design across all pages
- 📧 **Contact form** – submits to a Next.js API route (`app/api/route.ts`), which sends
  the message via Gmail using Nodemailer with OAuth2 (`lib/mailer.utils.ts`)
- 🔒 **Spam protection** – reCAPTCHA token generated client-side and verified
  server-side before any email is sent
- ⚖️ **Legal pages** – Impressum and Datenschutz (German-language legal notices, as
  required for a German audience) at `/policy/impressum` and `/policy/datenschutz`

> Note: the site's UI copy is in English throughout; only the Impressum/Datenschutz pages
> are in German, per German legal requirements. There is no EN/DE language switcher.

## 📦 Getting Started
```bash
npm install
npm run dev
```

**Production build**
```bash
npm run build
npm run start
```

### Environment variables
The contact form needs the following variables, set in the Vercel dashboard (or a local
`.env` file, never committed — see `.env.example`):

- `EMAIL_USERNAME`
- `PERSONAL_EMAIL`
- `CLIENT_ID`
- `CLIENT_SECRET`
- `REFRESH_TOKEN`
- `NEXT_PUBLIC_SITE_KEY_RECAPTCHA`
- `SECRET_KEY_RECAPTCHA`

The site builds and runs without them — only the contact form's email delivery depends
on these being configured.

## 📂 Project Structure
```
app/            Next.js App Router pages (home, about, projects, contact, policy, api)
components/     UI components, organized per page/section
content/        MDX content for pages and case studies
lib/            Content loading (getPropsData) and the mailer utility
interfaces/     Shared TypeScript types
styles/         Global Sass (variables, mixins, fonts, colors)
public/         Images, fonts, icons
```

## 🧪 Roadmap
- Add automated test coverage (no test suite exists yet)

## 💡 Why This Project
- ✅ **Design-to-code collaboration** – translated Anna's UX/UI designs into a
  production Next.js codebase.
- ✅ **Content-driven architecture** – MDX-based case studies composed from a reusable
  component library.
- ✅ **Backend integration** – a working contact form with Gmail OAuth2 delivery and
  server-side reCAPTCHA validation.
