import { SiteHeader } from "@/components/home/site-header";
import { DocsSidebar } from "@/components/docs/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto flex max-w-7xl gap-0">
        {/* Left sidebar */}
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] w-60 shrink-0 overflow-y-auto border-r py-8 pl-6 pr-4 lg:block">
          <DocsSidebar />
        </aside>

        {/* Main content + right TOC */}
        <div className="flex min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
