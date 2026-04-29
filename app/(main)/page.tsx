import About from "@/components/sections/about/About";
import CTA from "@/components/sections/cta/CTA";
import Hero from "@/components/sections/hero/Hero";
import Process from "@/components/sections/process/Process";
import Services from "@/components/sections/services/Services";
import Testimonials from "@/components/sections/testimonials/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}