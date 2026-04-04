import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/constants";
import Link from "next/link";
import { Github } from "../../../registry/logos/github";
import { SiteLogo } from "../shared/site-logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/">
          <SiteLogo />
        </Link>
        <nav className="flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs/introduction">Docs</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs/components">Components</Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github data-icon="inline-start" />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
