import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal } from "lucide-react";
import { Github } from "../../../registry/logos/github";
import Link from "next/link";
import { GITHUB_URL } from "@/constants";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, oklch(0.75 0.015 285) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.511_0.096_186.391/0.08),transparent)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 py-24">
        <div className="flex flex-col gap-5 max-w-2xl">
          <Badge variant="secondary" className="w-fit">
            One source of truth
          </Badge>
          <h1
            className="text-5xl font-semibold tracking-tight leading-[1.1]"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            Stop copying components
            <br />
            between <span className="text-primary">projects.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
            A personal collection of components built on shadcn/ui — auth
            integrations, form utilities, providers, and more. One place, always
            up to date, copy into any project.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <Button asChild>
            <a href="/docs/components">
              Browse Components
              <ArrowRight data-icon="inline-end" />
            </a>
          </Button>
          <Button variant="outline" asChild>
            <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Github data-icon="inline-start" />
              View on GitHub
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-3 rounded-lg border bg-muted/60 px-4 py-3 w-fit max-w-full overflow-x-auto">
          <Terminal className="size-4 text-primary-foreground shrink-0" />
          <code className="font-mono text-sm whitespace-nowrap">
            <span className="text-muted-foreground">
              npx shadcn@latest add{" "}
            </span>
            <span className="text-foreground">
              https://vui.vishrut.tech/r/[component]
            </span>
          </code>
        </div>
      </div>
    </section>
  );
}
