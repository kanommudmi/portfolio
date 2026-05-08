# 🎨 Personal Portfolio

A modern, responsive personal portfolio built with **React 19**, **TypeScript**, and **Vite**. Showcases projects, professional experience, and skills with light/dark mode, smooth animations, and a functional contact form.

## 🛠 Tech Stack

- 🎯 **Frontend**: React 19, TypeScript, Vite 7
- 🎨 **Styling**: Tailwind CSS 4, tw-animate-css
- 🧩 **UI Components**: Radix UI (dropdown, label, slot)
- 🛤 **Routing**: React Router 7
- ✨ **Animations**: GSAP
- 🔧 **Utilities**: clsx, tailwind-merge, class-variance-authority
- 📧 **Contact**: EmailJS
- 🔔 **Notifications**: Sonner
- 🚀 **Deployment**: Vercel (SPA routing via `vercel.json`)

## ✨ Features

- 📄 **Pages**: About, Experience, Projects, Contact
- 🌗 **Theme Toggle**: Light/dark mode with persistent preference
- 📱 **Responsive Design**: Mobile-optimized layouts with split JS chunks for faster loading
- 🎬 **Animations**: Smooth page and component transitions via GSAP
- 📬 **Contact Form**: Integrated with EmailJS for direct inquiries
- ✅ **Type-Safe**: Full TypeScript coverage with strict checks

## 🚀 Getting Started

### 📋 Prerequisites

- ⚡ Node.js v18+
- 📦 npm (v10+ recommended)

### 📥 Installation

```bash
npm install
```

### 💻 Development

Start the local dev server with HMR:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### 🏗 Build

Create a production-optimized build:

```bash
npm run build
```

### 👀 Preview Production Build

```bash
npm run preview
```

## 🌍 Deployment

The project is configured for seamless deployment on **Vercel** with SPA routing (rewrites all paths to `index.html` via `vercel.json`).

## 🔗 Live Demo

Add your deployed portfolio URL here, e.g., `https://portfoliov1-gilt-nu.vercel.app`
