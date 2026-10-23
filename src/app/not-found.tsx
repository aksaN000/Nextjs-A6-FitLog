import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <Image src="/logo.png" alt="" width={48} height={48} className="mb-6 opacity-80" />
      <p className="font-display text-8xl font-bold text-primary sm:text-9xl">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold uppercase tracking-wide">
        Wrong rack, lifter
      </h1>
      <p className="mt-3 text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary mt-8 rounded-full px-6 font-bold uppercase tracking-wide">
        <FiArrowLeft /> Back to workouts
      </Link>
    </section>
  );
}
