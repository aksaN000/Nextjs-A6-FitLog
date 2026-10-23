import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import NavLinks, { NavLinkItems } from "./NavLinks";

function Links() {
  return (
    <Suspense fallback={<NavLinkItems pathname={null} />}>
      <NavLinks />
    </Suspense>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-base-100/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="FitLog home">
          <Image src="/logo.png" alt="" width={28} height={28} priority />
          <span className="font-display text-xl font-bold tracking-wider text-base-content">
            FITLOG
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <Links />
        </div>

        <div className="w-24" />
      </nav>

      {/* on small screens the links move to their own row so they stay easy to tap */}
      <div className="flex justify-center gap-1 border-t border-line px-4 py-2 md:hidden">
        <Links />
      </div>
    </header>
  );
}
