import { Hero } from '@/components/hero';
import { DevelopersSection } from '@/components/developers-section';
import { ServicesSection } from '@/components/services-section';
import { WhyChooseUs } from '@/components/why-choose-us';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <DevelopersSection />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  );
}
