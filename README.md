This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel


The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# streamify-speedy-labs-assignment
# 🎵 Streamify Analytics Dashboard

A modern and responsive analytics dashboard (SAP) for **Streamify**, a fictional music streaming service. The dashboard provides insights into user activity, revenue, and content performance through interactive visualizations and clean UI components.

---

## Tech Stack

- **Framework:** [Next.js (App Router)]
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Library:** [shadcn/ui]
- **Charting:** shadcn + Chart.js / Recharts
- **Table:** [TanStack Table]
- **State Management:** Zustand

---

## Thought Process

I approached this project by breaking the UI into **three primary sections**:

1. **Sidebar**
2. **Header**
3. **Main Content (Visualizations)**

### Sidebar
- Built a collapsible and responsive sidebar to maximize screen space for visualizations.
- Ensured smooth transitions and adaptive layout on all viewport sizes.

### Header
- Included a global search bar, notification icon, and a dark mode toggle.
- Kept the header minimal and functional to maintain focus on data insights.

### Main Section
- Displayed **key metrics** in a responsive grid of data cards.
- Implemented interactive charts for:
  - **Revenue Trends**
  - **User Growth**
  - **Top Streamed Songs**
- Used `TanStack Table` for listing top songs, leveraging client-side caching and performance optimizations.

---

## File Structure Highlights
/app → App Router structure
/components → Reusable UI components (charts, cards, table, etc.)
/data → Static JSON files representing API responses
/libs → Utility functions (formatters, helpers

## Trade-offs & Decisions
Static JSON over API calls: Used local data files to simulate backend for faster iteration.
shadcn/ui: Chosen for its minimalistic and accessible components.
TanStack Table: Preferred for advanced capabilities like virtual rendering, sorting, and performance.


