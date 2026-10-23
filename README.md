# 💪 FitLog — Workout Library

FitLog is a dark, no-nonsense gym companion. Browse a library of twelve lifts, open any workout to see its specs and step-by-step instructions, then lock it into today's plan or save it for later. The My Plan page keeps a live tally of exercises, minutes and calories so you can watch the day's work add up.

**Live site:** https://nextjs-a6-fitlog.vercel.app

## 🛠️ Technologies

- **Next.js 16** (App Router, Server Components, Suspense streaming)
- **TypeScript**
- **Tailwind CSS v4**
- **DaisyUI 5** with a custom dark `fitlog` theme
- **react-hot-toast** for notifications
- **react-icons** for icons
- Deployed on **Vercel**

## ✨ Features

1. **Workout library**: all 12 workouts from the FitLog API in a responsive 3×4 grid, with tags, equipment and duration / calories / rating stats.
2. **Workout details**: a two-column page with the illustration, key specs table (equipment, difficulty, sets, reps, duration, calories, rating) and numbered instructions.
3. **Today's plan and Saved lists**: add a lift to today's plan or save it for later, with toast feedback and live counter badges in the navbar. The plan is capped at five lifts.
4. **My Plan dashboard**: live Exercises / Minutes / Calories metrics, Today's Plan / Saved tabs, a Sort By dropdown (duration, calories, rating), and Mark as Done / Remove actions on every card.
5. **Persistent data**: plan and saved lists are stored in `localStorage`, so they survive page reloads.
6. **Polished states**: loading animations while data is fetched, an empty state with a link back to the library, and a custom 404 page.
7. **Fully responsive** on mobile, tablet and desktop.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home: hero + library
│   ├── workouts/[id]/        # Workout detail page
│   ├── my-plan/              # My Plan page
│   └── not-found.tsx         # 404 page
├── components/               # Navbar, Footer, Hero, cards, My Plan UI
└── lib/                      # API helpers, types, plan store
```

## 🔗 API

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`
