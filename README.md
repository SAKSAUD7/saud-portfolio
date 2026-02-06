# Saud Ali Khan - Premium Developer Portfolio

A high-performance, cinematic full-stack developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Designed to showcase professional work with a premium, mobile-responsive UI, rich animations, and a seamless user experience.

![Portfolio Preview](/public/images/profile%20image%20sak.png)

## 🚀 Features

*   **Premium UI/UX:** Glassmorphism effects, smooth gradients, and cinematic animations using `framer-motion`.
*   **Fully Responsive:** optimized for all devices with a desktop-parity mobile experience.
*   **Interactive Projects:** Custom lightbox galleries and detailed case study pages for each project.
*   **Performance First:** Server Components for best-in-class SEO and load times.
*   **Type Safe:** Built entirely with TypeScript for reliability.

## 🛠️ Tech Stack

*   **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Deployment:** [Vercel](https://vercel.com/)

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router pages
│   ├── page.tsx          # Homepage
│   └── projects/[slug]/  # Dynamic Project Detail pages
├── components/           # Reusable UI components
│   ├── ui/               # Core atomic components (Hero, Navbar, StatsCards)
│   ├── sections/         # Homepage sections (ProjectGrid, Experience, Skills)
│   └── projects/         # Project-specific components (ProjectDetailClient)
├── data/                 # Static data files
│   └── projects.ts       # Structured project content including rich details
└── public/               # Static assets (images, fonts)
```

## ⚡ Getting Started

### Prerequisites

Ensure you have **Node.js 18+** installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/saud-portfolio.git
    cd saud-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```

4.  **Open in Browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🚢 Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---
**Developed by Saud Ali Khan**
