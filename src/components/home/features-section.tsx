import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  KeyRound,
  TextCursorInput,
  LayoutPanelLeft,
  Puzzle,
  Keyboard,
  Wand2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const buckets: {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string[];
  soon?: boolean;
}[] = [
  {
    icon: KeyRound,
    title: "Auth Integrations",
    description:
      "Pre-wired sign-in, sign-up, and password reset forms. Client-side session handlers and ready-to-install auth flows that drop straight into your project.",
    examples: ["SignInForm", "SignUpForm", "OAuthButtons", "SessionHandler"],
  },
  {
    icon: TextCursorInput,
    title: "Form Fields",
    description:
      "Complex inputs that shadcn doesn't ship — date pickers, multi-selects, tag inputs, rich text, and more. All built to work with react-hook-form.",
    examples: ["DatePicker", "MultiSelect", "TagInput", "RichTextEditor"],
  },
  {
    icon: LayoutPanelLeft,
    title: "Form Wrappers",
    description:
      "Dialog, popover, and sheet wrappers with form behavior baked in — open state, submission handling, and reset on close, already wired up.",
    examples: ["DialogForm", "PopoverForm", "SheetForm"],
  },
  {
    icon: Puzzle,
    title: "Misc Components",
    description:
      "Small, reusable UI pieces that come up on every project — confirm dialogs, empty states, copy buttons, and other patterns worth keeping around.",
    examples: ["ConfirmDialog", "EmptyState", "CopyButton"],
  },
  {
    icon: Keyboard,
    title: "Common Providers",
    description:
      "App-level providers that are tedious to set up from scratch. Drop them into your layout once and forget about them.",
    examples: ["KeyboardShortcuts", "ThemeProvider", "ToastProvider"],
  },
  {
    icon: Wand2,
    title: "Form Builder",
    description:
      "An interactive, promptable form builder you can invoke from the CLI. Describe your form, get the component — installed directly into your project.",
    examples: ["CLI-driven", "AI-assisted", "Schema output"],
    soon: true,
  },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20 flex flex-col gap-10">
      <div className="flex flex-col gap-1.5">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          What&apos;s included
        </p>
        <h2
          className="text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-josefin-sans)" }}
        >
          Six buckets, every project covered
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {buckets.map((b) => (
          <Card
            key={b.title}
            className={b.soon ? "bg-muted/20 border-dashed" : "bg-muted/30"}
          >
            <CardHeader className="gap-4">
              <div className="flex items-start justify-between">
                <div className="flex size-9 items-center justify-center rounded-lg border bg-background">
                  <b.icon className="size-4 text-primary" />
                </div>
                {b.soon && (
                  <Badge variant="outline" className="text-xs">
                    coming soon
                  </Badge>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <CardTitle className="text-base">{b.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {b.description}
                </CardDescription>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {b.examples.map((ex) => (
                  <span
                    key={ex}
                    className="rounded-md border bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
