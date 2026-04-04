import { Separator } from "@/components/ui/separator";
import { SiteHeader } from "@/components/home/site-header";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { CtaSection } from "@/components/home/cta-section";
import { SiteFooter } from "@/components/home/site-footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <HeroSection />
      <FeaturesSection />
      <Separator />
      <CtaSection />
      <SiteFooter />
    </div>
  );
}
