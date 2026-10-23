"use client";

import Link from "next/link";
import { usePlanStore } from "@/lib/plan-store";

export default function NavBadges() {
  const { plan, saved } = usePlanStore();

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/my-plan"
        className="badge badge-primary h-8 gap-1.5 rounded-full px-3 text-xs font-bold uppercase"
      >
        Plan <span className="tabular-nums">{plan.length}</span>
      </Link>
      <Link
        href="/my-plan"
        className="badge badge-outline h-8 gap-1.5 rounded-full border-line px-3 text-xs font-bold uppercase text-base-content hover:border-primary"
      >
        Saved <span className="tabular-nums">{saved.length}</span>
      </Link>
    </div>
  );
}
