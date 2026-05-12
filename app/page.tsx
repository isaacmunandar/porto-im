import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import AboutSection from "@/components/sections/AboutSections";
import ServicesSection from "@/components/sections/ServicesSection";
import MaxySection from "@/components/sections/MaxySection";
import ThoughtsSection from "@/components/sections/ThoughtsSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import SocialSection from "@/components/sections/SocialSection";
import ContactSection from "@/components/sections/ContactSection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Isaac Munandar",
  url: "https://isaacmunandar.com",
  jobTitle: "AI Expert & Entrepreneur",
  description:
    "I help enterprises implement AI for real growth — and train the next generation of leaders to lead it.",
  worksFor: {
    "@type": "Organization",
    name: "MAXY Academy",
    url: "https://maxy.academy",
  },
  sameAs: [
    "https://linkedin.com/in/isaacmunandar",
    "https://instagram.com/isaac.munandar",
    "https://tiktok.com/@isaac.munandar",
    "https://youtube.com/@isaac.munandar",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <ServicesSection />
        <MaxySection />
        <ThoughtsSection />
        <ResourcesSection />
        <SocialSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
