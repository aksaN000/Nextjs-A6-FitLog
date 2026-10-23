import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-[#0b0d10]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="" width={24} height={24} />
          <span className="font-display text-lg font-bold tracking-wider">FITLOG</span>
        </div>
        <p className="text-sm text-muted">
          © 2026 FitLog | Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
