"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsConfig } from "@/lib/docs-config";

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      {docsConfig.sidebarNav.map((section) => (
        <div key={section.title} className="pb-6">
          <h4 className="mb-1 px-2 py-1 text-sm font-semibold">
            {section.title}
          </h4>
          <div className="flex flex-col gap-0.5">
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-2 py-1.5 text-sm transition-colors hover:text-foreground",
                  pathname === item.href
                    ? "bg-accent font-medium text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}
