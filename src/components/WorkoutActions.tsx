"use client";

import toast from "react-hot-toast";
import { FiBookmark, FiCheck, FiPlus } from "react-icons/fi";
import { addToList, PLAN_CAP, usePlanStore } from "@/lib/plan-store";
import type { Workout } from "@/lib/types";

export default function WorkoutActions({ workout }: { workout: Workout }) {
  const { plan, saved } = usePlanStore();
  const inPlan = plan.some((entry) => entry.id === workout.id);
  const isSaved = saved.some((entry) => entry.id === workout.id);
  const planFull = plan.length >= PLAN_CAP;

  const handleAddToPlan = () => {
    addToList("plan", workout.id);
    toast.success(`${workout.name} added to today's plan`);
  };

  const handleSave = () => {
    addToList("saved", workout.id);
    toast.success(`${workout.name} saved for later`);
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        onClick={handleAddToPlan}
        disabled={inPlan || planFull}
        className="btn btn-primary flex-1 rounded-full font-bold uppercase tracking-wide"
      >
        {inPlan ? <FiCheck /> : <FiPlus />}
        {inPlan ? "In today's plan" : planFull ? "Plan is full (5/5)" : "Add to today's plan"}
      </button>
      <button
        onClick={handleSave}
        disabled={isSaved}
        className="btn btn-outline flex-1 rounded-full border-line font-bold uppercase tracking-wide hover:border-primary hover:bg-transparent hover:text-primary"
      >
        <FiBookmark />
        {isSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
