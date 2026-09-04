# 🎨 Designer Portfolio Website

A real-world portfolio website built and delivered for a professional UI/UX designer
(German-market client). Implemented with Next.js 16, React 19 and TypeScript, with a
mobile-first responsive design, MDX-driven content, and a Gmail OAuth2 contact form.

> **Note:** This was a paid client project delivered to production. The live deployment
> has since been retired at the client's request after project completion; the codebase
> is preserved here.

## 🚀 Tech Stack
- **Next.js 16** – React-based full-stack framework
- **React 19** – modern frontend UI library
- **TypeScript** – type safety and maintainability
- **Sass** – styling with flexibility and scalability
- **Swiper** – interactive carousels & sliders
- **MDX / gray-matter / next-mdx-remote** – content rendering from Markdown/MDX files
- **Nodemailer + Google APIs (OAuth2)** – contact-form email delivery
- **reCAPTCHA** – bot protection for form submissions

## 📦 Installation
```bash
npm install
```

## ⚙️ Environment Setup
Create a `.env` file in the root directory based on `.env.example`. You'll need:
- Google OAuth2 credentials (for Gmail sending)
- reCAPTCHA site & secret keys
- Email transport configuration

The site builds and runs without these — only the contact form's email delivery
requires them.

## 🏃 Running the Project
**Development**
```bash
npm run dev
```
**Production**
```bash
npm run build
npm run start
```

## 🎨 Features
- 📱 **Responsive design (mobile-first)** – adaptive layout for phones, tablets, desktops
- 🖼️ **Portfolio case studies** – dynamic project pages rendered from MDX
- 📧 **Contact form** – Gmail OAuth2 delivery via Nodemailer + Google APIs
- 🔒 **Spam protection** – server-side reCAPTCHA validation
- 🎞️ **Interactive UI** – carousels & sliders powered by Swiper
- 🏗️ **Component architecture** – shared UI library composed via typed MDX content

## 📂 Scripts
- `dev` – start development server
- `build` – build for production
- `start` – run production server
- `lint` – lint code with ESLint 9 (flat config)

## 🧪 Testing
No automated test suite yet — next step for this project.

## 💡 Why This Project
- ✅ **Real client delivery** – built and shipped for a professional UI/UX designer.
- ✅ **Frontend depth** – responsive design, animations, rich UI interactions.
- ✅ **Backend integration** – Gmail OAuth2 contact form with server-side reCAPTCHA.
- ✅ **Content-driven architecture** – MDX/Markdown for dynamic project content, composed
  through a reusable component library.