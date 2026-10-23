import Image from "next/image";
import Link from "next/link";
import type { Workout } from "@/lib/types";
import { StatsRow, TagPills } from "./WorkoutMeta";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="card group overflow-hidden border border-line bg-base-200 transition hover:-translate-y-1 hover:border-primary/50"
    >
      <figure className="relative aspect-[4/3] overflow-hidden bg-base-300">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
      </figure>
      <div className="card-body gap-3 p-5">
        <TagPills tags={workout.muscleGroups} />
        <h3 className="font-display text-xl font-bold uppercase tracking-wide">
          {workout.name}
        </h3>
        <p className="text-sm text-muted">{workout.equipment}</p>
        <div className="mt-1 border-t border-line pt-3">
          <StatsRow workout={workout} />
        </div>
      </div>
    </Link>
  );
}
