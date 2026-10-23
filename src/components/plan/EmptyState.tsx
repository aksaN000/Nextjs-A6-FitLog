import Link from "next/link";
import { FiArrowRight, FiInbox } from "react-icons/fi";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center rounded-box border border-dashed border-line bg-base-200/50 px-6 py-16 text-center">
      <span className="mb-5 flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
        <FiInbox className="size-6" />
      </span>
      <h3 className="font-display text-2xl font-bold uppercase tracking-wide">Nothing here yet</h3>
      <p className="mt-2 max-w-sm text-muted">
        Browse the library and add a lift to get today moving.
      </p>
      <Link href="/" className="btn btn-primary mt-6 rounded-full px-6 font-bold uppercase tracking-wide">
        Go to workouts <FiArrowRight />
      </Link>
    </div>
  );
}
