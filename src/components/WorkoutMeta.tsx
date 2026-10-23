import { FiClock, FiStar } from "react-icons/fi";
import { LuFlame } from "react-icons/lu";
import type { Workout } from "@/lib/types";

export function TagPills({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="badge h-6 rounded-full border-primary/30 bg-primary/10 px-2.5 text-[11px] font-bold uppercase tracking-wider text-primary"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export function StatsRow({ workout }: { workout: Workout }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
      <span className="flex items-center gap-1.5">
        <FiClock className="text-primary" /> {workout.duration} min
      </span>
      <span className="flex items-center gap-1.5">
        <LuFlame className="text-primary" /> {workout.caloriesBurned} kcal
      </span>
      <span className="flex items-center gap-1.5">
        <FiStar className="text-primary" /> {workout.rating}
      </span>
    </div>
  );
}
