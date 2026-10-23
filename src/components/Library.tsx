import { Suspense } from "react";
import { getWorkouts } from "@/lib/api";
import Spinner from "./Spinner";
import WorkoutCard from "./WorkoutCard";

async function WorkoutGrid() {
  const workouts = await getWorkouts();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
}

export default function Library() {
  return (
    <section
      id="library"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mb-10">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide sm:text-4xl">
          The Library
        </h2>
        <p className="mt-2 text-muted">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <Suspense fallback={<Spinner label="Loading workouts…" />}>
        <WorkoutGrid />
      </Suspense>
    </section>
  );
}
