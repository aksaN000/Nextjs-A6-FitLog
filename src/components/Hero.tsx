import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute -right-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <div className="text-center md:text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Workout Library
          </p>
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
            Train with intent.
            <br />
            <span className="text-primary">Log every set.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base text-muted md:mx-0 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="btn btn-primary mt-8 rounded-full px-7 font-bold uppercase tracking-wide"
          >
            Browse workouts <FiArrowDown className="size-4" />
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <Image
            src="/banner.png"
            alt="Muscle model training on a preacher curl machine"
            width={460}
            height={460}
            priority
            className="h-auto w-64 drop-shadow-[0_20px_60px_rgba(204,255,0,0.15)] sm:w-80 lg:w-[26rem]"
          />
        </div>
      </div>
    </section>
  );
}
