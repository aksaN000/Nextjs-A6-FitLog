import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FiArrowLeft } from "react-icons/fi";
import Spinner from "@/components/Spinner";
import WorkoutActions from "@/components/WorkoutActions";
import { TagPills } from "@/components/WorkoutMeta";
import { getWorkout } from "@/lib/api";

async function WorkoutDetail({ id }: { id: string }) {
  const workout = await getWorkout(id);
  if (!workout) notFound();

  const specs = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating],
  ];

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="relative aspect-square overflow-hidden rounded-box border border-line bg-base-300 lg:sticky lg:top-28 lg:self-start">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h1 className="font-display text-4xl font-bold uppercase leading-tight sm:text-5xl">
            {workout.name}
          </h1>
          <p className="mt-3 text-muted">{workout.description}</p>
        </div>

        <TagPills tags={workout.muscleGroups} />

        <div className="rounded-box border border-line bg-base-200">
          <h2 className="border-b border-line px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-muted">
            Key Specs
          </h2>
          <dl className="divide-y divide-line">
            {specs.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4 px-5 py-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {label}
                </dt>
                <dd className="text-right font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="mb-4 font-display text-2xl font-bold uppercase tracking-wide">
            Instructions
          </h2>
          <ol className="space-y-3">
            {workout.instructions.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-box border border-line bg-base-200 p-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-display font-bold text-primary-content">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <WorkoutActions workout={workout} />
      </div>
    </div>
  );
}

export default function WorkoutPage({ params }: PageProps<"/workouts/[id]">) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Link href="/#library" className="btn btn-ghost btn-sm mb-6 gap-2 rounded-full px-3 text-muted">
        <FiArrowLeft /> Back to library
      </Link>
      <Suspense fallback={<Spinner label="Loading workout…" />}>
        {params.then(({ id }) => (
          <WorkoutDetail id={id} />
        ))}
      </Suspense>
    </section>
  );
}
