import Link from "next/link";
import { SiteLogo } from "../shared/site-logo";
import { Button } from "../ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <SiteLogo />
        <Link
          href="https://vishrut.tech"
          className="text-xs font-mono hover:text-primary transition-colors duration-300"
        >
          Vishrut Agrawal
        </Link>
      </div>
    </footer>
  );
}
