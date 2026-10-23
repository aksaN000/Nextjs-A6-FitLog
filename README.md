# FitLog

FitLog is a dark gym companion app. You can browse a library of twelve lifts, open any workout to see its specs and instructions, and then add it to today's plan or save it for later. The My Plan page keeps a running total of exercises, minutes and calories for the day.

Live site: https://nextjs-a6-fitlog.vercel.app

## Technologies Used

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- DaisyUI 5
- react-hot-toast
- react-icons
- Vercel for deployment

## Features

1. Workout library showing all 12 workouts from the FitLog API in a responsive 3x4 grid, with muscle group tags, equipment and duration, calories and rating.
2. Workout details page with the image, a key specs table (equipment, difficulty, sets, reps, duration, calories, rating) and numbered instructions.
3. Add to today's plan and Save for later buttons with toast notifications and live Plan and Saved counters in the navbar. Today's plan is capped at five lifts.
4. My Plan page with Exercises, Minutes and Calories metrics, Today's Plan and Saved tabs, a Sort By dropdown (duration, calories, rating) and Mark as Done and Remove buttons on each card.
5. Plan and saved lists are stored in localStorage, so they stay after a page reload.
6. Loading animations while data is fetched, an empty state for empty lists and a custom 404 page.
7. Responsive layout for mobile, tablet and desktop.

## Running Locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in the browser.

## Pages

- `/` home page with the hero banner and the workout library
- `/workouts/[id]` workout details
- `/my-plan` today's plan and saved workouts

## API

- All workouts: https://api.abcz.workers.dev/api/fitlog
- Single workout: https://api.abcz.workers.dev/api/fitlog/:id
