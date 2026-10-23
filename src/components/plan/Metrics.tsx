import type { IconType } from "react-icons";
import { FiClock, FiList } from "react-icons/fi";
import { LuFlame } from "react-icons/lu";
import type { Workout } from "@/lib/types";

function MetricCard({ label, value, icon: Icon }: { label: string; value: number; icon: IconType }) {
  return (
    <div className="flex items-center justify-between rounded-box border border-line bg-base-200 p-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{label}</p>
        <p className="mt-1 font-display text-4xl font-bold tabular-nums">{value}</p>
      </div>
      <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Icon className="size-5" />
      </span>
    </div>
  );
}

export default function Metrics({ workouts }: { workouts: Workout[] }) {
  const minutes = workouts.reduce((sum, w) => sum + w.duration, 0);
  const calories = workouts.reduce((sum, w) => sum + w.caloriesBurned, 0);

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <MetricCard label="Exercises" value={workouts.length} icon={FiList} />
      <MetricCard label="Minutes" value={minutes} icon={FiClock} />
      <MetricCard label="Calories" value={calories} icon={LuFlame} />
    </div>
  );
}
