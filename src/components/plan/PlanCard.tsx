"use client";

import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { FiCheck, FiX } from "react-icons/fi";
import { StatsRow } from "@/components/WorkoutMeta";
import { type ListName, markDone, removeFromList } from "@/lib/plan-store";
import type { Workout } from "@/lib/types";

type Props = {
  workout: Workout;
  list: ListName;
  done: boolean;
};

export default function PlanCard({ workout, list, done }: Props) {
  const handleDone = () => {
    markDone(list, workout.id);
    toast.success(`Nice work! ${workout.name} marked as done`);
  };

  const handleRemove = () => {
    removeFromList(list, workout.id);
    toast.success(`${workout.name} removed from the list`);
  };

  return (
    <article
      className={`flex flex-col gap-4 rounded-box border bg-base-200 p-4 sm:flex-row sm:items-center ${
        done ? "border-primary/40" : "border-line"
      }`}
    >
      <div className="flex flex-1 items-center gap-4">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-base-300 sm:size-24">
          <Image src={workout.image} alt={workout.name} fill sizes="96px" className="object-cover" />
        </div>
        <div className="min-w-0 space-y-1.5">
          <h3 className="font-display text-lg font-bold uppercase tracking-wide sm:text-xl">
            {workout.name}
            {done && (
              <span className="badge badge-primary badge-sm ml-2 rounded-full align-middle font-sans font-bold">
                Done
              </span>
            )}
          </h3>
          <p className="text-sm text-muted">{workout.equipment}</p>
          <StatsRow workout={workout} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href={`/workouts/${workout.id}`}
          className="btn btn-outline btn-sm flex-1 rounded-full border-line font-semibold hover:border-primary hover:bg-transparent hover:text-primary sm:flex-none"
        >
          View Details
        </Link>
        <button
          onClick={handleDone}
          disabled={done}
          className="btn btn-primary btn-sm flex-1 rounded-full font-semibold sm:flex-none"
        >
          <FiCheck /> {done ? "Done" : "Mark as Done"}
        </button>
        <button
          onClick={handleRemove}
          aria-label={`Remove ${workout.name}`}
          className="btn btn-ghost btn-sm btn-circle text-muted hover:bg-error/10 hover:text-error"
        >
          <FiX className="size-4" />
        </button>
      </div>
    </article>
  );
}
