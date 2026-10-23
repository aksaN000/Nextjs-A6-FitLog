"use client";

import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
import { getWorkouts } from "@/lib/api";
import { type ListName, type PlanEntry, usePlanStore } from "@/lib/plan-store";
import type { Workout } from "@/lib/types";
import EmptyState from "./EmptyState";
import Metrics from "./Metrics";
import PlanCard from "./PlanCard";
import SortDropdown, { type SortOption } from "./SortDropdown";

const TABS: { id: ListName; label: string }[] = [
  { id: "plan", label: "Today's Plan" },
  { id: "saved", label: "Saved" },
];

const sortKey: Record<SortOption, (w: Workout) => number> = {
  Duration: (w) => w.duration,
  Calories: (w) => w.caloriesBurned,
  Rating: (w) => w.rating,
};

function withWorkouts(entries: PlanEntry[], workouts: Workout[]) {
  return entries.flatMap((entry) => {
    const workout = workouts.find((w) => w.id === entry.id);
    return workout ? [{ ...entry, workout }] : [];
  });
}

export default function MyPlan() {
  const store = usePlanStore();
  const [workouts, setWorkouts] = useState<Workout[] | null>(null);
  const [error, setError] = useState(false);
  const [tab, setTab] = useState<ListName>("plan");
  const [sortBy, setSortBy] = useState<SortOption>("Duration");

  useEffect(() => {
    let active = true;
    getWorkouts()
      .then((data) => active && setWorkouts(data))
      .catch(() => active && setError(true));
    return () => {
      active = false;
    };
  }, []);

  const planItems = workouts ? withWorkouts(store.plan, workouts) : [];
  const items = workouts ? withWorkouts(store[tab], workouts) : [];
  const sorted = [...items].sort((a, b) => sortKey[sortBy](b.workout) - sortKey[sortBy](a.workout));

  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold uppercase tracking-wide sm:text-5xl">My Plan</h1>
        <p className="mt-2 text-muted">Cap of five lifts for today. Finish them, then load more.</p>
      </div>

      <Metrics workouts={planItems.map((item) => item.workout)} />

      <div className="mt-10 mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" className="tabs tabs-box w-fit rounded-full border border-line bg-base-200 p-1">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              onClick={() => setTab(id)}
              className={`tab rounded-full px-5 font-semibold ${
                tab === id ? "tab-active !bg-primary !text-primary-content" : "text-muted"
              }`}
            >
              {label}
              <span className="ml-2 tabular-nums opacity-70">{store[id].length}</span>
            </button>
          ))}
        </div>
        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      {error ? (
        <div role="alert" className="alert alert-error rounded-box">
          Could not load workouts. Please refresh the page.
        </div>
      ) : !workouts ? (
        <Spinner label="Loading workouts…" />
      ) : sorted.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {sorted.map(({ workout, done }) => (
            <PlanCard key={workout.id} workout={workout} list={tab} done={done} />
          ))}
        </div>
      )}
    </section>
  );
}
