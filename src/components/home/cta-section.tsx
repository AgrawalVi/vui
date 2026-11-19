import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-xl border bg-muted/30 px-8 py-12 flex flex-col gap-6 items-start">
        <div className="flex flex-col gap-3">
          <h2
            className="text-3xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-josefin-sans)" }}
          >
            Ready to ship faster?
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Pick a component, run the CLI command, and paste it into your
            project. No package to install, no config to write.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <Button asChild>
            <Link href="/docs/components">
              Browse Components
              <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/introduction">Read the docs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
