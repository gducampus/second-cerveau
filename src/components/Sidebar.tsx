"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages } from "@/lib/pages";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-stone-200 bg-stone-50">
      <div className="px-5 py-6">
        <p className="text-base font-semibold text-stone-900">
          Second cerveau
        </p>
      </div>
      <nav aria-label="Navigation principale" className="px-3">
        <ul className="space-y-1">
          {pages.map(({ href, titre }) => {
            const actif = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={actif ? "page" : undefined}
                  className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    actif
                      ? "bg-stone-200 text-stone-900"
                      : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                  }`}
                >
                  {titre}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
