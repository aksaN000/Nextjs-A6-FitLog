"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NAV_LINKS = [
  { href: "/", label: "Workout" },
  { href: "/my-plan", label: "My Plan" },
];

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/" || pathname.startsWith("/workouts");
  return pathname.startsWith(href);
}

export function NavLinkItems({ pathname }: { pathname: string | null }) {
  return NAV_LINKS.map(({ href, label }) => {
    const active = isActive(pathname, href);
    return (
      <Link
        key={href}
        href={href}
        className={`rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
          active
            ? "bg-primary/10 text-primary"
            : "text-muted hover:text-base-content"
        }`}
      >
        {label}
      </Link>
    );
  });
}

export default function NavLinks() {
  const pathname = usePathname();
  return <NavLinkItems pathname={pathname} />;
}
